import './index.css'
import {Component} from 'react'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

class NavBar extends Component {
  renderNavLinks = () => {
    const {displayNavPage, displayId} = this.props

    return navBarItems.map(navItem => {
      const {id, iconUrl, name} = navItem
      const onClickButton = () => {
        displayNavPage(id)
      }
      const btnClassName =
        id === displayId ? 'button selected-button' : 'button'
      return (
        <li key={id} className={btnClassName} onClick={onClickButton}>
          <img src={iconUrl} alt="icon" className="nav-image" />
          <p className="nav-item">{name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="nav-container">
        <div className="nav-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
            alt="profile"
          />
          <ul className="nav-links-container">{this.renderNavLinks()}</ul>
        </div>
      </div>
    )
  }
}

export default NavBar
