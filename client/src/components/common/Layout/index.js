import React from "react";
import styled from "styled-components";

import { HeaderContent } from "../Header/Header";
import { Footer } from "../Footer";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";

export const Layout = props => {
  return (
    <MainLayout>
      <HeaderContent />
      <main className="content">{props.children}</main>
      <Footer />
    </MainLayout>
  );
};

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & .content {
    flex-grow: 1;
  }

  ${mediaMobile(`
    & .content {
    flex-grow: 0;
  }
  `)}
`;
