import './AboutPage.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAndroid,
  faAngular,
  faAws,
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
  faC,
  faDownload,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import PythonLogo from '../../assets/images/python.png'

const AboutPage = () => {
  const Resume_URL = 'http://localhost:3000/Hrishikesh_Bhorde_Resume.pdf'

  const downloadFile = (url) => {
    window.open(url)
  }
  const [letterClass, setletterClass] = useState('text-animate')
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <ul className="about-page-list">
          <li>
            {' '}
            I am a beginner Software Developer. Seeking any and all
            opportunities for career advancement.
          </li>
          <li>
            {' '}
            Have completed / worked on multiple live projects during the
            internship period.{' '}
          </li>
          <li>
            Have pubished a research paper on 'Analysis and Survey on
            Cybersecurity : Threats and Solutions'
          </li>
          <li>
            Proficient and comfortable working with a range of programming
            languages, frameworks and databases including Java, Angular,
            ReactJS, Python, NodeJS, MongoDB and MySQL.
          </li>
        </ul>

        <button
          type="submit"
          onClick={() => {
            downloadFile(Resume_URL)
          }}
          className="flat-button"
        >
          <FontAwesomeIcon icon={faUpRightFromSquare} />
          &nbsp; Resume
        </button>
      </div>
      <div className="tech-stack-div">
        {/* <span className="div-title">
          <h2>Tech Stack</h2>
        </span> */}
        <div className="grid-container-about">
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon icon={faAngular} color="#c3002f" size="6x" />
          </div>
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon icon={faReact} color="#58CCED" size="6x" />
          </div>
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon
              icon={faHtml5}
              color="RGB(240, 101, 41)"
              size="6x"
            />
          </div>
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon icon={faCss3} color="RGB(38, 77, 228)" size="6x" />
          </div>
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon icon={faAndroid} color="#3DDC84" size="6x" />
          </div>
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon icon={faJava} color="#FF0000" size="6x" />
          </div>
          <div className="grid-item-about">
            <img className="img" src={PythonLogo} height={'70px'}></img>
          </div>
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon icon={faNodeJs} color="seagreen" size="6x" />
          </div>
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon icon={faAws} color="#rrr" size="6x" />
          </div>
          <div className="grid-item-about">
            {' '}
            <FontAwesomeIcon icon={faJs} color="#E8D44D" size="6x" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
