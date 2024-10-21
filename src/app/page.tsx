"use client";

import styles from "./page.module.css";
import headerBackground from "./assets/space.jpg";
import Image from "next/image";
import CountUp from "react-countup";
import Footer from "./components/footer";
import Link from "next/link";
import { useState } from "react";

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

const infoSection = [
    [
        'Events',
        <div id={styles.info}>
            <h2>
                Past & Upcoming Events
            </h2>
        </div>
    ],
    [
        'R&D',
        <div id={styles.rnd}>
            <h2>
                Join our R&D Team to Shape Your Future in The Gaming Industry!
            </h2>
            <h3>
                What are you waiting for? Join our R & D Department & Collaborate with Like-Minded Peers to Work on Various Projects & Do Research.
            </h3>
            <h3>
                If you are not a member, join the APU Game Development Club now! 🎮‼️
            </h3>
            <Link href="https://forms.gle/xRNK1CXzDuJRJgug8" target="_blank">
                <h2>
                    Join now
                </h2>
            </Link>
            <h3>
                And plus, it would look good on your resumé too.😏
            </h3>
        </div>
    ],
    [
        'Hall of Fame',
        <div id={styles.info}>
            <h2>
                Hall of Fame
            </h2>
        </div>
    ],
    [
        'About APUGDC',
        <div id={styles.about}>
            <h2>Welcome to the <b>APU Game Development Club!</b></h2>
            <h3>We're here to promote the development of video games, and we host <b>workshops, game jams</b> and <b>many more</b> to encourage everyone to learn about <u>game design and development</u>.</h3>
            <h3>We are open to students of <u>all levels of experience.</u></h3>
            <Link href=""><h2>Join us and find out more!</h2></Link>
        </div>
    ],
]


export default function Home() {
    const [section, selectSection] = useState(0);

    return (
        <div id={styles.page}>
            <div id={styles.titleHeader}>
                <div>
                    <h1>
                        APUGDC
                    </h1>
                    <h2>
                        Empowering the next generation of game developers
                    </h2>
                    <Link title="it's free!" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfQH_7SUjGGpFqssLeJK67P60P8Yei32xYar-dVQ-3joDpR0g/viewform?usp=pp_url">
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
            {/* <div className={styles.hr}/> */}
            <div id={styles.infoContainer}>
                {/* module.css call necessary? */}
                {/* TODO: regular string call might be good enough */}
                <div id={styles.infoSelection}>
                    {
                        infoSection.map(([k, _], i) => (
                            <div
                                className={ i == section ? styles.selected : "" }
                                onClick={() => { selectSection(i); }}
                            >
                                <h2>{k}</h2>
                                <div className={styles.hr} />
                            </div>
                        ))
                    }
                </div>
                {
                    infoSection[section][1]
                }
            </div>
            <Footer/>
        </div>
    );
}
