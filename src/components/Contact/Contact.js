import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './Contact.scss'
import '../Layout/index.scss'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    note: '',
  })

  // To validate Form
  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    note: '',
  })

  const HandleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    // set data with new values received from the form
    setData({ ...data, [name]: value })
  }

  const SubmitForm = async (e) => {
    e.preventDefault()
    console.log('Form data:', data)

    const validateForm = () => {
      let isValid = true
      const newErrors = {
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        note: '',
      }

      if (!data.fname.trim()) {
        newErrors.fname = 'First Name is required'
        isValid = false
      }

      if (!data.lname.trim()) {
        newErrors.lname = 'First Name is required'
        isValid = false
      }

      if (!data.email.trim()) {
        newErrors.email = 'Email is required'
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        newErrors.email = 'Invalid email format'
        isValid = false
      }

      if (!data.note.trim()) {
        newErrors.note = 'Message is required'
        isValid = false
      }

      setErrors(newErrors)
      return isValid
    }

    const isValid = validateForm()

    // Send email using EmailJS
    if (isValid) {
      try {
        await emailjs.send(
          'service_rbpb0i6', // Service ID
          'template_6exhczn', // template ID
          {
            firstName: data.fname,
            lastName: data.lname,
            user_email: data.email,
            user_mobile: data.mobile,
            message: data.note,
          },
          'gXW2hn7Fb_pNtAIWR' // Public key EMAILJS
        )

        toast.success('Email sent successfully!', {
          position: 'top-right',
          autoClose: 3000, // Time in milliseconds the notification will be displayed
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })

        // Reset Form Data
        setData({
          fname: '',
          lname: '',
          email: '',
          mobile: '',
          note: '',
        })
      } catch (error) {
        toast.error('Field Missing or Something went wrong', {
          position: 'top-right',
          autoClose: 3000, // Time in milliseconds the notification will be displayed
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
      }
    } else {
      toast.error('Field Missing', errors, {
        position: 'top-right',
        autoClose: 3000, // Time in milliseconds the notification will be displayed
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }

  const [letterClass, setletterClass] = useState('text-animate')
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
            idx={15}
          />
        </h1>

        <div className="form-div">
          <form method="post" onSubmit={SubmitForm}>
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              value={data.fname}
              onChange={HandleChange}
            ></input>
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              value={data.lname}
              onChange={HandleChange}
            ></input>
            <br />
            <input
              type="phone"
              placeholder="Mobile Number"
              name="mobile"
              maxLength={14}
              onChange={HandleChange}
              value={data.mobile}
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={HandleChange}
              value={data.email}
            ></input>
            <br />
            <textarea
              placeholder="Note"
              name="note"
              value={data.note}
              onChange={HandleChange}
            ></textarea>
            <br />
            <button
              className="submit-button"
              type="submit"
              value="Submit"
              id="submitbtn"
            >
              Submit
            </button>
            {/* <button className="reset-button" type="reset" value="Clear">
              Reset
            </button> */}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact
