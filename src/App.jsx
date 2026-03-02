import './App.css'

function getExplanation(){
const explain = <p>This is a simple React app that demonstrates how to use functions to generate content.</p>
return explain
}

function Greeting({name, id}){
return (
	<>
	<div>
	<h2> Hi, {name} <i>[{id}]</i></h2>
	</div>
	</>
)
}

function App({id}) {
const explanation = getExplanation()
return (
	<>
	<div>
	<p>{id}</p>
	<h1>APP</h1>
	<Greeting 
		name="LtUdon" id="1"/>
	<Greeting 
		name="Imanoodle" id="2"/>
	<Greeting 
		name="Goober" id="3"/>
	{explanation}
	</div>
	</>
)
}

export default App
