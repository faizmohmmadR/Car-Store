import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import pic1 from "../../assets/images/pic.png";
import pic2 from "../../assets/images/pic3.jpg";
import pic3 from "../../assets/images/pic4.jpg";
import pic4 from "../../assets/images/pic1.jpg";
import pic5 from "../../assets/images/pic.png";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: "80vh",
  width: "90vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // boxShadow: "0px 0px 10px 0px #333",
  borderRadius: "10px",
  marginTop: "10px",
  transition: 'all 3s',
  ":hover":{ transform: 'translateX(1200px)'},
}));

const ImageStyle = styled(Box)({
  width: "60%",
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const DetailStyle = styled(Box)({
  width: "40%",
  height: "90%",
  textAlign: "center",
});

const images = [
  {
    Image: pic1,
    name: "persom",
    price: 300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim fermentum auctor. Sed sit amet massa et urna aliquet posuere. Praesent id augue ut ante fermentum scelerisque ac at nulla. Aliquam ultricies facilisis neque nec tristique. Etiam at scelerisque massa. Sed viverra, sapien at interdum commodo, mauris eros euismod lacus, ac ultricies lacus est a velit.",
  },
  {
    Image: pic2,
    name: "person1",
    price: 300,
    description:
      " Integer aliquam ipsum leo, non sollicitudin risus tristique sed. Phasellus et nisi ac arcu maximus ornare at vitae nisi. In sed eleifend sem. Donec dictum est vitae neque molestie, ut efficitur leo tempus. Sed id tempor ante. Nulla id nisl nibh.",
  },
  {
    Image: pic3,
    name: "person2",
    price: 300,
    description:
      " Integer aliquam ipsum leo, non sollicitudin risus tristique sed. Phasellus et nisi ac arcu maximus ornare at vitae nisi. In sed eleifend sem. Donec dictum est vitae neque molestie, ut efficitur leo tempus. Sed id tempor ante. Nulla id nisl nibh.",
  },
  {
    Image: pic3,
    name: "person3",
    price: 300,
    description:
      " Integer aliquam ipsum leo, non sollicitudin risus tristique sed. Phasellus et nisi ac arcu maximus ornare at vitae nisi. In sed eleifend sem. Donec dictum est vitae neque molestie, ut efficitur leo tempus. Sed id tempor ante. Nulla id nisl nibh.",
  },
  {
    Image: pic4,
    name: "person4",
    price: 300,
    description:
      " Integer aliquam ipsum leo, non sollicitudin risus tristique sed. Phasellus et nisi ac arcu maximus ornare at vitae nisi. In sed eleifend sem. Donec dictum est vitae neque molestie, ut efficitur leo tempus. Sed id tempor ante. Nulla id nisl nibh.",
  },
  {
    Image: pic5,
    name: "person5",
    price: 300,
    description:
      " Integer aliquam ipsum leo, non sollicitudin risus tristique sed. Phasellus et nisi ac arcu maximus ornare at vitae nisi. In sed eleifend sem. Donec dictum est vitae neque molestie, ut efficitur leo tempus. Sed id tempor ante. Nulla id nisl nibh.",
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const NexImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  const PrevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  });
  let ani = 0;
  return (
    <Container>
      {images.map((image, index) => (
        <Grid>
          {currentImage === index && (
            <StyledGrid>
              <ImageStyle component="img" src={image.Image}></ImageStyle>
              <DetailStyle>
                <Typography variant="h2">{image.name}</Typography>
                <Typography variant="h2">{image.price}</Typography>
                <Typography variant="h6">{image.description}</Typography>
              </DetailStyle>
            </StyledGrid>
          )}
        </Grid>
      ))}
      <ArrowBackIosIcon
        onClick={PrevImage}
        sx={{
          position: "relative",
          left: "5%",
          bottom: '300px',
          color: "#3e0d61",
          fontSize: "3em",
          ":hover": { cursor: "pointer" },
        }}
      />
      <ArrowForwardIosIcon
        onClick={NexImage}
        sx={{
          position: "relative",
          left: '90%',
          bottom: '300px',
          color: "#3e0d61",
          fontSize: "3em",
          opacity: '0.8',
          ":hover": { cursor: "pointer" },
        }}
      />
    </Container>
  );
};

export default Home;
