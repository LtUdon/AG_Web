import './Home.css'
import gianImage from '/Gian.png'

function Home() {
return (
	<>
	<title>Gian Alfonso</title>
	<div>
		<img src={gianImage} alt="Gian Alfonso" className="profile-pic"/>
		<h1>Hi, I'm Gian!</h1>
		<div className='button_directories'>
			<button onClick={() => alert('Pressed: About')}>About</button>
			<button onClick={() => alert('Pressed: Projects')}>Projects</button>
			<button onClick={() => alert('Pressed: Contact')}>Contact</button>
		</div>
	</div>
	</>
)
}

export default Home
