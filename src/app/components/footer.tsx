import twitter from '../assets/sns/twitter.png';
import facebook from '../assets/sns/facebook.png';
import instagram from '../assets/sns/instagram.png';
import mail from '../assets/sns/mail.png';
import linktree from '../assets/sns/linktree.png';
import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.css';

export default function Footer(): React.JSX.Element {
    return (
        <div id={styles.footer}>
            <div id={styles.linkContainer}>
                <Link href="https://www.facebook.com/apugamedevclub">
                    <Image src={facebook} alt="Facebook"/>
                </Link>
                <Link href="https://www.instagram.com/apugdc/">
                    <Image src={instagram} alt="Instagram"/>
                </Link>
                <Link href="mailto:apu.gdc@gmail.com">
                    <Image src={mail} alt="Email"/>
                </Link>
                <Link href="https://www.linktr.ee/apugdc">
                    <Image src={linktree} alt="Linktree"/>
                </Link>
            </div>
            <Link href="https://www.github.com/ian-hon">
                website by ian
            </Link>
            <Link href="https://github.com/Miisan-png">
                and azar
            </Link>
        </div>
    )
}