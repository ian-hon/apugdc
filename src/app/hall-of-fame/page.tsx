"use client";

import styles from "./hall-of-fame.module.css";
import Footer from "../components/footer";
import Link from "next/link";

import temp_pfp from './assets/guests_of_honor/discord.png';
import Image from "next/image";

const committeeMembers = [
    { year: 2024, members: [
        { name: "Kudoshi", role: "President" },
        { name: "Azar", role: "Goofy" },
    ]},
    { year: 2023, members: [
        { name: "Kudoshi", role: "Vice President" },
    ]},
    // We gotta add more members hereeeeeeeee
];

const honoredGuests = [
    {
        name: "John Doe",
        description: "renowned game developer",
        img: temp_pfp
    },
    {
        name: "Larian studios",
        description: "creators of Baldur's Gate",
        img: temp_pfp
    },
    {
        name: "John Doe",
        description: "renowned game developer",
        img: temp_pfp
    },
    {
        name: "Larian studios",
        description: "creators of Baldur's Gate",
        img: temp_pfp
    },
    {
        name: "John Doe",
        description: "renowned game developer",
        img: temp_pfp
    },
    {
        name: "Larian studios",
        description: "creators of Baldur's Gate",
        img: temp_pfp
    },
    {
        name: "John Doe",
        description: "renowned game developer",
        img: temp_pfp
    },
    {
        name: "Larian studios",
        description: "creators of Baldur's Gate",
        img: temp_pfp
    },
    {
        name: "John Doe",
        description: "renowned game developer",
        img: temp_pfp
    },
]

export default function HallOfFame() {
    return (
        <div id={styles.page}>
            <header id={styles.header}>
                <h1>APUGDC Hall of Fame</h1>
                <h2>Honoring Our Past Committee Members</h2>
            </header>
            
            <main id={styles.main}>
                {committeeMembers.map((yearGroup) => (
                    <section key={yearGroup.year} className={styles.yearSection}>
                        <h3>{yearGroup.year} Committee</h3>
                        <ul>
                            {yearGroup.members.map((member, index) => (
                                <li key={index}>
                                    <strong>{member.name}</strong> - {member.role}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </main>
            
            <Link href="/" className={styles.backButton}>
                Back to Home
            </Link>
            
            <Footer />
        </div>
    );
}

export function HonoredGuests({ custom_style={} } : { custom_style?: any }) {
    return (
        <div id={styles.honoredGuests} style={custom_style}>
            {
                honoredGuests.map((e) => (
                    <div className={styles.guest} key={e.name}>
                        <Image src={e.img} alt=''/>
                        <h2>{e.name}</h2>
                        <h3>{e.description}</h3>
                    </div>
                ))
            }
        </div>
    )
}
