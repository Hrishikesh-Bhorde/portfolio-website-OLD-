import React from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import { useState } from 'react'
import './Project.scss'

export default function Project() {
  const [letterClass, setletterClass] = useState('text-animate')

  return (
    <div className="container project">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
      </div>
    </div>
  )
}
