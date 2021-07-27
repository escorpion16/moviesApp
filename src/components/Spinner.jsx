import { FaSpinner } from 'react-icons/fa';
import styles from '../components/Spinner.module.css';

export const Spinner = () => {
    return (
        <div className={ styles.spinner }>
            <FaSpinner size={50} className={ styles.spinning }/>
        </div>
    )
}
