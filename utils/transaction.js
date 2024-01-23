import { ChronoUnit, Instant } from '@js-joda/core';
import symbolSdk from 'symbol-sdk';
import config from '@/config';

export const createAggregateTransferTransaction = (recipientAddress, message) => {
    const facade = new symbolSdk.facade.SymbolFacade(config.NETWORK_IDENTIFIER);

    const embeddedTransactions = [];
    embeddedTransactions.push(facade.transactionFactory.createEmbedded({
        type: 'transfer_transaction_v1',
        recipientAddress: recipientAddress,
        message: createTransactionMessage(message),
        mosaics: []
    }));

    const merkleHash = facade.constructor.hashEmbeddedTransactions(embeddedTransactions);
    const transaction = facade.transactionFactory.create({
        type: 'aggregate_complete_transaction_v2',
        deadline: createTransactionDeadline(),
        transactionsHash: merkleHash,
        transactions: embeddedTransactions,
    });
    const payload = symbolSdk.utils.uint8ToHex(transaction.serialize());

    return payload;
}

const createTransactionMessage = (text) => {
    const textEncoder = new TextEncoder();

    return new Uint8Array([0, ...textEncoder.encode(text)])
}

const createTransactionDeadline = () => {
    const deadlineDateTime = Instant.now().plus(2, ChronoUnit.HOURS);
    const deadline = deadlineDateTime.minusSeconds(config.EPOCH_ADJUSTMENT).toEpochMilli();

    return BigInt(deadline);
}
