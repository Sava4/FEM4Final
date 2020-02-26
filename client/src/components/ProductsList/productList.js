import React, { useState, useEffect } from 'react';
import axios from 'axios/index';
import { ProductItem } from "./productItem";

import styled from "styled-components";

const ListProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("http://localhost:5000/products");
            setProducts(res.data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const ListProduct = products.map((product) => {
            return <ProductItem
                key={product._id}
                img={`https://zarina.ua/media/catalog/product/cache/1/image/412x517/9df78eab33525d08d6e5fb8d27136e95/1/-${getImagesName(product.imageUrls[0])}`}
                name={product.name}
                currentPrice={product.currentPrice}
                collection={product.collection}
            />
        }
    );
    return (
        <Wrapper>
            {ListProduct.splice(0,9)}
        </Wrapper>
    );
};
//Using splice for products array instead the pagination.
const getImagesName = (img) => {
    const re = /\bimg\/products\/earrings|img\/products\/bracelets|img\/products\/necklaces\b/gi;
    const img2 = img.replace(re, '');
    return img2
}; //Using this temporary function for images from site before pictures will be added.

export const ProductsList = () => {
    return (
        <ListProducts/>
    )
};

//*** STYLED-COMPONENTS ***//

export const Wrapper = styled.div`
     display:flex;
     flex-wrap: wrap;
     align-items: center;
     margin: 0 auto;
     max-width: 920px;
     width: 80%;
     @media(max-width: 1050px) {
       max-width: 800px;
    }
     @media(max-width: 992px) {
       max-width: 600px;
    }
     @media(max-width: 767px) {
       max-width: 500px;
    }
`;

