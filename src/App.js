import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/navbar';
import { Jumbotron } from './components/jumbotron';
import { Gallery } from './pages/gallery';
import { Projects } from './pages/projects';


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Jumbotron />
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route path="/projects" component={Projects} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
