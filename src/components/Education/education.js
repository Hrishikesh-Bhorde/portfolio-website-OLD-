import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './education.scss'
import '../Layout/index.scss'
import bldimg from '../../assets/images/building.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faBuilding,
  faBuildingCircleArrowRight,
  faBuildingFlag,
  faClock,
  faTimeline,
} from '@fortawesome/free-solid-svg-icons'

const Education = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  return (
    <div className="container education-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'a', 'n', 'c', 'e']}
            idx={15}
          />
        </h1>

        <div className="grid-container">
          <div className="grid-item">
            <grid-title>Frontend Developer Intern</grid-title>
            <br />
            <grid-sub-title>
              <FontAwesomeIcon icon={faBuilding} />
              &nbsp; Iraitech Innovations & Technologies Pvt. Ltd
            </grid-sub-title>
            <br />
            <grid-date>
              <FontAwesomeIcon icon={faClock} />
              &nbsp;Dec 2022 - Apr 2023
            </grid-date>
            <hr />
            <grid-summary>
              <ul>
                <li>
                  Implemented Micro services in order to maintain the project
                  size.
                </li>
                <li>
                  Assisted in designing and implementing responsive and
                  user-friendly web interfaces
                </li>
                <li>
                  Worked with testing and development teams simultaneously
                </li>
                <li>
                  Worked on SEO related points resulting in increase of website
                  visibility & reducing the loading time.
                </li>
              </ul>
            </grid-summary>

            <div className="grid-chips-exp-div">
              <br />
              <grid-chips-exp>Angular</grid-chips-exp>
              <grid-chips-exp>ReactJS</grid-chips-exp>
              <grid-chips-exp>Bootstrap</grid-chips-exp>
              <grid-chips-exp>Search Engine Optimization</grid-chips-exp>
              <grid-chips-exp>NextJS</grid-chips-exp>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
