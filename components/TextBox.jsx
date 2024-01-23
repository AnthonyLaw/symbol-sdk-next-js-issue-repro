import CustomImage from './CustomImage';
import styles from '@/styles/components/TextBox.module.scss';

const TextBox = ({ iconSrc, placeholder, value, className, errorMessage, onChange }) => {
	const isError = !!errorMessage;

	return (
		<div className={`${styles.textBox} ${isError && styles.textBox__error} ${className}`}>
			{!!iconSrc && <CustomImage src={iconSrc} className={styles.icon} alt="Text box icon" />}
			<input
				placeholder={placeholder}
				value={value || ''}
				onChange={e => onChange(e.target.value)}
				className={styles.input}
			/>
			{isError && <div className={styles.errorMessage}>{errorMessage}</div>}
		</div>
	);
};

export default TextBox;
