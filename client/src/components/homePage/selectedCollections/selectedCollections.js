import React from "react";
import styled from "styled-components";

import prive from "./Prive.png";
import melanka from "./Melanca.png";
import aultra from "./Aultra.png";

export const SelectedCollections = () => {
  return (
    <Collections>
      <CollectionsTitle>SELECTED COLLECTIONS</CollectionsTitle>
      <CollectionsItemWrapper>
        <CollectionsItem>
          <PriveImage/>
          <ImageDesc>PRIVE</ImageDesc>
        </CollectionsItem>
        <CollectionsItem>
          <MelankaImage/>
          <ImageDesc>MELENKA</ImageDesc>
        </CollectionsItem>
        <CollectionsItem>
          <AultraImage/>
          <ImageDesc>AULTRA CLASSIC</ImageDesc>
        </CollectionsItem>
      </CollectionsItemWrapper>
    </Collections>
  )
};

const Collections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`
const CollectionsTitle = styled.div`
  font-size: 24px;
  margin-bottom: 30px;
  margin-top: 130px;
`

const CollectionsItemWrapper = styled.div`
  display: flex;
`

const CollectionsItem = styled.div`
  
`

const PriveImage = styled.div`
  width: 360px;
  height: 466px;
  background-image: url(${prive});
  background-size: cover;
`
const MelankaImage = styled.div`
  width: 360px;
  height: 466px;
  margin-left: 25px;
  margin-right: 25px;
  background-image: url(${melanka});
  background-size: cover;
`
const AultraImage = styled.div`
  width: 360px;
  height: 466px;
  background-image: url(${aultra});
  background-size: cover;
`

const ImageDesc = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`