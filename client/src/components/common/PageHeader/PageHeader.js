import styled from "styled-components";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";

export const PageHeader = styled.div.attrs(props => ({
  marginTop: props.marginTop || "30px",
  marginRight: props.marginRight || "auto",
  marginBottom: props.marginBottom || "30px",
  marginLeft: props.marginLeft || "auto",
  textAlign: props.textAlign || "center"
}))`
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: ${props => props.textAlign};
  margin: ${props => props.marginTop} ${props => props.marginRight}
    ${props => props.marginBottom} ${props => props.marginLeft};
  ${mediaMobile(`
    font-size: 16px;
  `)}
`;
