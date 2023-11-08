import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import IMAGES from "../../assets";
import "./benefits.css";

const Benefits = () => {
  return (
    <Container maxWidth="100%" disableGutters sx={{ mt: 16 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            fontWeight={900}
            variant="h3"
            sx={{
              textAlign: {
                xs: "center",
                sm: "right",
              },
              py: '48px'
            }}
            fontFamily="Montserrat"
            color="#2D4156"
          >
            Benefits
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            // backgroundImage: `url(${IMAGES.dark1})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            minHeight: {
              xs: "360px",
              sm: "610px",
            },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            pl: {
              // xs: "16px",
              sm: "158px",
            },
            // '&:hover': {
            //     transform: "scale(1.3) translateX(10%) translateY(10%)",
            //     transition: "transform 1s ease-out"
            // }
            
          }}
        >
        <div class="dark1" >
            <img src={IMAGES.dark1}/>
        </div>
        <div className="text-overlay">

          <Typography
            variant="h3"
            fontSize={{ xs: "20px", sm: "30px" }}
            fontFamily="Montserrat"
            sx={{
              color: "#FFFFFF",
              padding: "8px",
              textAlign: "left",
              zIndex:1
            }}
          >
            <span style={{ color: "#8570EB" }}>Access</span> from any type of device
          </Typography>
          <Typography
            variant="h3"
            fontFamily="Montserrat"
            fontSize={{ xs: "20px", sm: "30px" }}
            sx={{
              color: "#FFFFFF",
              padding: "8px",
              textAlign: "center",
              zIndex: 1
            }}
          >
            (laptop, tablet, mobile)
          </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefits;
