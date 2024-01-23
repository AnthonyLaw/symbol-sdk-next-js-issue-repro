import styles from '@/styles/pages/Home.module.scss';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ExpandableText from '@/components/ExpandableText';
import { useState } from 'react';
import TextBox from '@/components/TextBox';
import Button from '@/components/Button';
import { createAggregateTransferTransaction } from 'utils/transaction';

const DEFAULT_RECIPIENT_ADDRESS = 'TCEUGLPCMO5Y72EEISSNUKGTMCN5RO4PVYMK5FI';

export const getServerSideProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common']))
		}
	};
};

const Home = () => {
	const [payload, setPayload] = useState('');
	const [recipientAddress, setRecipientAddress] = useState(DEFAULT_RECIPIENT_ADDRESS);
	const [message, setMessage] = useState('');

	const createPayload = () => {
		const payload = createAggregateTransferTransaction(recipientAddress, message);

		setPayload(payload);
	}

	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Page</title>
			</Head>
			<div className="layout-flex-col-sections">
				<h3>Create Aggregate Transfer Transaction</h3>
				<div className="layout-flex-col-fields">
					<TextBox placeholder="Recipient Address" value={recipientAddress} onChange={setRecipientAddress}/>
					<TextBox placeholder="Message" value={message} onChange={setMessage} />
					<Button onClick={createPayload}>Create Transaction Payload</Button>
					<ExpandableText>{payload}</ExpandableText>
				</div>
			</div>
		</div>
	);
};

export default Home;
