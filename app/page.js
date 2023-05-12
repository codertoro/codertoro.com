import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        I wish you to become your own sun,
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        no need to rely on who's light.✨✨✨
        </p>
        <div>
          <a
            href="#"
            // target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/logo_codertoro_500*90.svg"
              alt="CoderToro Logo"
              className={styles.vercelLogo}
              width={200}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/codertoro_none_406*89.svg"
          alt="Codertoro Logo"
          width={1000}
          height={100}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.codertoro.top/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>A blog that records notes, shares experiences, and holds beauty.</p>
        </a>

        <a
          href="https://blog.codertoro.top/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Craft Blog <span>-&gt;</span>
          </h2>
          <p>A beautifully crafted duplicate of a blog.</p>
        </a>

        <a
          href="https://myweb.codertoro.top/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Myweb <span>-&gt;</span>
          </h2>
          <p>A website that gathers various useful web address.</p>
        </a>

        <a
          href="https://gpt.codertoro.top/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            ChatGPT <span>-&gt;</span>
          </h2>
          <p>
            A convenient ChatGPT without the need for a proxy.
          </p>
        </a>
      </div>
    </main>
  )
}
