import "./App.css";
import ToDo from "./Todo";
import Actor from "./Actor";
import Singer from "./singer";

function App() {

  const time = "50 min";

  const actors = ["Bappa Raj", "Omar Sani", "Salman Shah", "Jasim", "Anwar"]

  const singers = [
    {id: 1, name: "Dr. Mafuz", age: 68},
    {id: 2, name: "Tahsan", age: 45},
    {id: 3, name: "Shuvo Deb", age: 57},
  ]

  return (
    <>
      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }

      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }

      <ToDo task="React" isDone={true} time={time}></ToDo>
      <ToDo task="Node Js" isDone={false}></ToDo>
      <ToDo task="Take a shower" isDone={false}></ToDo>

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

      <Player name="Tamim" runs="5000"></Player>
      <Player name="Musfiq" runs="5000"></Player>
    </>
  );
}

function Player({ name, runs }) {
  return (
    <div className="player">
      <h3>Name: {name} </h3>
      <h2>Runs: {runs} </h2>
    </div>
  );
}

function Device(props) {
  return (
    <div>
      <h3>My Favrite Phone: {props.phone} </h3>
      <p>Price: {props.price} </p>
    </div>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "10px",
      }}
    >
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.skill} </p>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>name: </p>
      <p>Dept: </p>
    </div>
  );
}

function Persone() {
  const name = "Abir";
  const age = 25;
  const jobStatus = "Bekar";
  const personeStyle = {
    color: "purple",
    fontSize: "20px",
  };
  return (
    <p style={personeStyle}>
      I am {name} & I am {age} Years Old. Job Status: {jobStatus}{" "}
    </p>
  );
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and Losing</p>
    </div>
  );
}

export default App;
