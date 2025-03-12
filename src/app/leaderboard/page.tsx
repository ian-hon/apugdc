"use client";

import Footer from '../components/footer';
import { ReturnButton } from '../components/returnButton';
import styles from './leaderboard.module.css';
import '../globals.css';
import { useEffect, useState } from 'react';
import { BACKEND_ADDRESS } from '../constants';

function LeaderboardElement({ e, i }: { e: any, i: any }) {
    return <div className={styles.leaderboardElement}>
        <h4>
            {i}
        </h4>
        <h3>
            {e.name}
        </h3>
        <h4>
            {e.points}
        </h4>
    </div>
}

export default function Leaderboard() {
    const [board, changeBoard] = useState<any[]>([]);
    const [allEntries, changeAllEntries] = useState<any[]>([]);

    const [committeeView, changeCommitteeView] = useState<boolean>(false);

    useEffect(() => {
        let result = [
            {
                name:'lorem',
                points:100,
                isCommittee:false
            },
            {
                name:'ipsum',
                points:200,
                isCommittee:false
            },
            {
                name:'dolor',
                points:300,
                isCommittee:true
            },
            {
                name:'sit',
                points:400,
                isCommittee:false
            },
            {
                name:'amet',
                points:120,
                isCommittee:false
            },
            {
                name:'consectetur',
                points:40,
                isCommittee:true
            },
            {
                name:'adispiscing',
                points:60,
                isCommittee:false
            },
            {
                name:'elit',
                points:90,
                isCommittee:true
            },
        ]
        result = result.sort((a: any, b: any) => b.points - a.points);
        changeAllEntries(result);
        filterBoard(result);
        // fetch(`${BACKEND_ADDRESS}/leaderboard/fetch`)
        // .then(r => r.json())
        // .then(board => {
        //     changeBoard(board.sort((a: any, b: any) => b.points - a.points));
        // })
    }, []);

    function filterBoard(all: any[]) {
        changeBoard(all.filter((x) => x.isCommittee == committeeView));
    }

    return <div id={styles.page}>
        <ReturnButton/>
        <h1 id={styles.construction}>
            (this page is currently under construction; please check back later!)
        </h1>
        <h1 id={styles.title}>
            APUGDC 2025 Battlepass
        </h1>
        <div id={styles.tabSelection}>
            <h2 onClick={() => { changeCommitteeView(false); filterBoard(allEntries); }} id={styles.tabItem} aria-label={committeeView ? '' : 'active'}>
                members
            </h2>
            <h2 onClick={() => { changeCommitteeView(true); filterBoard(allEntries); }} id={styles.tabItem} aria-label={committeeView ? 'active' : ''}>
                committees
            </h2>
        </div>
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
                            {e[0].name}
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