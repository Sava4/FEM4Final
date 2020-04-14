import styled from "styled-components";
import {
  mediaDesktop,
  mediaMobile,
  mediaTablet
} from "../../styledComponents/MediaBreakpointsMixin";

export const Page = styled.div` 
margin: 15px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1200px;
  
${mediaDesktop(`
   
`)}
${mediaTablet(`
    
`)}
${mediaMobile(`

`)}
`;
