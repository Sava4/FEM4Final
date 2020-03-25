import styled from "styled-components";
import {
  mediaDesktop,
  mediaMobile,
  mediaTablet
} from "./../../styled-components/media-breakpoints-mixin";

export const Page = styled.div` 
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1200px;
  
${mediaDesktop(`
   
`)}
${mediaTablet(`
    
`)}
${mediaMobile(`

`)}
`;
