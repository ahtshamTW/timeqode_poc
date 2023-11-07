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
              pr: {
                xs: 0,
                sm: 16,
              },
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
            backgroundImage: `url(${IMAGES.dark1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              xs: "16px",
              sm: "158px",
            }
          }}
        >
          <div
            style={{
              background:
                "transparent linear-gradient(270deg, #01132600 0%, #011326 100%) 0% 0% no-repeat padding-box",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></div>
          <Typography
            variant="h3"
            fontSize={{ xs: "20px", sm: "30px" }}
            fontFamily="Montserrat"
            sx={{
              color: " #FFFFFF",
              padding: "8px",
              textAlign: "left",
            }}
          >
            <span style={{ color: "#8570EB" }}>Access</span> from any type of device
          </Typography>
          <Typography
            variant="h3"
            fontFamily="Montserrat"
            fontSize={{ xs: "20px", sm: "30px" }}
            sx={{
              color: " #FFFFFF",
              padding: "8px",
              textAlign: "center",
            }}
          >
            (laptop, tablet, mobile)
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefits;
