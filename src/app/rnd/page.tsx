"use client";

import Link from 'next/link';
import global_styles from '../page.module.css';
import styles from './rnd.module.css';
import arrow from '../assets/arrow-left.png';
import Image from 'next/image';
import Footer from '../components/footer';
import { useState } from 'react';

function JoinButton({ contain=false, size='1rem' } : { contain?:any, size?:any}) {
    let a = <Link className={styles.link} style={{ fontSize:size }} href="https://forms.gle/xRNK1CXzDuJRJgug8" target="_blank">
        <h2>
            Join now!
        </h2>
        <div/>
    </Link>;
    return (
        contain ? (<div style={{ display:'flex', alignContent:'center', justifyContent:'center', width:'100%' }}>{a}</div>) : a
    );
}

const infoContent = [
    [
        'Why?',
        <div id={styles.infoContainer}>
            <h1>
                Why join R&D?
            </h1>
            <div>
                <span>
                    <h2>
                        Ever wanted to work on a <u>meaningful</u> project?
                    </h2>
                    <h2>
                        Not sure what and how to get started?
                    </h2>
                </span>
                <h2>
                    Join and collaborate with other fellow <b>like-minded people</b> and be <b>productive!</b>
                </h2>
                <h2>
                    More details in the next sections, but if you're already interested then why not just join us already?
                </h2>
                <JoinButton contain size={'0.8em'}/>
            </div>
        </div>
    ],
    [
        'What?',
        <div id={styles.infoContainer}>
            what
        </div>
    ],
    [
        'Mission',
        <div id={styles.infoContainer}>
            mission
        </div>
    ],
    [
        'Roles',
        <div id={styles.infoContainer}>
            roles
        </div>
    ]
]

export default function Rnd() : React.JSX.Element {
    const [selection, select] = useState(0);

    return (
        <div id={global_styles.page}>
            <Link className={global_styles.return} href="/">
                <Image src={arrow} alt=''></Image>
                <h2>
                    Back to home
                </h2>
            </Link>
            <div id={styles.titleHeader}>
                <h1>
                    R&D Program
                </h1>
                <h2>
                    Join our R&D team to shape your future in the gaming industry!
                </h2>
            </div>
            <JoinButton/>
            <div id={styles.infoSelection}>
                {
                    infoContent.map((e, index) => (
                        <div
                        className={styles.selection}
                        id={selection == index ? styles.active : ''}
                        onClick={() => {
                            select(index);
                        }}>
                            <h2>{e[0]}</h2>
                            <div className={styles.hr} />
                        </div>
                    ))
                }
            </div>
            {
                infoContent[selection][1]
            }
            {/* <div id={styles.infoContainer}>
                {
                    infoContent[selection][1]
                }
            </div> */}
            <Footer/>
        </div>
    );
}