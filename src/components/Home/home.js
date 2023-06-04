import { Link } from 'react-router-dom'

import './home.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = [
    'H',
    'r',
    'i',
    's',
    'h',
    'i',
    'k',
    'e',
    's',
    'h',
    ' ',
    'B',
    'h',
    'o',
    'r',
    'd',
    'e',
  ]
  const JobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={JobArray}
            idx={22}
          />
        </h1>

        {/* <h1>
          Hi, <br /> I'm
          <br />
          Hrishikesh Bhorde
          <br />
          Web Developer
        </h1> */}

        <h2>Fullstack Developer | CyberSecurity | Cloud Engineer</h2>

        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
