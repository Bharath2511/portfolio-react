import {Component} from 'react'
import './index.css'

class HomeSection extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Sophie Millers</h1>
        <p>Full Stack Developer</p>
        <p className="skills">
          Experienced in MongoDB, Express, ReactJS and Node.js, Bootstrap, HTML,
          CSS, SQL, Python.
        </p>
        <button className="resume-button" type="button">
          View Resume
        </button>
      </div>
    )
  }
}

export default HomeSection
