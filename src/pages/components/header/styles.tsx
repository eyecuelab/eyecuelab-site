import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const EyeCueNavBar = styled(Navbar)`
   display: flex;
   align-items: center;
   background: ${prop => prop.toggled ? 'linear-gradient(306deg, rgba(65,122,255,1) 0%, rgba(80,23,255,1) 100%)' : 'rgba(0,0,0,0)'};
   @media screen and (max-width: 768px) {
          .navbar-collapse {
               height: 87vh;
          }
     }
`;






