import "./Skills.css";
import { FaNodeJs, FaReact, FaJava, FaDocker , FaCloudflare , FaCloud} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiJavascript, SiCplusplus, SiHtml5, SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <div className="skills-container">
      {/* Backend Skills */}
      <div className="backend skill">
        <h2>Backend</h2>
        <ul className="skill-card">
          <li className="skill-item">
            <div className="icon"><FaNodeJs /></div>
            <div className="details">
              <h3>Node.js</h3>
              <p>JavaScript runtime built for scalable server-side applications.</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><SiExpress /></div>
            <div className="details">
              <h3>Express.js</h3>
              <p>Web framework for Node.js for APIs and web apps.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Frontend Skills */}
      <div className="frontend skill">
        <h2>Frontend</h2>
        <ul className="skill-card">
          <li className="skill-item">
            <div className="icon"><FaReact /></div>
            <div className="details">
              <h3>React</h3>
              <p>Library for building interactive user interfaces.</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><SiJavascript /></div>
            <div className="details">
              <h3>JavaScript</h3>
              <p>Scripting Language</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><SiTypescript /></div>
            <div className="details">
              <h3>TypeScript</h3>
              <p>Type Safe JavaScript</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><SiHtml5 /></div>
            <div className="details">
              <h3>HTML/CSS</h3>
              <p> Web structuring and styling.</p>
            </div>
          </li>
        </ul>
      </div>


      {/* Cloud & DevOps */}
      <div className="devops skill">
        <h2>Cloud & DevOps</h2>
        <ul className="skill-card">
          <li className="skill-item">
            <div className="icon"><FaReact /></div>
            <div className="details">
              <h3>CI/CD</h3>
              <p>Continuous Integration & Delivery</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><FaDocker /></div>
            <div className="details">
              <h3>Docker</h3>
              <p>Containerization</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><FaCloud/></div>
            <div className="details">
              <h3>Azure</h3>
              <p>Cloud Platform</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><FaCloudflare/></div>
            <div className="details">
              <h3>Cloudflare Workers</h3>
              <p>Serverless deployment</p>
            </div>
          </li>
        </ul>
      </div>


      {/* Programming Languages */}
      <div className="languages skill">
        <h2>Languages</h2>
        <ul className="skill-card">
          <li className="skill-item">
            <div className="icon"><SiCplusplus /></div>
            <div className="details">
              <h3>C</h3>
              <p>Low-level language for efficient and powerful programming.</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><FaJava /></div>
            <div className="details">
              <h3>Java</h3>
              <p>Robust object-oriented programming language.</p>
            </div>
          </li>
        </ul>
      </div>

  

      {/* Databases */}
      <div className="databases skill">
        <h2>Databases</h2>
        <ul className="skill-card">
          <li className="skill-item">
            <div className="icon"><SiMongodb /></div>
            <div className="details">
              <h3>MongoDB</h3>
              <p>NoSQL database for modern apps and scalability.</p>
            </div>
          </li>
          <li className="skill-item">
            <div className="icon"><SiMysql /></div>
            <div className="details">
              <h3>MySQL</h3>
              <p>Relational database management system for structured data.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
