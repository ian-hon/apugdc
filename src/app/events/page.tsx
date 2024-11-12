"use client";

import Footer from "../components/footer";
import { ReturnButton } from "../components/returnButton";

import '../globals.css';

import styles from './events.module.css';

import image_0 from '../assets/events/multiplayer_talk/0.png';
import Image from "next/image";

export default function Events() : React.JSX.Element {
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
                <div className={styles.tile}>
                    <div id={styles.info}>
                        <div id={styles.description}>
                            <h2>
                                Multiplayer Talk
                            </h2>
                            <h3>
                                by Jon Tang • 24/10/2024
                            </h3>
                        </div>
                        <div id={styles.gradient}/>
                    </div>
                    <div id={styles.headerImage}>
                        <Image src={image_0} alt=''></Image>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}