"use client";

import styles from "./hall-of-fame.module.css";
import Footer from "../footer";
import Link from "next/link";

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