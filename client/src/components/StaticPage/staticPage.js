import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Page } from "./staticPage.styles";
import styled from "styled-components";

export const StaticPage = props => {
    // console.log(props)
    let { url } = useParams();
    const [page, setPage] = useState({});
    console.log(url);
    const updatedPage = {
        htmlContent: "<Wrapper><Head>Brand History</Head><TextP><Zarina>ZARINA</Zarina> Jewelry House, the first diamond jewelry brand in Ukraine, was founded on September 28, 1998 by Natalya Netovkina with endless love and respect for women.</TextP><TextP><Zarina>ZARINA</Zarina> Jewelry House is not just a jewelry brand. This is a powerful platform for uniting active women, jewelry from <Zarina>ZARINA</Zarina> is a source of strength and a tool for revealing the value of every lady. We believe that the main value is inside every woman: thoughts, emotions, outlooks on life, and jewelry is a perfect complement to the image and a tool for revealing individuality.</TextP><Head>Collection and designers</Head><TextP>To always delight our customers with exclusive products, <Zarina>ZARINA</Zarina> Jewelry House was one of the first to start close cooperation with eminent designers of Ukraine and abroad.</TextP><TextP>October 2008 — the young and promising German designer Manuel Wolf became the leading designer of the <Zarina>ZARINA</Zarina> brand. For the <Zarina>ZARINA</Zarina> brand, he created a collection of jewelry with diamonds and colored gemstones.</TextP><TextP>In 2012, a designer from France, Roman Bayand, began work on a new collection for a jewelry brand. Thanks to this collaboration, the collections “ZARINA by Roman Bayand”, “Patriotic”, “Special”, “Special Spring”, “Special Autumn” were created.</TextP><TextP>In 2015, Roman Bayand for the Jewelry House created a new conceptual collection “Star from ZARINA”, based on the ancient traditions of the Slavs and the eight-pointed star Alatyr, bringing, according to popular beliefs, harmony and happiness to the family.</TextP><TextP>In 2016, the \"Heyday\" collection was presented by Ukrainian designer Elena Podtopta, dedicated to women, seeking inspiration and harmony.</TextP><Head>Social activity</Head><TextP><Zarina>ZARINA</Zarina> is a socially oriented company whose main goal is to turn Ukraine into a country of happy women. Together with the NGO DUZ, chaired by the founder of <Zarina>ZARINA</Zarina> Jewelry House, Natalya Netovkina, many festivals are held to help vulnerable children, women and the elderly. For many years, <Zarina>ZARINA</Zarina> has been helping the Vatutino house and organizing the Christmas Tree of Wishes festival.</TextP><TextP>In 2019, <Zarina>ZARINA</Zarina> and DAW founded the GIRL POWER social platform, which provides shelter equipment for women and children who are victims of domestic violence.</TextP></Wrapper>"

    };
    console.log(updatedPage.htmlContent);
    useEffect(() => {
        axios
            .put("http://localhost:5000/pages/about-us", updatedPage)
            .then(updatedPage => {
                console.log(updatedPage);
               setPage(updatedPage.data);
            })
            .catch(err => {
                console.log(err);
            });
        // axios
        //     .get(`http://localhost:5000/pages/${url}`)
        //     .then(result => {
        //         console.log(result);
        //         setPage(result.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }, [url]);
//    const someHtml = page.htmlContent;
    return (
        <Page>

        </Page>
        //     <div dangerouslySetInnerHTML={{__html:
        //         someHtml}}/>

    );
};
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;
const Head = styled.div`
align-self: center;
font-size: 30px;
margin: 20px;
`;
const TextP = styled.p`
width: 80%;
text-align: justify;
font-size: 14px;
line-height: 1.5;
margin-bottom: 8px;
text-indent: 25px;
`;
const Zarina = styled.span`
font-weight: bold;
`;

