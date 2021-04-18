import {Component} from 'react'
import './index.css'

const socialMediaAppsData = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png',
    name: 'linkedIn',
    siteUrl: 'https://www.linkedin.com/',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/reddit-logo-img.png',
    name: 'reddit',
    siteUrl: 'https://www.reddit.com/',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-logo-img.png',
    name: 'instagram',
    siteUrl: 'https://www.instagram.com/',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-logo-img.png',
    name: 'facebook',
    siteUrl: 'https://www.facebook.com/',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/pintrest-logo-img.png',
    name: 'pinterest',
    siteUrl: 'https://www.pinterest.com/',
  },
]

// Write your code here
class SocialMediaSection extends Component {
  displayMediaLinks = () => (
    <ul className="social-media-links">
      {socialMediaAppsData.map(data => {
        const {id, imageUrl, siteUrl} = data
        return (
          <li key={id}>
            <a href={siteUrl} target="_blank" rel="noreferrer">
              <img src={imageUrl} alt="mediaUrl" />
            </a>
          </li>
        )
      })}
    </ul>
  )

  render() {
    return <>{this.displayMediaLinks()}</>
  }
}

export default SocialMediaSection
