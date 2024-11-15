import styles from './ggw.module.css';
import global_styles from '../page.module.css';
import { ReturnButton } from '../components/returnButton';
import Footer from '../components/footer';

export default function GGW() {
    return (
        <div id={styles.ggw}>
            <ReturnButton/>
            <div>
                
            </div>
            <Footer/>
        </div>
    )
}