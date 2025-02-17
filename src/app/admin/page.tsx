"use client";

import Link from "next/link";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";

// Use proper css in future. Rn using homepage -Kudo
import styles from "../page.module.css"

export default function AdminLogin() {

    // Prevent unauthorized entry not using the admin code
    const searchParams = useSearchParams();
    const secret = parseInt(searchParams.get("secret") || "0", 10);
    const router = useRouter(); // Initialize Next.js router
    const [loading, setLoading] = useState(true); // Prevents premature rendering

    // Form states
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
   
    useEffect(() => {
        const canEnterAdminPage = isWithin10Seconds(secret)
        if (!canEnterAdminPage)
        {
            router.replace("/");
        }
        else
        {
            setLoading(false);
        }
    }, []);

    const isWithin10Seconds = (time : number) => {
        const now = Date.now();
        return Math.abs(now - time) <= 10000;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
          const response = await axios.get("/api/login", {
            params: { name, password },
          });
      
          console.log("Login successful:", response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

    if (loading) return null; // Prevents page from rendering if still checking auth


    return (
        <div id={styles.page}>
            <Link href={"/"}>
                <h2>
                    Back to website
                </h2>
            </Link>
            

            <div id={styles.about}>
                <h2>
                    APUGDC Admin Login
                </h2>
            </div>

            <div>
                Secret: {(secret).toString()}
            </div>
            <br/>

            <form onSubmit={handleSubmit}>
                <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                <div>
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <button type="submit">Login</button>
            </form>       


            <Footer/>
        </div>
    
    )
}