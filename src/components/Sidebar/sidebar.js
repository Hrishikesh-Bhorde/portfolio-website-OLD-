import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import LogoS from '../../assets/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faHome,
  faProjectDiagram,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
  faExpeditedssl,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUserAlt} color="#4d4d4e" />
      </NavLink>

      {/* <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink> */}

      <NavLink
        exact="true"
        activeclassname="active"
        className="education-link"
        to="/education"
      >
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="project-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Hrishikesh-Bhorde"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/hrishikesh-bhorde-8853911b3/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
