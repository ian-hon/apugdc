"use client";

import styles from "./hall-of-fame.module.css";
import Footer from "../components/footer";
import Link from "next/link";
import React from "react";
import { ReturnButton } from "../components/returnButton";
import AdminCodeDetector from "../components/adminEntry";

const committeeMembers = [
    { year: '2023', members: [
        { name: "Syafiqah Husna (Hush)", role: "President" },
        { name: "Brenden Tan Poh Guan (Kudo)", role: "Vice President" },
        { name: "Ong Jian Wei (Dylan)", role: "Secretary Head" },
        { name: "Ng Zhen Yan (Eian)", role: "Assistant Secretary" },
        { name: "Kazim Chin Shen", role: "Public Relations Head" },
        { name: "Lee Jia En (Audrey)", role: "Treasurer Head" },
        { name: "Chan Mei Jean", role: "Marketing Head" },
        { name: "Pang Wei Sheng", role: "Design Head" },
        { name: "Tay Khai Feng", role: "Assistant Design" },
        { name: "Cheng Yi Heng (Nixon)", role: "Event Head" },
        { name: "Chai Cheng Fung", role: "Assistant Event" },
        { name: "Tan Ming Hui, Jeff", role: "Logistics Head" },
        { name: "Yap Sze Wan (Jyu)", role: "Human Resources Head" },
        { name: "Chong Yu Thung (Nicholas)", role: "Assistant Public Relations" },
        { name: "Peyton Ong", role: "Human Resources" },
        { name: "Ahmed Mashail Ali", role: "Design" },
    ]},
    { year: '2024', members: [
        { name: "Brenden Tan Poh Guan (Kudo)", role: "President" },
        { name: "Tan Ming Hui, Jeff", role: "Logistics Head" },
        { name: "Suvan", role: "Head of Logistic" },
        { name: "Abdelrahman Mahdy", role: "Logistic" },
        { name: "Loh Jun Yee", role: "Logistic Trainee" },
        { name: "Ngan Fai Yui", role: "Logistic Trainee" },
        { name: "Cheng Yi Heng (Nixon)", role: "Event Head" },
        { name: "Yong Zi Qing", role: "Head of Event" },
        { name: "Lim Zhe King (Sushi)", role: "Event & Marketing" },
        { name: "Loo Jian Er", role: "Event" },
        { name: "Azar Ali Shaikh", role: "Event" },
        { name: "Muzammil Imran Sayed", role: "Event Trainee" },
        { name: "Mohamed Raaiq Ramzjan", role: "Event Trainee" },
        { name: "Ian Ryan Hon Yui", role: "Event Trainee" },
        { name: "Saif Musthafa", role: "Event Trainee" },
        { name: "Chan Mei Jean", role: "Head of Marketing" },
        { name: "Gan Sheer Win", role: "Head of Marketing" },
        { name: "Dominic Chong Fu Nien", role: "Head of Marketing" },
        { name: "Tia Ermita", role: "Marketing" },
        { name: "Omar Ahmed Taha", role: "Marketing Trainee" },
        { name: "Cassandra Lai Qian Yu", role: "Marketing Trainee" },
        { name: "Amirrul Rasyid", role: "Head of External Affairs" },
        { name: "Jediah Yap Lok Sun", role: "External Affairs" },
        { name: "Abdul Hadi Naeem", role: "External Affairs Trainee" },
        { name: "Ching Paul Shen", role: "External Affairs Trainee" },
        { name: "Alireza Jahani", role: "Design" },
        { name: "Adnan Aldeeb", role: "Design" },
        { name: "Justin Ooi Yie Ry", role: "Design Trainee" },
        { name: "Kuishbaev Artur", role: "Design Trainee" },
        { name: "Tan Jia Hao", role: "Design Trainee" },
        { name: "Peyton Ong", role: "Head of Internal Affairs" },
        { name: "Valerie Annabella", role: "Head of Internal Affairs" },
        { name: "Michelle Wong Weng Hui", role: "Head of Internal Affairs" },
        { name: "Narish Kumar De", role: "Deputy Head of Internal Affairs" },
        { name: "Raka Novaldo", role: "Internal Affairs - Human Resource" },
        { name: "Azwa Al Islam", role: "Human Resource Trainee" },
        { name: "Ahmed Mohammed Khaled", role: "Secretary Trainee" },
        { name: "Topaz Lim Jing Tai", role: "Treasurer Trainee" },
        { name: "Lee Jue", role: "Head of Community Manager" },
        { name: "Faisal Homoud (Fade)", role: "Deputy Head of Community Manager" },
        { name: "Teh Kai Bin", role: "Community Manager Trainee" },
    ]},
    { year: '2025 Current', members: [
        { name: "To Be Announced", role: "" },
        
    ]}
];

export default function HallOfFame() {
    return (
        <div id={styles.page}>
            <ReturnButton/>
            <header id={styles.header}>
                <h1>APUGDC Hall of Fame</h1>
                <h2>Honoring Our Past and Current Committee Members</h2>
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

            <AdminCodeDetector/>
        </div>
    );
}
