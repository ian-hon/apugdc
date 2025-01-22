"use client";

import styles from "./page.module.css";
import Image from "next/image";
import CountUp from "react-countup";
import Footer from "./components/footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import NavBar from "./components/navbar";
import { EventTileElement } from "./components/eventTileComponent";
import { eventData } from "./data/event_data";

// feels like this value shouldnt be separated
const memberCount = 400;
const counterData = [
    {
        number: 32,
        description: 'Past & upcoming events',
        link: ''
    },
    {
        number: memberCount,
        description: 'Members and counting',
        link: ''
    },
    {
        number: 2,
        description: 'Years since launch',
        link: ''
    },
    {
        number: 54,
        description: 'Current and past committees',
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
        <ParticleBackground />
            <NavBar scrollAmount={scrollAmount} />
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
                        {/* Be the {ordinalise(memberCount + 1)} member */}
                        {/* TODO : revisit this */}
                    </Link>
                </div>
            </div>
            {/* <div className={styles.displayContainer} id={styles.honoredGuests}>
                <h2>
                    Guests of Honour
                </h2>
                <HonoredGuests/>
            </div> */}
            <div id={styles.counterContainer}>
                {
                    counterData.map((e) => 
                        (
                            <div className={styles.info} key={e.description}>
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
                    <h3>We are a student-run game developer community from Asia Pacific University who are passionate about all aspects of game development</h3>
                    <h3>We host game dev events like <b>workshops, game jams, game dev festival</b> and <b>many more</b><br/>to encourage everyone to learn about <u>game design and development</u>.</h3>
                    <h3>We are open to students of <u>all levels of experience.</u> whether you are a veteran in this field or have an interest in the magical world of game dev</h3>
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
            <div className={styles.displayContainer} id={styles.events}>
                <h2>
                    Events
                </h2>
                <h3>
                    Our upcoming events
                    <br/>
                </h3>
                <div id={styles.contentContainer}>
                    <EventTileElement t={eventData[0]}/>
                </div>
            </div>
            {/* <div className={styles.displayContainer} id={styles.showcase}>
                <h2>
                    Showcase
                </h2>
                <h3>
                    Check out our member's work!
                </h3>
                <div id={styles.container}>
                    
                </div>
            </div> */}
            <Footer/>
        </div>
    );
}
