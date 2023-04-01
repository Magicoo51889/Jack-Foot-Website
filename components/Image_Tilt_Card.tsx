import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const CardTiltAngle:number = 20;
const CardPerspective:number = 2500;

interface TiltCardProps {
    image: string;
    alt: string;
    w: number;
    h: number;
}

const TiltCard = (props:TiltCardProps): JSX.Element => {
    const {image, alt, w, h} = props;
    return(
        <Tilt tiltMaxAngleX={CardTiltAngle} perspective={CardPerspective} gyroscope={true} tiltReverse={true}>
            <p className={styles.card}>
                <span className={styles.logoInvert}>
                    <Image src={image} alt={alt} width={w} height={h} placeholder='blur' blurDataURL='data:...'/>
                </span>
            </p>
        </Tilt>
    )
}

export default TiltCard;