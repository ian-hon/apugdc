
import styles from './ggw.module.css';
import { ReturnButton } from '../components/returnButton';
import Footer from '../components/footer';

export default function GGW() {
    // Copied over Events page over temporarily for quick fix -Kudo

    return (
        <div id={styles.events}>
            <ReturnButton/>
            <div id={styles.header}>
                <h2>
                    APU Great Game Week
                </h2>
                <h3>
                    APU's biggest game festival
                </h3>
                <h3 style={{paddingTop: '10px'}}>
                    <b>COMING BACK IN 2025</b>
                </h3>
            </div>
            <div id={styles.content}>
               <h3>Games | E-Sports | Game Development | Board Game</h3>

                <iframe style={{paddingTop: '10px', paddingBottom: '10px'}}  width="686" height="386" src="https://www.youtube.com/embed/I0CQQG4BlQE?si=5jaNoyaTjX0aCQmu" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
               <h2>A festival celebrating the culture of games and game development</h2>
            </div>
            <Footer/>
        </div>
    );
}

