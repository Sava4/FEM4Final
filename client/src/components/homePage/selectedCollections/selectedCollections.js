import React from "react";
import styled from "styled-components";

import prive from "./Prive.png";
import melanka from "./Melanca.png";
import aultra from "./Aultra.png";
import {
  mediaMobile,
  mediaTablet
} from "../../../styled-components/media-breakpoints-mixin";

export const SelectedCollections = () => {
  return (
    <Collections>
      <CollectionsTitle>SELECTED COLLECTIONS</CollectionsTitle>
      <CollectionsItemWrapper>
        <CollectionsItemPrive>
          <PriveImage />
          <ImageDesc>PRIVE</ImageDesc>
        </CollectionsItemPrive>
        <CollectionsItemMelenka>
          <MelankaImage />
          <ImageDesc>MELENKA</ImageDesc>
        </CollectionsItemMelenka>
        <CollectionsItemAultra>
          <AultraImage />
          <ImageDesc>AULTRA CLASSIC</ImageDesc>
        </CollectionsItemAultra>
      </CollectionsItemWrapper>
    </Collections>
  );
};

const Collections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;
const CollectionsTitle = styled.div`
  font-size: 24px;
  margin-bottom: 30px;
  margin-top: 100px;
`;

const CollectionsItemWrapper = styled.div`
  display: flex;
`;

const CollectionsItemPrive = styled.div`
  cursor: pointer;
  ${mediaMobile(`
  display: none;
  `)}
`;
const CollectionsItemMelenka = styled.div`
  cursor: pointer;
`;
const CollectionsItemAultra = styled.div`
  cursor: pointer;
  ${mediaTablet(`
  display: none;
  `)}

  ${mediaMobile(`
  display: none;
  `)}
`;

const PriveImage = styled.div`
  width: 360px;
  height: 466px;
  background-image: url(${prive});
  background-size: cover;
`;
const MelankaImage = styled.div`
  width: 360px;
  height: 466px;
  margin-left: 25px;
  margin-right: 25px;
  background-image: url(${melanka});
  background-size: cover;

  ${mediaTablet(`
  margin-right: 0;
  `)}
  ${mediaMobile(`
  margin: 0;
  `)}
`;
const AultraImage = styled.div`
  width: 360px;
  height: 466px;
  background-image: url(${aultra});
  background-size: cover;
`;

const ImageDesc = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;
