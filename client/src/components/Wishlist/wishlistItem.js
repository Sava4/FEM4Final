import React from "react";
import close from "../ShoppingBag/modal-close-btn.png";
import {
    ArticleNo,
    CloseImg,
    Description,
    ImgWrap, ItemContainer,
    ProdImg,
    ProductDescription,
    RemoveBtn,
} from "../ShoppingBag/CartItem";

export const WishlistItem = ({ props, handleDel }) => {
    return (
        <ItemContainer>
            <div className="product">
                <ImgWrap>
                    <ProdImg src="" />
                </ImgWrap>
                <ProductDescription>
                    <Description>ИМЯ ТОВАРА</Description>
                    <ArticleNo>Article no.: </ArticleNo>
                    <RemoveBtn>
                        <CloseImg src={close} />
                        Remove
                    </RemoveBtn>
                </ProductDescription>
            </div>
            <div>2333333 UAH</div>
        </ItemContainer>
    );
};