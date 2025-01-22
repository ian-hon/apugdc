import Link from "next/link";
import styles from '../events/events.module.css';
import Image from "next/image";

export function EventTileElement({t}: { t:any }) {

    return (
        <Link href={`${t.url}`} className={styles.tile} key={t.assetDirectory}>
            <div id={styles.info}>
                <div id={styles.description}>
                    <h2>
                        {t.title}
                    </h2>
                    <h3>
                        by {t.host}  | {t.date} | {t.time} | {t.location}
                    </h3>
                </div>
                <div id={styles.gradient}/>
            </div>
            <div id={styles.headerImage}>
                <Image src={`/events/${t.assetDirectory}/${t.thumbnail}`} width={1000} height={1000} alt=''></Image>
            </div>
        </Link>
    )
};