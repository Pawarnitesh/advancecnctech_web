import { Grid } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

const Slide = () => {
  return (
    <Carousel
      style={{
        height: "300px",
        marginTop: "50px",
        marginLeft: "-20px",
      }}
    >
      <Carousel.Item interval={1500}>
        <img
          style={{ width: "100%", padding: "10px", height: "400px" }}
          src="/image/image1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          fluid
          style={{ width: "100%", padding: "10px" }}
          src="/image/image2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          fluid
          style={{ width: "100%", padding: "10px" }}
          src="/image/image3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          fluid
          style={{ width: "100%", padding: "10px" }}
          src="/image/image4.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Slide = () => {
//   return (
// <Carousel
//   style={{
//     height: "300px",
//     marginTop: "50px",
//     marginLeft: "-20px",
//   }}
// >
//   <Carousel.Item interval={1500}>
//     <img
//       style={{ width: "100%", padding: "10px", height: "400px" }}
//       src="/image/image1.jpeg"
//       alt="First slide"
//     />
//   </Carousel.Item>
//   <Carousel.Item interval={1500}>
//     <img
//       fluid
//       style={{ width: "100%", padding: "10px" }}
//       src="/image/image2.jpeg"
//       alt="Second slide"
//     />
//   </Carousel.Item>
//   <Carousel.Item interval={1500}>
//     <img
//       fluid
//       style={{ width: "100%", padding: "10px" }}
//       src="/image/image3.jpeg"
//       alt="Third slide"
//     />
//   </Carousel.Item>
//   <Carousel.Item interval={1500}>
//     <img
//       fluid
//       style={{ width: "100%", padding: "10px" }}
//       src="/image/image4.jpeg"
//       alt="Fourth slide"
//     />
//   </Carousel.Item>
// </Carousel>
//   );
// };

// export default Slide;
