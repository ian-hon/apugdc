import styles from './page.module.css';

import twitter from './assets/sns/twitter.png';
import facebook from './assets/sns/facebook.png';
import instagram from './assets/sns/instagram.png';
import mail from './assets/sns/mail.png';
import discord from './assets/sns/discord.png';
import Image from 'next/image';

export default function Footer(): React.JSX.Element {
    return (
        <div id={styles.footer}>
            <div>
                <a>
                    <Image src={twitter} alt="Twitter"/>
                </a>
                <a>
                    <Image src={facebook} alt="Facebook"/>
                </a>
                <a>
                    <Image src={instagram} alt="Instagram"/>
                </a>
                <a>
                    <Image src={mail} alt="Email"/>
                </a>
                <a>
                    <Image src={discord} alt="Discord"/>
                </a>
            </div>
            <a href="https://www.github.com/Asianerd">
                website by ian
            </a>
            <a href="https://github.com/Miisan-png">
                and azar
            </a>
        </div>
    )
}