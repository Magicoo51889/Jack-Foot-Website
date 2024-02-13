import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/components.module.css";

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);
  
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  
  return (
    <>
      {isLoading && (
        <div className={styles.LoadingScreen}>
            <lottie-player className={styles.lottie}
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal" 
            src="https://assets4.lottiefiles.com/packages/lf20_tsxbtrcu.json"  
            background="transparent"  
            speed="1"  
            style={{width: 300, height: 300}}>
            </lottie-player>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
