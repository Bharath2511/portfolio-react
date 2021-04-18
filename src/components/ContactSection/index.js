import {Component} from 'react'
import './index.css'

class ContactSection extends Component {
  render() {
    return (
      <div className="contact-section">
        <h1>My Contact</h1>
        <img
          className="location-img"
          src="https://assets.ccbp.in/frontend/react-js/location-img.png"
          alt="location"
        />
        <p>
          If you like my projects and interested to work with me. Please
          contact...
        </p>
        <h1>Please Contact</h1>
        <p>9123456789</p>
        <p>sophie.millers@gmail.com</p>
      </div>
    )
  }
}

export default ContactSection
