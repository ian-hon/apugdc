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
        name: 'GGW',
        href: 'ggw'
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
            <Link id={styles.join} href="https://docs.google.com/forms/d/e/1FAIpQLSfQH_7SUjGGpFqssLeJK67P60P8Yei32xYar-dVQ-3joDpR0g/viewform?usp=pp_url">
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