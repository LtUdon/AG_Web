import { useNavigate } from 'react-router-dom'
import './Projects.css'
import gianImage from '/Gian.png'

import esoterra_Map from '/projects/esoterra/map.png?url'
import esoterra_Temple from '/projects/esoterra/temple.png?url'

function Projects() {
	const navigate = useNavigate()

return (
	<>
	<title>Gian Alfonso - PROJECTS</title>
	<header className='header'>
		<div className='header-content'>
			<nav className='nav'>
				<button onClick={() => navigate('/')} className='home-button'>
					<img src={gianImage} alt="Gian Alfonso" className="profile-pic"/>
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
					<h2>Esoterra</h2>
					<p>
						A third-person exploration/survival game where the player must explore special intrests within and information of the island.
					</p>
					<ul>
						<li>A collaborative project initially involving 7 developers.</li>
						<li>In the programming side, I was tasked with:</li>
						<ul>
							<li>Creating an interactive inventory system to promote ease-of-use equippment management to adapt to a high-paced environment.</li>
							<li>Creating an immersive crafting system that efficiently interacts with the inventory system, updating the player's inventory contents based crafting requirements.</li>
						</ul>
						<li>In the creative side, I was involved in:</li>
						<ul>
							<li>Finalizing the base design island.</li>
							<li>Pin-pointing special intrests for players to explore.</li>
						</ul>
						<li><a href='https://files.luckydiestudios.org/Esoterra/'>Visit downolad page here</a></li>
					</ul>
					
					<a 
					href='https://files.luckydiestudios.org/Esoterra/' 
					className='anchor-reference'>
						<img 
						src={esoterra_Map} 
						alt="Esoterra Map"
						title='UI of the map showcasing the island. CLICK for download page!'/>
						<img 
						src={esoterra_Temple} 
						alt="Esoterra Temple"
						title='One of the seven temples present on the island. CLICK for download page!'/>
					</a>
					<iframe
					src="https://www.youtube.com/embed/qncXzy0MQb0"
					title="https://www.youtube.com/embed/qncXzy0MQb0"
					/>
				</li>
				<li className='project-token'>
					<h2>Orion Project</h2>
					<p>
						A minimal Real-time strategy game where the player must achieve full control in a system to win. <br/>
					</p>
						<ul>
							<li>A personal project that employs a strict architecture for practicing compatability between the C++ and Unreal Engine's Blueprints.</li>
						<li>In a given class hierarchy, <b>C++</b> was used for classes that have children while Unreal Engine's <b>Blueprints</b> were used for classes that did not.</li>
						</ul>
				</li>
				<li className='project-token'>
					<h2>Volunteering Website</h2>
					<p>
						A volunteering-matching website that allows users to match volunteering events with their skills.
					</p>
						<ul>
							<li>A team-based assignment website of 4 people to employ our skills in full-stack development and database querying logic.</li>
							<li>The user can:</li>
							<ul>
								<li>Create an account and edit their credentials and skills.</li>
								<li>Employ the user's skills to match them with a matching event.</li>
								<li>With admin controls, they can create events themselves and apply relevant skills recommended.</li>
							</ul>
						</ul>
				</li>
				<li className='project-token'>
					<h2>Project</h2>
					<p>
						Description
					</p>
						<ul>
							<li>Item</li>
						</ul>
				</li>
			</ul>
		</div>
	</div>
	</>
)
}

export default Projects
