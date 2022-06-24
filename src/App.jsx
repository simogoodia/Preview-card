import Img from './components/image/image';
import { Container } from "react-bootstrap";
import Insight from './components/insight/insight';
import "./App.css";

function App() {
  return (
    <Container>
      <div className='wrapper'>
        <Insight />
        <Img />
      </div>
    </Container>
  )
}

export default App;
