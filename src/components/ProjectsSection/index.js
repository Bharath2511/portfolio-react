import {Component} from 'react'
import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

// Write your code here
class ProjectsSection extends Component {
  renderProjects = () =>
    projectsData.map(project => {
      const {id, imageUrl, name} = project
      return (
        <div key={id} className="project-card">
          <img src={imageUrl} alt="projectImage" className="project-image" />
          <p>{name}</p>
        </div>
      )
    })

  render() {
    return (
      <div>
        <h1>My Work</h1>
        <div className="projects-container">{this.renderProjects()}</div>
      </div>
    )
  }
}

export default ProjectsSection
