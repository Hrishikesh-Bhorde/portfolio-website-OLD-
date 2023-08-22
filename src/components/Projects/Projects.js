import React from 'react'
import './Projects.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const [letterClass, setletterClass] = useState('text-animate')

  return (
    <div className="container-projects">
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={15}
        />
      </h1>

      <div className="grid-container">
        <div className="grid-item">
          <grid-title>Packer Unpacker</grid-title>
          <hr></hr>
          <grid-summary-projects>
            A Java tool to pack-unpack multiple files in a single TXT file,
            using various file Handling methods.
          </grid-summary-projects>
          <div className="grid-chips-div">
            <grid-chips>Core Java</grid-chips>
          </div>

          <a
            href="https://github.com/Hrishikesh-Bhorde/Packer-Unpacker"
            rel="nopener"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ height: '20px' }} />
          </a>
        </div>

        <div className="grid-item">
          <grid-title>Expense Tracker</grid-title>
          <hr></hr>
          <grid-summary-projects>
            An android application for Tracking Expense. Used Firebase for
            Authorization & storing information.
          </grid-summary-projects>
          <div className="grid-chips-div">
            <grid-chips>Android</grid-chips>
            <grid-chips>Java</grid-chips>
            <grid-chips>Firebase</grid-chips>
          </div>

          <a
            href="https://github.com/Hrishikesh-Bhorde/Expense-Trackker"
            rel="nopener"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ height: '20px' }} />
          </a>
        </div>

        <div className="grid-item">
          <grid-title>Voice Assistant</grid-title>
          <hr></hr>
          <grid-summary-projects>
            Voice Assistant using various libraries in Python. Used the pyttsx3
            library for text-to-speech conversion.
          </grid-summary-projects>
          <div className="grid-chips-div">
            <grid-chips>AI</grid-chips>
            <grid-chips>Python</grid-chips>
          </div>

          <a
            href="https://github.com/Hrishikesh-Bhorde/Voice-Assistant"
            rel="nopener"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ height: '20px' }} />
          </a>
        </div>

        <div className="grid-item">
          <grid-title>Movie Revenue Prediction</grid-title>
          <hr></hr>
          <grid-summary-projects>
            Created a ML model to predict the movie revenue. Used the Kaggle
            IMDB5000 Database.
          </grid-summary-projects>
          <div className="grid-chips-div">
            <grid-chips>ML</grid-chips>
            <grid-chips>Python</grid-chips>
            <grid-chips>Sklearn</grid-chips>
          </div>

          <a href="" rel="nopener" target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{ height: '20px' }} />
          </a>
        </div>

        <div className="grid-item">
          <grid-title>Sasta OLX</grid-title>
          <hr></hr>
          <grid-summary-projects>
            An E-commerce website inspired from OLX. Used Firebase for
            Authorization and storing data.
          </grid-summary-projects>
          <div className="grid-chips-div">
            <grid-chips>Angular</grid-chips>
            <grid-chips>Firebase</grid-chips>
          </div>

          <a
            href="https://github.com/OmDhule/SastaOlx"
            rel="nopener"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ height: '20px' }} />
          </a>
        </div>

        <div className="grid-item">
          <grid-title>Cart App</grid-title>
          <hr></hr>
          <grid-summary-projects>
            A simple cart application created using ReactJS. Consists all the
            CRUD operations.
          </grid-summary-projects>
          <div className="grid-chips-div">
            <grid-chips>ReactJS</grid-chips>
          </div>

          <a
            href="https://github.com/Hrishikesh-Bhorde/cart-app"
            rel="nopener"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{ height: '20px' }} />
          </a>
        </div>

        <div className="grid-item">
          <grid-title>Contacts Backend</grid-title>
          <hr></hr>
          <grid-summary-projects>
            Created API's which allow users to get, create and delete their
            contacts. Used MongoDB database.
          </grid-summary-projects>
          <div className="grid-chips-div">
            <grid-chips>NodeJS</grid-chips>
            <grid-chips>MongoDB</grid-chips>
          </div>

          <a href="" rel="nopener" target="_blank">
            {' '}
            <FontAwesomeIcon icon={faGithub} style={{ height: '20px' }} />
          </a>
        </div>
      </div>

      {/* <div className="grid-container">
        <div className="card1">
          <img src="assets/film1.jpg" alt="" className="card1-image" />
          <h3 className="card1-title">SpiderMan - Far from Home</h3>
        </div>

        <div className="card1">
          <img src="assets/film1.jpg" alt="" className="card1-image" />
          <h3 className="card1-title">SpiderMan - Far from Home</h3>
        </div>

        <div className="card1">
          <img src="assets/film1.jpg" alt="" className="card1-image" />
          <h3 className="card1-title">SpiderMan - Far from Home</h3>
        </div>

        <div className="card1">
          <img src="assets/film1.jpg" alt="" className="card1-image" />
          <h3 className="card1-title">SpiderMan - Far from Home</h3>
        </div>

        <div className="card1">
          <img src="assets/film1.jpg" alt="" className="card1-image" />
          <h3 className="card1-title">SpiderMan - Far from Home</h3>
        </div>

        <div className="card1">
          <img src="assets/film1.jpg" alt="" className="card1-image" />
          <h3 className="card1-title">SpiderMan - Far from Home</h3>
        </div>
      </div> */}
    </div>
  )
}

export default Projects
