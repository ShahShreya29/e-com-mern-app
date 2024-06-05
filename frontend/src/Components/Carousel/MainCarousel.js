import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";
import "./MainCarousel.css"; // Import your CSS file
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const MainCarousel = () => {
  const items = MainCarouselData.map((item, index) => (
    <img
      key={index}
      className="carousel-image"
      src={item.image}
      alt={`Carousel Image ${index}`}
    />
  ));

  return (
    <>
      <Grid container spacing={2} p={10}>
        <Grid item xs={4} md={6}>
          <AliceCarousel
            items={items}
            disableButtonsControls
            disableDotsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
          />
        </Grid>
        <Grid item xs={6} md={4} justifyContent="space-between">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Box
                height={200}
                width={200}
                //  my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: "2px solid grey" }}
              >
                <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_9HVROtMjfow1rrRXuo_w6JBjWoPkH7HA14ht9-9zlaz3U5SUm-OHYGTJUSF6dwUYxo&usqp=CAU" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                height={200}
                width={200}
                // my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: "2px solid grey" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSd76oNe1pS7ujzgXQ-XRhGZFldwivbza5hw&s"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                height={200}
                width={200}
                // my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: "2px solid grey" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSerpeZy0pFWASCZs6gzXwTfLkEg6xWsN3lw&s"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                height={200}
                width={200}
                // my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: "2px solid grey" }}
              >
                <img
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPEDyM_BpVnK9K_bxTZN5J5leS3aSdU9txg&s"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainCarousel;
