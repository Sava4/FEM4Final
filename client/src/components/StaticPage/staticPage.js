import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";
import ring from "./ring-with-diamonds-1302307.jpg";
import styled, { css } from "styled-components";

export const StaticPage = props => {
  // console.log(props)
  let { url } = useParams();
  const [page, setPage] = useState({});
  const [images, setImages] = useState([]);
  const [res, setResponse] = useState("");
  console.log(url);
  const str =
    '';

  const updatedPage = {
    htmlContent: " <WrapperPage><HeadPage>Care instructions</HeadPage><TextPage>Your <ZarinaPage>Zarina</ZarinaPage> jewel is a precious and refined piece. By taking a few precautions in using and maintaining it, you will be able to preserve its original beauty over time.</TextPage><TextPage>• Your jewelry should be cleaned regularly. You can use a very soft brush and soapy water to clean it, then rinse your piece with clean lukewarm water. Jewels with leather parts can be cleaned with a soft cloth. We recommend that you bring your jewels to a Bulgari boutique annually, to have them checked, professionally cleaned and restored.</TextPage><TextPage>• Consider removing your jewelry before going to sleep, practicing any sport, washing your hands or using corrosive products. Avoid contact with Fragrance, alcohol, cosmetics, ammonia, chlorine and keep your pieces away from intense sources of heat and extreme temperature changes.</TextPage><TextPage>• Prevent damage or loss of your jewels by storing them individually in their original box or pouch after wearing them; contact with other jewelry pieces could cause scratches. Chains should be closed and laid flat to avoid their becoming tangling.</TextPage><TextPage>• If your jewelry suffers a shock or hit, the stone setting may need to be checked. Avoid forcing clasps, joints and metal frames and be sure to check that the clasp and safety latch close properly. If you have any concerns, you should not wear your jewel until you have had it checked by an expert in a Bulgari boutique.</TextPage></WrapperPage>"
  };
  console.log(updatedPage.htmlContent);
  // axios
  //     .post("http://localhost:5000/customers/login", { "loginOrEmail": "customer@gmail.com", "password": "1111111" })
  //     .then(response => {
  //       /*Do something with newProduct*/
  //       setResponse(response.data.token);
  //       console.log(res);
  //     });
  // axios
  //     .put("http://localhost:5000/pages/product-care", updatePage, { headers: { "Authorization": res } })
  //     .then(updatedPage => {
  //       console.log(updatedPage);
  //       setPage(updatedPage.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/pages/${url}`)
      .then(result => {
        console.log(result);
        setPage(result.data);
        setImages(result.data.images);
      })
      .catch(err => {
        console.log(err);
      });
  }, [url]);
  console.log(images[0]);
  const someHtml = page.htmlContent;
  return <Page>
    <Server dangerouslySetInnerHTML={{ __html: someHtml }}/>
    <ImagePage src={images[0]} alt=''/>
    </Page>
};

//<Server dangerouslySetInnerHTML={{ __html: someHtml }}/>
//<ImagePage src={images[0]} alt=''/>
const Server = styled.div`

`;
const WrapperPage = styled.div`
  max-width: 1200px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 
  padding-bottom: 40px;
`;
const HeadPage = styled.h1`
  text-align: center;
  align-self: center;
  font-size: 30px;
  margin: 45px;
  color: #484848;
  ${props =>
    props.main === true &&
    css`
      font-weight: bold;
      font-size: 40px;
      margin: 45px;
    `}
`;
export const TextPage = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: 2;
  color: #484848;
`;
const ZarinaPage = styled.span`
  font-weight: bold;
`;
const ImagePage = styled.img`
  margin: 0 auto 35px auto;
  width: 80%;
`;