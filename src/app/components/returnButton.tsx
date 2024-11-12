import Image from 'next/image';
import styles from './returnButton.module.css';
import returnImage from '../assets/arrow-left.png';
import Link from 'next/link';

export function ReturnButton() {
    return (
        <Link className={styles.return} href='/'>
            <Image src={returnImage} alt=''></Image>
            <h2>
                back to home
            </h2>
        </Link>
    )
}