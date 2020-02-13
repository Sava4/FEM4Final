import React from 'react';
// import { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

// import slide_1 from "../../img/slider/1.jpg";
// import slide_2 from "../../img/slider/2.jpg";
// import slide_3 from "../../img/slider/1.jpg";


 export function getSlide (){
 
      axios
      .get("http://localhost:5000/slides")
      .then(response => {
          //response.data./*Do something with newProduct*/
          console.log(response.data);
          console.log(response.data[0].imageUrl)     

          let slide_1 = response.data[0].imageUrl
          let slide_2 = response.data[1].imageUrl
          // let slide_3 = response.data[2].imageUrl    
            


console.log(slide_1)
})
.catch(err => {
    /*Do something with error, e.g. show error to user*/
});

 }
