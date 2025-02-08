"use client";

import Footer from '../components/footer';
import { ReturnButton } from '../components/returnButton';
import styles from './leaderboard.module.css';
import '../globals.css';
import { useEffect, useState } from 'react';
import { BACKEND_ADDRESS } from '../constants';

function LeaderboardElement({ e, i }: { e: any, i: any }) {
    return <div className={styles.leaderboardElement}>
        <h3>
            {e.user.name}
        </h3>
        <h4>
            {i}
        </h4>
    </div>
}

export default function Leaderboard() {
    const [board, changeBoard] = useState<any[]>([]);

    useEffect(() => {
        fetch(`${BACKEND_ADDRESS}/leaderboard/fetch`)
        .then(r => r.json())
        .then(board => {
            changeBoard(board.sort((a: any, b: any) => b.points - a.points));
        })
    }, []);

    return <div id={styles.page}>
        <ReturnButton/>
        <h1 id={styles.construction}>
            (this page is currently under construction; please check back later!)
        </h1>
        <h1 id={styles.title}>
            APUGDC 2025 Battlepass
        </h1>
        <div id={styles.podium}>
            {
                (board.length >= 3) &&
                [
                    [board[1], '8rem', 'silver'],
                    [board[0], '11rem', 'gold'],
                    [board[2], '5rem', 'brown']
                ].map((e: any, index: any) => 
                    <div className={styles.stand} key={index}>
                        <h3>
                            {e[0].user.name}
                        </h3>
                        <div id={styles.fill} style={{
                            backgroundColor:e[2].toString(),
                            height:e[1].toString()
                        }}>
                            {e[0].points}
                        </div>
                    </div>
                )
            }
        </div>
        <div id={styles.container}>
            {
                board.slice(3).map((e: any, index: any) => <LeaderboardElement key={index} e={e} i={(index + 3)}/>)
            }
        </div>
        <div id={styles.explanation}>
            <h4>
                How do I earn points?
            </h4>
            <h5>
                You can earn points by ...
            </h5>
        </div>
        <Footer/>
    </div>
}