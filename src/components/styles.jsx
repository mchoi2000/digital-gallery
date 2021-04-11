import styled from 'styled-components';
import { Tabs, Tab } from "react-bootstrap";
import boatImage from '../assets/boatImage.jpg';

export const NavbarContainer = styled.div`
  .navbar {
    background-color: #0c0c0c;
    padding: 0 1rem;
  }

  a, .navbar-brand, .navbar-collapse, .navbar-nav .nav-link {
    color: #bbb;
    font-size: 0.9rem;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }

  .navbar-light .navbar-toggler {
    color: #bbb;
    background-color: #bbb;
    padding: 0 0.2rem;
  }

  .navbar-toggler-icon {
    width: 1rem;
    height: 1rem;
  }
`;

export const Leadspace = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #cfcbcb;
    height: 170px;
    margin: 0;
    padding: 40px 40px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const TabsContainer = styled(Tabs)`
  position: absolute;
  top: 179px;
  right: 20px;
  font-size: 0.9rem;

  a {
    padding: 0.2rem 1rem;
    color: #bbb;
  }
`;

export const TabContent = styled.div`
  margin: 20px;
  color: #646363;
`;

export const Checkbox = styled.input`
  margin: 0px 10px 0px !important;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-weight: normal;
  padding-right: 10px;
`;