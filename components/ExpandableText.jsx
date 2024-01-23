import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import styles from '@/styles/components/ExpandableText.module.scss';

const ExpandableText = ({ children, className }) => {
	return (
		<div className={`${styles.expandableText} ${className}`}>
			{children}
		</div>
	)
}

export default ExpandableText;
