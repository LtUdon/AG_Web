import { useNavigate } from 'react-router-dom'
import './Projects.css'
import gianImage from '/Gian.png'

function Projects() {
	const navigate = useNavigate()

return (
	<>
	<title>Gian Alfonso - PROJECTS</title>
	<header className='header'>
		<div className='header-content'>
			<nav className='nav'>
				<button onClick={() => navigate('/')} className='home-button'>
					<img src={gianImage} alt="Gian Alfonso" className="profile-pic"/> <br/>
				</button>
				<ul className='nav-list'>
					<li className='nav-item'>
						<a onClick={() => navigate('/about')}>About</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<div className='header-compensate'></div>
	<div>
		<div className='projects-container'>
			<h1>Projects</h1>
			<ul className='project-list'>
				<li className='project-token'>
					Essoterra
				</li>
				<li className='project-token'>
					Orion Project
				</li>
				<li className='project-token'>
					Volunteering Website
				</li>
			</ul>
		</div>
	</div>
	</>
)
}

export default Projects
