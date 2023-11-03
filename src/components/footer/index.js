import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import IMAGES from "../../assets";

export const Footer = () => {
  return (
    <Box
      pt={10}
      pb={10}
      bgcolor={"#2D4156"}
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img
              srcSet={IMAGES.footerLogo2x}
              src={IMAGES.footerLogo}
              loading="lazy"
              style={{
                width: 174,
                height: 88,
              }}
            />
          </Grid>
        </Grid>
        <Grid container paddingTop={10} rowSpacing={5}>
          <Grid direction={"column"} container item xs={12} sm={4}>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
              fontFamily={"Montserrat"}
              variant="caption"
              color={"white"}
              textAlign={"left"}
            >
              +40 213 057 196 47
            </Typography>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
              fontFamily={"Montserrat"}
              variant="caption"
              color={"white"}
              textAlign={"left"}
            >
              office@arggo.com
            </Typography>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"left"}
              variant="caption"
            >
              Aviatorilor Blvd., 4th floor, Bucharest
            </Typography>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
              fontFamily={"Montserrat"}
              variant="caption"
              color={"white"}
              textAlign={"left"}
            >
              www.arggo.com
            </Typography>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
              fontFamily={"Montserrat"}
              variant="caption"
              color={"white"}
              textAlign={"left"}
            >
              www.businesscentral.ro
            </Typography>
            <Divider
              sx={{
                borderBottomColor: "white",
                borderBottomWidth: 0.5,
                opacity: 0.5,
                pt: 5,
                display: { xs: "block", sm: "none" },
              }}
            />
          </Grid>

          <Grid container direction={"column"} item xs={12} sm={4}>
            <Typography
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"center"}
              variant="caption"
            >
              Terms and Conditions
            </Typography>
            <Typography
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"center"}
              variant="caption"
            >
              Cookies policy
            </Typography>
            <Typography
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"center"}
              variant="caption"
            >
              Confidentiality policy
            </Typography>

            <Divider
              sx={{
                borderBottomColor: "white",
                borderBottomWidth: 0.5,
                opacity: 0.5,
                pt: 5,
                display: { xs: "block", sm: "none" },
              }}
            />
          </Grid>
          <Grid container direction={"column"} item xs={12} sm={4}>
            <Typography
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"right"}
              variant="caption"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "right",
                },
              }}
            >
              Platform
            </Typography>
            <Typography
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"right"}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "right",
                },
              }}
              variant="caption"
            >
              Tailored Solutions
            </Typography>
            <Typography
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"right"}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "right",
                },
              }}
              variant="caption"
            >
              Partnerships
            </Typography>
            <Typography
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"right"}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "right",
                },
              }}
              variant="caption"
            >
              Contact
            </Typography>
            <Typography
              fontFamily={"Montserrat"}
              color={"white"}
              textAlign={"right"}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "right",
                },
              }}
              variant="caption"
            >
              FAQ
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
