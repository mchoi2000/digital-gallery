import './index.scss';
import { Tabs, Tab } from "react-bootstrap";
import { Recipe } from './recipe';
import { Counter } from './counter';
import { ImageGallery } from './gallery';

export const Apps = () => {
  return (
    <div className="App">
      <Tabs defaultActiveKey="gallery" id="main-tabs">
        <Tab className="app-container" eventKey="gallery" title="Gallery">
          <ImageGallery />
        </Tab>
        <Tab className="app-container" eventKey="recipes" title="Recipes">
          <Recipe />
        </Tab>
        <Tab eventKey="counter" title="Counter">
          <Counter />
        </Tab>
      </Tabs>
    </div>
  )
}