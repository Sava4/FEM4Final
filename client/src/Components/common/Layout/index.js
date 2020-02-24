import React from "react";
import styled from "styled-components";
import { Header } from "../header";
import { Footer } from "../Footer";

export const Layout = props => {
  console.log(props);
  return (
    <MainLayout>
      <Header></Header>
      <main className="content">{props.children}</main>
      <Footer></Footer>
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
`;
