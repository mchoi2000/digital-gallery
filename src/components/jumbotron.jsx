import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import { Leadspace } from './styles';

export const Jumbotron = () => (
  <Leadspace>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <div>
        <h1>Welcome</h1>
        <p>Explore Mihwa Choi's digital arts generated from public datasets</p>
      </div>
    </Jumbo>
  </Leadspace>
)
