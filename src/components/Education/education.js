import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './education.scss'
import '../Layout/index.scss'

const Education = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  return (
    <div className="text-zone">
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
          idx={15}
        />
      </h1>
      <p>
        I am a fresher seeking for an entry-level position to begin my career in
        a high-level professional environment. Equipped with a diverse and
        promising skill-set.
      </p>

      <p>
        I am proficient and comfortable working with a range of programming
        languages, frameworks and databases including Java, Angular, ReactJS,
        Python, NodeJS, MongoDB and MySQL.
      </p>

      <p>..... not complete !</p>
    </div>
  )
}

export default Education
