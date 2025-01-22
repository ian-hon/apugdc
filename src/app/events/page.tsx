"use client";


import Footer from "../components/footer";
import { ReturnButton } from "../components/returnButton";

import '../globals.css';
import styles from './events.module.css';
import Link from "next/link";
import { eventData } from "../data/event_data";
import { EventTileElement } from "../components/eventTileComponent";


export default function Events() : React.JSX.Element {
    let firstEventData = eventData[0];
    let nextEventDatas = eventData.slice(1);
    return (
        <div id={styles.events}>
            <ReturnButton/>
            <div id={styles.header}>
                <h2>
                    Events
                </h2>
                <h3>
                    Upcoming Events
                </h3>
            </div>
            <div id={styles.content}>
                <EventTileElement t={firstEventData} />
                <div id={styles.collection}>
                    {
                        nextEventDatas.map((t) => (
                            <EventTileElement t={t}/>
                        ))
                    }
                </div>
                <div id={styles.header}>
                    <h3>
                        <Link href={'https://www.instagram.com/apugdc/'}><u>Check out our past events here</u></Link>
                    </h3>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

