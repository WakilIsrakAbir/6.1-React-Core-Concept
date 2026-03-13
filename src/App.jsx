
import './App.css'

function App() {

  return (
    <>
      <h1>React Core Concept</h1>

      <Persone></Persone>
      <Persone></Persone>
      <Persone></Persone>
      <Sports></Sports>

      <Student></Student>
      <Student></Student>
      <Student></Student>

      <Developer name="Miraj" skill="js"></Developer>
      <Developer name="Yeamin" skill="java"></Developer>
      <Developer name="Takmin" skill="python"></Developer>

      <Device phone="iPhone X" price="25000"></Device>
      <Device phone="iPhone 15" price="65000"></Device>
      <Device phone="iPhone 17" price="125000"></Device>
      
      <Player></Player>
      <Player></Player>
    </>
  )
}

function Player() {
  return(
    <div className='player'>
      <h3>Name: </h3>
      <h2>Runs: </h2>
    </div>
  )
}

function Device(props) {
  return(
    <div>
      <h3>My Favrite Phone: {props.phone} </h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return(
    <div style={{
      border: "2px solid green",
      borderRadius: "10px"
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.skill} </p>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Persone() {
  const name = "Abir"
  const age = 25;
  const jobStatus = "Bekar";
  const personeStyle = {
    color: "purple",
    fontSize: "20px"
  }
  return (
    <p style={personeStyle}>I am {name} & I am {age} Years Old. Job Satatus: {jobStatus} </p>
  )
}

function Sports() {
  return(
    <div>
      <h3>Cricket</h3>
      <p>Playing and Losing</p>
    </div>
  )
}

export default App
