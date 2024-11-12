"use client";

import Image from "next/image";

import Footer from "../components/footer";
import { ReturnButton } from "../components/returnButton";

import '../globals.css';
import styles from './events.module.css';

const eventData = [
    {
        assetDirectory: 'multiplayer_talk',
        title: 'Multiplayer Talk',
        host: 'Jon Tang',
        time: 1729728000000,
        location: 'APU Campus'
    },
    {
        assetDirectory: 'multiplayer_talk',
        title: 'Multiplayer Talk',
        host: 'Jon Tang',
        time: 1729728000000,
        location: 'APU Campus'
    },
    {
        assetDirectory: 'multiplayer_talk',
        title: 'Multiplayer Talk',
        host: 'Jon Tang',
        time: 1729728000000,
        location: 'APU Campus'
    },
]

export default function Events() : React.JSX.Element {
    let thumbnail = eventData[0];
    let collection = eventData.slice(1);

    function TileElement({t}: { t:any }) {
        let time = new Date(t.time);

        return (
            <div className={styles.tile} key={t.assetDirectory}>
                <div id={styles.info}>
                    <div id={styles.description}>
                        <h2>
                            {t.title}
                        </h2>
                        <h3>
                            by {t.host}  •  {time.getDate()}/{time.getMonth()}/{time.getFullYear()}  •  {t.location}
                        </h3>
                    </div>
                    <div id={styles.gradient}/>
                </div>
                <div id={styles.headerImage}>
                    <Image src={`/events/${t.assetDirectory}/thumbnail.png`} width={1000} height={1000} alt=''></Image>
                </div>
            </div>
        )
    };

    return (
        <div id={styles.events}>
            <ReturnButton/>
            <div id={styles.header}>
                <h2>
                    Events
                </h2>
                <h3>
                    our past events
                </h3>
            </div>
            <div id={styles.content}>
                <TileElement t={thumbnail} />
                <div id={styles.collection}>
                    {
                        collection.map((t) => (
                            <TileElement t={t}/>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
}