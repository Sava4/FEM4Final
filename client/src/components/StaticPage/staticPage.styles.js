import styled from "styled-components";
import {
  mediaDesktop,
  mediaMobile,
  mediaTablet
} from "./../../styled-components/media-breakpoints-mixin";

export const Page = styled.div` 
margin: 0 auto;
  
${mediaDesktop(`
width: 80%;     
`)}
${mediaTablet(`
width: 80%;     
`)}
${mediaMobile(`
width: 80%;    
`)}
`;
