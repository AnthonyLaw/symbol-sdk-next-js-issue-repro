import PageLoadingIndicator from '@/components/PageLoadingIndicator';
import styles from '@/styles/pages/Layout.module.scss';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.scss';

const App = ({ Component, pageProps }) => {
	const router = useRouter();

	return (
		<div className={styles.wrapper}>
			<PageLoadingIndicator />
			<div className={styles.contentContainer}>
				<main className={styles.contentContainerInner}>
					<Component {...pageProps} key={router.asPath} />
				</main>
			</div>
		</div>
	);
};

export default appWithTranslation(App);
