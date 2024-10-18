"use client";

import styles from "./page.module.css";
import headerBackground from "./assets/space.jpg";
import Image from "next/image";
import CountUp from "react-countup";
import Footer from "./footer";

const data = [
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
                </div>
                <Image id={styles.headerBackground} src={headerBackground} alt=""/>
            </div>
            <div id={styles.infoContainer}>
                {
                    data.map((e) => 
                        (
                            <div className={styles.info}>
                                <div>
                                    <CountUp end={e.number} duration={5} />
                                    {/* <h2>{e.number}</h2> */}
                                    <div/>
                                </div>
                                <h3>{e.description}</h3>
                            </div>
                        )
                    )
                }
            </div>
            <div className={styles.hr}/>
            <div id={styles.linkContainer}>
                <a>
                    <h3>
                        R&D Program
                    </h3>
                </a>
                <a>
                    <h2>
                        Become an APUGDC member!
                    </h2>
                </a>
                <a>
                    <h3>
                        What is APUGDC?
                    </h3>
                </a>
            </div>
            <div className={styles.hr}/>
            <div id={styles.eventContainer}>
                <h1>Events</h1>
                <div>
                    <h2>
                        insta embed here
                    </h2>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
