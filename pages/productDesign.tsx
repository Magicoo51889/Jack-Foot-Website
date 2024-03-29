import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

const productDesignPage = () => {
  return (
    <div className={styles.container}>
        <Head>
          <title>Jack Foot | Product Design.</title>
        </Head>
        
        <main className={styles.main}>
          <div className={styles.twoOneGrid}>
            <div className={styles.gridChild} style={{background:'#F5F5F7'}}>
              <div className={styles.twoThreeGrid}>
                <Image src="/productDesignPage/NEA_Final_Design.png" alt='NEA Final Design' className={styles.gridChildImageVert} width={200} height={261} loading='lazy'/>
                <Image src="/productDesignPage/Loughborough_Design_Task.avif" alt='Loughbororogh Design Task' className={styles.gridChildImageHoriz} width={261} height={200} loading='lazy'/>
                <Image src="/productDesignPage/Storage_Drawings.avif" alt='Drawings' className={styles.gridChildImageHoriz} width={261} height={200} loading='lazy'/>
                <Image src="/productDesignPage/Week 4 Sketches.jpg" alt='Ideation Page' className={styles.gridChildImageHoriz} width={261} height={200} loading='lazy'/>
                <Image src="/productDesignPage/7C4EF3E1-1493-4BA3-A28B-0F7CFD3B5D56.png" alt='Lamp Design' className={styles.gridChildImageVert} width={200} height={261} loading='lazy'/>
                <Image src="/productDesignPage/20231026_234759284_iOS.png" alt='Projector Design Page' className={styles.gridChildImageVert} width={200} height={261} loading='lazy'/>
              </div>
            </div>   
            <div className={styles.gridChild}>
              <h1 className={styles.smallTitle}>
                Product Design.
              </h1>
              <p className={styles.smallDescription}>
                I really enjoy sketching and coming up with designs that I think will improve an existing idea or concept and turn it into something that will help users to perform that task.
              </p>
              <p className={styles.smallDescription}>
                My inspiration comes from the likes of Dieter Rams, Jony Ive and James Dyson, all people who have raised the bar of what to expect from a product. They all prioritise function over form, and I think this is essential when designing a product, as nothing infuriates me more than something that is difficult or hard to figure out how to use. Overall their designs have revolutionised the way we use products and I that is something that I would like to achieve in my own designs.
              </p>
              <p className={styles.smallDescription}>
                I have lots of experience with sketching and designing products, and I have a good understanding of how to use the software that is used in the industry. I have also worked on a few projects that have been prototyped and tested, and I have been able to see the feedback from users and how they interact with the product. This has enabled me to develop those products further to be able to try and meet all the criteria that my user has asked for.
              </p>
              <p className={styles.smallDescription}>
                Additionally I have gained lots of experience in CAD as it allows me to quickly and easily show my designs without having to spend the time to measure out and create a drawing/sketch of the product that I'm making. They also allow me to be able share the designs with my customers and stakeholders which allow a design to be easily shared, in a highly accurate and customisable way. 
              </p>
            </div>         
          </div>

        </main>
    </div>
  )
}

export default productDesignPage;