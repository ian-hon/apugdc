"use client";

import styles from "./page.module.css";
import headerBackground from "./assets/space.jpg";
import Image from "next/image";
import CountUp from "react-countup";
import Footer from "./components/footer";
import Link from "next/link";
import { useEffect, useState } from "react";

const counterData = [
    {
        number: 4,
        description: 'Past & upcoming events',
        link: ''
    },
    {
        number: 400,
        description: 'Members and counting',
        link: ''
    },
    {
        number: 2,
        description: 'Years since launch',
        link: ''
    },
    {
        number: 35,
        description: 'Committee members',
        link: ''
    },
]

export default function Home() {
    const [prevScroll, setPrevScroll] = useState(0);
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let d = Math.max(0, window.scrollY);

            setScrollAmount(d - prevScroll);
            setPrevScroll(d);
        })
    })

    return (
        <div id={styles.page}>
            <div id={styles.navbar} aria-label={scrollAmount > 0 ? 'open' : ''}>
                <Link href="/events">
                    <h2>
                        Events
                    </h2>
                    <div className={styles.hr}/>
                </Link>
                <Link href="/showcase">
                    <h2>
                        Showcase
                    </h2>
                    <div className={styles.hr}/>
                </Link>
                <Link href="/hall-of-fame">
                    <h2>
                        Hall of Fame
                    </h2>
                    <div className={styles.hr}/>
                </Link>
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
            <div id={styles.titleHeader}>
                <div id={styles.info}>
                    <h1>
                        APUGDC
                    </h1>
                    <h2>
                        Empowering the next generation of game developers
                    </h2>
                    <Link id={styles.join} title="it's free!" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfQH_7SUjGGpFqssLeJK67P60P8Yei32xYar-dVQ-3joDpR0g/viewform?usp=pp_url">
                        Join APUGDC!
                    </Link>
                </div>
                <Image id={styles.headerBackground} src={headerBackground} alt=""/>
            </div>
            <div id={styles.counterContainer}>
                {
                    counterData.map((e) => 
                        (
                            <div className={styles.info}>
                                <div>
                                    <CountUp end={e.number} duration={5} />
                                    <div/>
                                </div>
                                <h3>{e.description}</h3>
                            </div>
                        )
                    )
                }
            </div>
            <div id={styles.about}>
                <h2>Welcome to the <b>APU Game Development Club!</b></h2>
                <div>
                    <h3>We're here to promote the development of video games.</h3>
                    <h3>We host <b>workshops, game jams</b> and <b>many more</b><br/>to encourage everyone to learn about <u>game design and development</u>.</h3>
                    <h3>We are open to students of <u>all levels of experience.</u></h3>
                    <div>
                        <Link className={styles.link} href="https://docs.google.com/forms/d/e/1FAIpQLSfQH_7SUjGGpFqssLeJK67P60P8Yei32xYar-dVQ-3joDpR0g/viewform?usp=pp_url">
                            <h2>
                                Join us and find out more!
                            </h2>
                        </Link>
                        <h3>
                            it'll look good on your resumé 😏
                        </h3>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
