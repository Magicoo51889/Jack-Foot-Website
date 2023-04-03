import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from '../components/NoScrollLink';

const CardTiltAngle:number = 20;
const CardPerspective:number = 2500;

interface TiltCardProps {
    image: string;
    alt: string;
    link: string;
    w: number;
    h: number;
}

const TiltCard = (props:TiltCardProps): JSX.Element => {
    const {image, alt, link, w, h} = props;
    return(
        <Tilt tiltMaxAngleX={CardTiltAngle} perspective={CardPerspective} gyroscope={true} tiltReverse={true}>
            <Link href={link} >
                <p className={styles.card}>
                    <span className={styles.logoInvert}>
                        <Image src={image} alt={alt} width={w} height={h} placeholder='blur' blurDataURL='data:...' loading='lazy' decoding='async'/>
                    </span>
                </p>
            </Link>
                
        </Tilt>
    )
}

export default TiltCard;