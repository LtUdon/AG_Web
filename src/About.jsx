import './About.css'
import gianImage from '/Gian.png'

function About() {
return (
	<>
	<title>Gian Alfonso</title>
	<div>
		<button onClick={() => window.location.href = '/'} className='home-button'>Home</button>
		<div className='about-container'>
			<h1>About Me</h1>
					<p>
						Hello! My name is Gian Alfonso, a current student at the University of Houston. <br></br>
						Growing up, I've always had a love for video games and decided to persue game development. <br></br>
						I've had my first taste in programming since I was 14. And since then, I realized that problem-solving has been my favorite aspect in programming!<br></br>
						After learning Java and C# in high school, I decided to continue my programming journey and major in Computer Science exploring more languages.
					</p>
					<p>
						Now, as a UH student (graduating in the Spring of 2027), I thrive in team-based projects in positions like database management and full-stack development.
					</p>
				<h2>Education</h2>
					<h3>University of Houston <i>2024 - 2027</i></h3>
					<h3>Houston City College <i>2021 - 2023</i></h3>
				<h2>Skills</h2>
		</div>
	</div>
	</>
)
}

export default About
