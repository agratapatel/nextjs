import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agrata Patel</title>
        <link rel="icon" href="/crystal-ball.png" />
      </Head>

      <header className={styles.header}>
        <img
          src="/crystal-ball.png"
          alt="Crystal Ball"
          className={styles.gandalf}
        />
        <div className={styles.navlink}>
          {/*}
          <ul>
            <a href="/">My Story</a>
          </ul>
          <ul>
            <a href="/">Work</a>
          </ul>
          <ul>
            <a href="/">Explorations</a>
          </ul>
          */}
          <ul>
            <a
              href="https://agrata.substack.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Newsletter
            </a>
          </ul>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.name}>
          <div>
            <p>Hi, I'm Agrata 👋🏼</p>
            <h2 className={styles.gradient}>Product designer and builder</h2>
            <p>
              I'm designing commerce tools at Atlassian. Previously I interned
              at Samsung Design and did HCI undergrad from IIT Guwahati. I once
              kinda made a whole website which will let graduating seniors pass
              their stuff to juniors and that was called Signing off. 
            </p>
            <br />
            <a className={styles.underlinedlink} href="/">
              I code on weekends
            </a>
          </div>
          <img src="/agrata1.jpg" alt="Agrata" className={styles.face} />
        </div>

        {/* bookshelf code*/}

        <div className={styles.bookshelf}>
          <h2>
            Currently reading <br />
            <br />
          </h2>
          <div className={styles.boxout}>
            <a
              className={styles.book}
              href="https://www.amazon.in/INSPIRED-Create-Tech-Products-Customers-ebook/dp/B077NRB36N"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41kreHtR39L._SX322_BO1,204,203,200_.jpg"
                className={styles.books1}
              ></img>
            </a>
            <a
              className={styles.book}
              href="https://www.amazon.in/Hard-Thing-About-Things-Building-ebook/dp/B00DQ845EA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/810u9MkT3SL.jpg"
                className={styles.books1}
              ></img>
            </a>
            <a
              className={styles.book}
              href="https://www.amazon.in/Ride-Lifetime-Lessons-Creative-Leadership/dp/B08YWSHSMT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81NM735KkyL.jpg"
                className={styles.books1}
              ></img>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/b0urnvita"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and Developed with ❤️ by Agrata Patel
        </a>
      </footer>
    </div>
  );
}
