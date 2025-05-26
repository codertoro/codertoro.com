import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  //const screenWidth = window.innerWidth;
// console.log('屏幕宽度为：', screenWidth);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        I wish you to become your own sun,
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        no need to rely on who&apos;s light.✨✨
          {/* Get started by editing&nbsp; */}
          {/* <code className={styles.code}>app/page.js</code> */}
        </p>
        <div>
          <a
            href="https://codertoro.notion.site/"
            target="_blank"
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

      <div  className={styles.center}>
        <Image
          className={styles.logo}
          src="/codertoro_none_406*89.svg"
          alt="Codertoro Logo"
          //width="100%"     //{100}
          //height={200}
          layout="fill"
          // objectFit="contain"
          priority
        />
      </div>

      <div className={styles.grid}>
      <a
          href="https://ob.codertoro.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           Obsidian <span>-&gt;</span>
          </h2>
          <p>
            ob.codertoro.com
          </p>
        </a>

        <a
          href="https://www.codertoro.top/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>A hexo blog.</p>
        </a>

        <a
          href="https://web.codertoro.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Myweb <span>-&gt;</span>
          </h2>
          <p>All about my web address.</p>
        </a>

        <a
          href="https://codertoro.notion.site/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          文本分享 <span>-&gt;</span>
          </h2>
          <p>txt.codertoro.com</p>
        </a>

        
      </div>

      {/* 备案信息 */}
      <div className={styles.beian}>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">辽ICP备2023001049号-2</a> 
      </div>


    </main>
  )
}
