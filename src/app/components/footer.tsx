import twitter from '../assets/sns/twitter.png';
import facebook from '../assets/sns/facebook.png';
import instagram from '../assets/sns/instagram.png';
import mail from '../assets/sns/mail.png';
import discord from '../assets/sns/discord.png';
import Image from 'next/image';
import Link from 'next/link';

import './footer.css';

export default function Footer(): React.JSX.Element {
    return (
        <div id={"footer"}>
            <div>
                <Link href="">
                    <Image src={twitter} alt="Twitter"/>
                </Link>
                <Link href="">
                    <Image src={facebook} alt="Facebook"/>
                </Link>
                <Link href="">
                    <Image src={instagram} alt="Instagram"/>
                </Link>
                <Link href="">
                    <Image src={mail} alt="Email"/>
                </Link>
                <Link href="">
                    <Image src={discord} alt="Discord"/>
                </Link>
            </div>
            <Link href="https://www.github.com/Asianerd">
                website by ian
            </Link>
            <Link href="https://github.com/Miisan-png">
                and azar
            </Link>
        </div>
    )
}