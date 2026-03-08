import { useNavigate } from 'react-router-dom'
import './About.css'
import gianImage from '/Gian.png'

function About() {
	const navigate = useNavigate()

return (
	<>
	<title>Gian Alfonso - ABOUT ME</title>
	<header className='header'>
		<div className='header-content'>
			<a href='#' className='logoButton' onClick={() => navigate('/')}>
				<img src={gianImage} alt="Gian Alfonso" className="profile-pic"/>
			</a>

			<nav className='nav'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<a href='#'>Projects</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<div>
		
		<div className='about-container'>
			<h1>About Me</h1>
					<p>
						Hello! My name is <b>Gian Alfonso</b>, a current student at the University of Houston (graduating in the Spring of 2027). <br/>
						I thrive in team-based projects in positions like database management and full-stack development.
					</p>
					<p>
						Growing up, I've always had a love for video games and decided to persue game development. <br/>
						I've had my first taste in programming since I was 14. And since then, I realized that problem-solving has been my favorite aspect in programming! <br/>
						After learning Java and C# in high school, I decided to continue my programming journey and major in Computer Science exploring more languages. <br/>
						Now, as a UH student I've been able to get my hands on a more hands-on experience in video game development among other concepts! <br/>
					</p>
				<h2>Education</h2>
					<h3>University of Houston </h3>
					<p>
						<i>January 2024 - PRESENT</i> <br/>
					</p>
					<h3>Houston City College </h3>
					<p>
						<i>August 2021 - December 2023</i> <br/>
					</p>
				<h2>Skills</h2>
				<h3>Languages</h3>
				<div className='token-container'>
					<div className='token'>
						<i class="devicon-python-plain"></i>
						Python
					</div>
					<div className='token'>
						<i class="devicon-cplusplus-plain"></i>
						C++
					</div>
					<div className='token'>
						<i class="devicon-javascript-plain"></i>
						JS
					</div>
					<div className='token'>
						<i class="devicon-html5-plain"></i>
						HTML
					</div>
					<div className='token'>
						<i class="devicon-css3-plain"></i>
						CSS
					</div>
					<div className='token'>
						<i class="devicon-azuresqldatabase-plain"></i>
						SQL
					</div>
				</div>
				<h3>Database Managers</h3>
				<div className='token-container'>
					<div className='token'>
						<i class="devicon-postgresql-plain"></i>
						PostgreSQL
					</div>
					<div className='token'>
						<i class="devicon-mysql-original"></i>
						MySQL
					</div>
					<div className='token'>
						<i class="devicon-sqlite-plain"></i>
						SQLite
					</div>
				</div>
				<h3>Web Development</h3>
				<div className='token-container'>
					<div className='token'>
						<i class="devicon-nodejs-plain-wordmark"></i>
						Node.JS
					</div>
					<div className='token'>
						<i class="devicon-react-original"></i>
						React
					</div>
					<div className='token'>
						<i class="devicon-vitejs-plain"></i>
						Vite
					</div>
				</div>
				<h3>Video Game Development</h3>
				<div className='token-container'>
					<div className='token'>
						<i class="devicon-unrealengine-original"></i>
						Unreal Engine
					</div>
					<div className='token'>
						<i class="devicon-blender-original"></i>
						Blender
					</div>
				</div>
		</div>
	</div>
	</>
)
}

export default About
