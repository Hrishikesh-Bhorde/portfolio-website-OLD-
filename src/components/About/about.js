import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
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
        <p>
          I am a fresher seeking for an entry-level position to begin my career
          in a high-level professional environment. Equipped with a diverse and
          promising skill-set.
        </p>

        <p>
          I am proficient and comfortable working with a range of programming
          languages, frameworks and databases including Java, Angular, ReactJS,
          Python, NodeJS, MongoDB and MySQL.
        </p>

        <p>..... not complete !</p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>

          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>

          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#3498DB" />
          </div>

          <div className="face4">
            <FontAwesomeIcon icon={faJs} color="#FFC300 " />
          </div>

          <div className="face5">
            <FontAwesomeIcon icon={faJava} color="#34495E" />
          </div>

          <div className="face6">
            <FontAwesomeIcon icon={faCss3} color="#264de4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
