import React from "react";
import {
  Collections,
  CollectionsTitle,
  CollectionsItemWrapper,
  CollectionsItemPrive,
  CollectionsItemMelenka,
  CollectionsItemAultra,
  AultraImage,
  PriveImage,
  ImageDesc,
  MelankaImage
} from "./selectedCollections.styles";

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
