import { Tab } from "react-bootstrap";
import { TabsContainer, TabContent } from "../components/styles";
import { Covid } from "../charts/covid";
import { Migrants } from "../charts/migrants";
import { Population } from "../charts/population";

export const Gallery = () => {
  return (
    <TabsContainer defaultActiveKey="pop" id="main-tabs">
      <Tab eventKey="home" title="Covid-19">
        <TabContent>
          <Covid />
        </TabContent>
      </Tab>
      <Tab eventKey="mm" title="Missing Migrants">
        <TabContent>
          <Migrants />
        </TabContent>
      </Tab>
      <Tab eventKey="pop" title="World Population">
        <TabContent>
          <Population />
        </TabContent>
      </Tab>
    </TabsContainer>
  )
}