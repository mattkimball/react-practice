import { useState } from 'react';
import './App.css';

// Bootstrap Elements
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// Apps
import Area from './components/Area.js';
import Clipboard from './components/Clipboard';
import Clock from './components/Clock.js';
import LeapYear from './components/LeapYear';
import Print from './components/Print.js';
import RandomNumber from './components/RandomNumber';
import Rotate from './components/Rotate';


function App() {
  const apps = {
    "Clock": <Clock />,
    "Print": <Print />,
    "Triangle Area": <Area />,
    "Rotate": <Rotate />,
    "Leap Year": <LeapYear />,
    "Random Number": <RandomNumber />,
    "Clipboard": <Clipboard />,
  }
  const [currentApp, setCurrentApp] = useState("Clock");

  const handleChange = ({ target }) => setCurrentApp(target.value);

  return (
    <div className="App mb-3">
      <Container>
        <Form.Select
          name="currentApp"
          id="currentApp"
          onChange={handleChange}
          className="mt-3"
        >
          {Object.keys(apps).map((app) => <option id={app}>{app}</option>)}
        </Form.Select>
        <br />
        {apps[currentApp]}
      </Container>
    </div>
  );
}

export default App;
