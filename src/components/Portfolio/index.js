import {Component} from 'react'
import Navbar from '../NavBar'
import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection'
import HomeSection from '../HomeSection'
import ProjectsSection from '../ProjectsSection'
import SocialMediaSection from '../SocialMediaSection'

import './index.css'

class Portfolio extends Component {
  state = {
    displayId: 0,
  }

  displayNavPage = id => {
    this.setState({displayId: id})
  }

  displayNavLink = () => {
    const {displayId} = this.state
    let display
    switch (displayId) {
      case 0:
        display = <HomeSection />
        break
      case 1:
        display = <AboutSection />
        break
      case 2:
        display = <ProjectsSection />
        break
      case 3:
        display = <ContactSection />
        break
      default:
        break
    }
    return display
  }

  render() {
    const {displayId} = this.state
    return (
      <div className="portfolio-container">
        <Navbar displayNavPage={this.displayNavPage} displayId={displayId} />
        <div className="display-footer-nav-container">
          <div className="display-container"> {this.displayNavLink()}</div>
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
