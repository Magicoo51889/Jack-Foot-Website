import Link from './NoScrollLink'
import styles from '../styles/Home.module.css'

const Header = () : JSX.Element => (
    <nav className={styles.globalnav}> 
            <ul className={styles.globalnavList}>
                <ul className={styles.globalnavItem}>
                <Link href='/'>
                    <span>
                    Home
                    </span>
                </Link>
                </ul>
                <ul className={styles.globalnavItem}>
                <Link href='productDesign'>
                    <span>
                    Product Design.
                    </span>
                </Link>
                </ul>
                <ul className={styles.globalnavItem}>
                <Link href='/code'>
                    <span>
                    Code.
                    </span>
                </Link>
                </ul>
                <ul className={styles.globalnavItem}>
                <Link href='/about'>
                    <span>
                    About.
                    </span>
                </Link>
                </ul>
            </ul>
        </nav>
)

export default Header


















