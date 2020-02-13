import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import img2 from './../../img/slider/img2.jpg'
// import slide_1 from "../../img/slider/1.jpg";
// import slide_2 from "../../img/slider/2.jpg";
// import slide_3 from "../../img/slider/1.jpg";



// axios
//       .get("http://localhost:5000/slides")
//       .then(response => {
//           //response.data./*Do something with newProduct*/
//           console.log(response.data);
//           console.log(response.data[0].imageUrl)     

//           let slide_1 = response.data[0].imageUrl
//           let slide_2 = response.data[1].imageUrl
//           let slide_3 = response.data[2].imageUrl  

        

// })
// .catch(err => {
//     /*Do something with error, e.g. show error to user*/
// });




// function A() {
//   const [data, setData] = useState({ hits: [] });
// useEffect(async () => {
//   const result = await axios
//   .get("http://localhost:5000/slides")
//   .then(response => {
//       //response.data./*Do something with newProduct*/
//       console.log(response.data);
//       console.log(response.data[0].imageUrl)     

      


// })
// .catch(err => {
// /*Do something with error, e.g. show error to user*/
// });
// setData(result.data);
// console.log(result.data)
// }, []);

// return (
  // let slide_1 = response.data[0].imageUrl
  //     let slide_2 = response.data[1].imageUrl
  //     let slide_3 = response.data[2].imageUrl             
     
  //     const CarouselImage1 = styled.div`

  //     background: url(${slide_1});
  //     height: 425px;
  //     opacity:1;
  //     `
  //     const CarouselImage2 = styled.div`
      
  //     background: url(${slide_2});
  //     height: 425px;
  //     opacity:1;
  //     `
  //     const CarouselImage3 = styled.div`
      
  //     background: url(${slide_2});
  //     height: 425px;
  //     opacity:1;
  //     `
// );
// }

const CarouselImage1 = styled.div`

height: 425px;
opacity:1;
`
const CarouselImage2 = styled.div`          

height: 425px;
opacity:1;
`
const CarouselImage3 = styled.div`          

height: 425px;
opacity:1;
`

const SliderPromo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 452px;
height: 100%;
margin-left: 130px;
background-color: #FFFFFF;
opacity: 0.9;
`;

const SliderPromoText = styled.div`
width: 70%;
background-color: #FFFFFF;
opacity: 0.8;
font-size: 12px;
font-family: Montserrat, sans-serif;
color: black;
`;

const SliderPromoButton = styled.a`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 275px;
width: 280px;
height: 46px;
background: #FFFFFF;
border: 1px solid #262c37;
box-sizing: border-box;
text-decoration: none;
color: black;
font-size: 14px;
`

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return ( 
    <div>    
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", right:"25.4%", zIndex:"1", top: "96.7%", after: {content:'›'}
    }}
      onClick={onClick}
    />
    
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props; 
  return (    
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", left:"70%", zIndex:"1", top: "96.7%",}}
      onClick={onClick}
    />
  );
}


 export const Carousel = () => {
      const settings = {
        accessibility: true,
        dots: true,
        arrows: true,
        infinite: true,
        draggable: true,
        // autoplay: true,
        // centerMode: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

const [text, setText] = useState([]);
async function fetchData(){
  const result = await fetch("http://localhost:5000/slides")
  const data = await result.json()
  console.log(data)
  console.log(data[0].description)
 
 setText(data)

}
useEffect(()=>{
  fetchData()  
},[])

console.log(text)
text.map(item=>{
  console.log(item.description)
})
  //  const [text, setText] = useState({});
  //  useEffect(async () => {
  //    const result = await axios
  //   .get("http://localhost:5000/slides")
  //    setText(result.data);
  //    console.log(result.data[0].description)
  //  }, []);

 return(
  
    <div
      className="carousel_wrapper"
      style={{
        height: `height: 425px`,//`${window.innerHeight}px`,
        // overflow: "hidden"
      }}
    >
     
      <Slider {...settings}>
        <div>
          <CarouselImage1>
          {console.log(text.imageUrl)}
              <SliderPromo>
                <SliderPromoText>                
                 <p>{text.description}</p>             
                  {console.log(text)} 
                </SliderPromoText>
                <SliderPromoButton href='#'>
                 <div> SHOP NOW</div>
                </SliderPromoButton>
              </SliderPromo>
          </CarouselImage1>
        </div>
        <div>
        <CarouselImage2>
          <img src={text.imageUrl}/>
              <SliderPromo>
                <SliderPromoText>
             
                A kiss on the hand may feel very good,
                  <p> but an Elegant bracelet</p>
                  <p> lasts forever</p>
             
                </SliderPromoText>
                <SliderPromoButton href='#'>
                 <div> SHOP NOW</div>
                </SliderPromoButton>
              </SliderPromo>
          </CarouselImage2>
        </div>
        <div>
        <CarouselImage3><img src={img2}/>
              <SliderPromo>
                <SliderPromoText>
                 
                  <p> lasts forever</p>
                </SliderPromoText>
                <SliderPromoButton href='#'>
                 <div> SHOP NOW</div>
                </SliderPromoButton>
              </SliderPromo>
          </CarouselImage3>
        </div>
      </Slider>
    </div>
  );
};

 


