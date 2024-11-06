import Link from 'next/link';
import '../globals.css';
import styles from './navbar.module.css';

const navbarItems = [
    {
        name: 'Events',
        href: 'events'
    },
    {
        name: 'Showcase',
        href: 'showcase'
    },
    {
        name: 'Hall of Fame',
        href: 'hall-of-fame'
    }
]

export default function NavBar({ scrollAmount } : { scrollAmount: number }) {
    return (
        <div id={styles.navbar} aria-label={scrollAmount > 0 ? 'open' : ''}>
            {
                navbarItems.map((e) => (
                    <Link href={`/${e.href}`} key={e.name}>
                        <h2>{e.name}</h2>
                        <div className={styles.hr}/>
                    </Link>
                ))
            }
            <Link id={styles.join} onClick={() => {
                console.log("pressed");
            }} href="">
                <h2>
                    <b>
                        Join us
                    </b>
                </h2>
                <div className={styles.hr}/>
            </Link>
        </div>
    )
}