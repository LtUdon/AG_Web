import { useNavigate } from 'react-router-dom'
import './About.css'
import gianImage from '/Gian.png'

function About() {
	const navigate = useNavigate()

return (
	<>
	<title>Gian Alfonso - ABOUT ME</title>
	<nav>
		<img src={gianImage} alt="Gian Alfonso" className="profile-pic"/> <br/>
		<button onClick={() => navigate('/')} className='home-button'>Home</button>
	</nav>
	<div>
		
		<div className='about-container'>
			<h1>About Me</h1>
					<p>
						Hello! My name is Gian Alfonso, a current student at the University of Houston (graduating in the Spring of 2027). <br></br>
						I thrive in team-based projects in positions like database management and full-stack development.
					</p>
					<p>
						Growing up, I've always had a love for video games and decided to persue game development. <br></br>
						I've had my first taste in programming since I was 14. And since then, I realized that problem-solving has been my favorite aspect in programming! <br></br>
						After learning Java and C# in high school, I decided to continue my programming journey and major in Computer Science exploring more languages. <br></br>
						Now, as a UH student I've been able to get my hands on a more hands-on experience in video game development among other concepts! <br></br>
					</p>
				<h2>Education</h2>
					<h3>University of Houston </h3>
					<p>
						<i>January 2024 - PRESENT</i> <br></br>
						GPA: 2.59 
					</p>
					<h3>Houston City College </h3>
					<p>
						<i>August 2021 - December 2023</i> <br></br>
						GPA: 3.15
					</p>
				<h2>Skills</h2>
				<h3>Languages</h3>
				<div className='token-container'>
					<div className='token'>Python</div>
					<div className='token'>C++</div>
					<div className='token'>JS</div>
					<div className='token'>HTML</div>
					<div className='token'>CSS</div>
					<div className='token'>SQL</div>
				</div>
				<h3>Database Managers</h3>
				<div className='token-container'>
					<div className='token'>PostgreSQL</div>
					<div className='token'>MySQL</div>
					<div className='token'>SQlite</div>
				</div>
				<h3>Web Development</h3>
				<div className='token-container'>
					<div className='token'>Node.js</div>
					<div className='token'>React</div>
					<div className='token'>Vite</div>
				</div>
				<h3>Video Game Development</h3>
				<div className='token-container'>
					<div className='token'>Unreal Engine</div>
					<div className='token'>Blender</div>
				</div>
		</div>
	</div>
	</>
)
}

export default About
