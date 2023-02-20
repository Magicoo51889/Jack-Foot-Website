import Image from 'next/image'
import styles from '../styles/Home.module.css'

let SocialIconSize = 44;

const Footer = () : JSX.Element => (
    <footer className={styles.footer}> {/*Links to socials*/}
            <a
              href="https://www.linkedin.com/in/jackfoot51889/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.logoInvert}>
                <Image src="/linkedin.svg" alt="Linkedin Logo" width={SocialIconSize} height={SocialIconSize} />
              </span>
            </a>
            <a
            href="https://github.com/Magicoo51889"
            target="_blank"
            rel="noopener noreferrer"
            >
              {' '}
              <span className={styles.logoInvert}>
                <Image src="/github.svg" alt="Github Logo" width={SocialIconSize} height={SocialIconSize}/>
              </span>
            </a>
            <a
            href="https://twitter.com/jjaffff"
            target="_blank"
            rel="noopener noreferrer"
            >
              {' '}
              <span className={styles.logoInvert}>
                <Image src="/twitter.svg" alt="Twitter Logo" width={SocialIconSize} height={SocialIconSize}/>
              </span>
            </a>
          </footer>
)

export default Footer
