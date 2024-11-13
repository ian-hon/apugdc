import { redirect } from "next/navigation";
import styles from './submission.module.css';
import { ReturnButton } from "../components/returnButton";
import Footer from "../components/footer";

export default function Submission() {
    return (
        <div id={styles.submission}>
            <ReturnButton/>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffjMjFgQxk44eMuF9z2cNeN0orSi9Kb1lVXp0t2vO8EKU8fg/viewform?embedded=true" width="640" height="2100" frameBorder={0}>Loading…</iframe>
            <Footer/>
        </div>
    )
}