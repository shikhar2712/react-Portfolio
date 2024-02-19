import Image from "next/image";
import Typed from "typed.js";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="left">Shikhar's Portfolio</div>
          <div className="right">
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="/">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="firstSection">
          <div className="leftSection">
            <div>
              Hi, My name is<span className="purple"> Shikhar</span>
            </div>
            <br />I am Web Developer and Programmer
            <div className="buttons">
              <a href=""></a>
              <a href="ShikharSingh_resume.pdf" download>
                <button className="btn">Download Resume</button>
              </a>
              <a href="https://github.com/shikhar2712" target="_blank">
                <button className="btn">Github</button>
              </a>
            </div>
          </div>

          <div className="rightSection">
            <img src="/PngItem_1127587.png" alt="image" />
          </div>
        </section>
        <hr />
        <section className="secondsection">
          <span className="text-gray">What I have done so far</span>
          <div id="Projects">
            <h2>Work Experience</h2>
          </div>

          <div className="box">
            <div className="vertical">
              <div className="date">Jul'23-Sept'23</div>
              <div className="vertical-title">SDE Intern</div>
              <div className="vertical-desc">
                APIs Integration.
                <div>Code Optimisation.</div>
                <div>APIs testing.</div>
              </div>
            </div>
            <div className="vertical">
              <div className="image-top">
                <Image
                  src="/Python-logo-notext.svg.png"
                  width={100}
                  height={100}
                  alt="Pythonlogo"
                />
              </div>
              <div className="vertical-title1">Web Scraper</div>
              <div className="vertical-desc1">
                Developed a Python-based web scraper to extract data from
                GitHub-topics, specifically focusing on top repositories.
              </div>
            </div>
            <div className="vertical">
              <div className="image-top1">
                <Image
                  src="/image-removebg-preview.png"
                  width={54}
                  height={100}
                  alt="image"
                />
              </div>
              <div className="vertical-title2">Movie-info-Extractor</div>
              <div className="vertical-desc2">
                <div>Flask API with API key authentication.</div>
                <div>Retrieves Movie details.</div>
                <div>Open-Source Integration.</div>
              </div>
            </div>
            <div className="vertical">
              <div className="image-top">
                <Image
                  src="/pngwing.com.png"
                  width={50}
                  height={38}
                  alt="image"
                />
              </div>
              <div className="vertical-title3">Portfolio Website</div>
              <div className="vertical-desc3">
                Used HTML and CSS to make this site.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3 className="summary">Shikhar's Portfolio Summary</h3>
            <div id="About">
              <div className="summary-text">
                Motivated and dedicated student , I'm passionate about pursuing
                a career as a Software Developer . Possessing 3 years of
                Programming experience and expertise in OOP , alongside
                proficiency in C, C++, Python (including Flask), API
                development, HTML, CSS, JS and a strong foundation in data
                structures and algorithms , I'm well-equipped to contribute. My
                academic excellence, practical experience through internships
                and projects, and commitment to continuous learning drive my
                ambitions. I'm enthusiastic about securing an SDE internships
                and job role to apply my skills, drive, and problem-solving
                abilities to innovate in a dynamic team.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
