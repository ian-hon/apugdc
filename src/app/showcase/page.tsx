"use client";

import Footer from "../components/footer";
import styles from './showcase.module.css';

import searchIcon from '../assets/search.png';

import { ReturnButton } from '../components/returnButton';
import { useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const gameShowcase = [
    {
        name: "Asteroid",
        author: "asianerd",
        embedURL: "https://itch.io/embed/2788227?linkback=true&amp;bg_color=000&amp;fg_color=fff&amp;link_color=fff&amp;border_color=777",
        embedLink: "https://asianerd.itch.io/asteroid",
        highlighted: false,
        year: 2024
    },
    {
        name: "Monosweeper",
        author: "asianerd",
        embedURL: "https://itch.io/embed/1205067?border_width=5&amp;bg_color=808080&amp;fg_color=fff&amp;link_color=0000f5&amp;border_color=808080",
        embedLink: "https://asianerd.itch.io/monosweeper",
        highlighted: true,
        year: 2023
    },
];

function removeAmpEncode(i: string): string {
    // when the embed is copy pasted into react, the &amp; gets parsed into & in the DOM
    // but when dynamically adding it through .map(), the &amp; remains as &amp;
    // this function is to do it manually
    return i.replaceAll("&amp;", "&");
}

const filterFunction = (game: any, condition: any) => { return condition == -1 ? true : (condition == 0 ? game.highlighted : (condition == game.year)); }

export default function Showcase() : React.JSX.Element {
    const [query, queryChange] = useState('');
    const [filter, changeFilter] = useState(-1);
    // -1 -> no filter
    // 0 -> only highlighted
    // anything else (2023, 2024) -> filter year

    return (
        // TODO :
        //  - 'no results' message
        //  - number of results
        //  - separate into pages
        //  - add release date onto element
        <div id={styles.showcase}>
            <ReturnButton/>
            <div id={styles.header}>
                <h1>Our games</h1>
                <h2>check out our community's works!</h2>
            </div>
            <div id={styles.content}>
                <div id={styles.search}>
                    <div id={styles.query}>
                        <input placeholder="search" value={query} onChange={(e) => {queryChange(e.target.value)}}></input>
                        <Image src={searchIcon} alt='' onClick={() => { console.log('clicked'); }}></Image>
                    </div>
                    <div id={styles.filter}>
                        {
                            [0, 2020, 2021, 2022, 2023, 2024].map((e) => <h2 key={e} onClick={() => {
                                changeFilter(filter == e ? -1 : e);
                            }} aria-label={String(filter == e)}>
                                {e == 0 ? 'highlighted' : e}
                            </h2>)
                        }
                    </div>
                </div>
                <div id={styles.results}>
                    {
                        gameShowcase.filter((e) => (
                            filterFunction(e, filter) && 
                            (
                                e.name.toLowerCase().includes(query.toLowerCase()) ||
                                e.author.toLowerCase().includes(query.toLowerCase())
                            )
                        )).map((e) => <iframe key={e.name + e.author} frameBorder="0" src={removeAmpEncode(e.embedURL)} width="550" height="150"></iframe>)
                    }
                </div>
            </div>
            <div id={styles.submission}>
                <Link href={'/submission'}>
                    I want my game here!
                </Link>
            </div>
            <Footer/>
        </div>
    );
}