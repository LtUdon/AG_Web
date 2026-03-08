import { useNavigate } from 'react-router-dom'
import './Home.css'
import gianImage from '/Gian.png'

function Home() {
	const navigate = useNavigate()

return (
	<>
	<title>Gian Alfonso</title>
	<div>
		<img src={gianImage} alt="Gian Alfonso" className="profile-pic-home"/>
		
		<h1>Hi, I'm Gian!</h1>
		<div className='button_directories'>
			<button onClick={() => navigate('/about')}>About</button>
			<button onClick={() => alert('WIP: Projects')}>Projects</button>
			<button onClick={() => alert('WIP: Contact')}>Contact</button>
		</div>
	</div>
	</>
)
}

export default Home
