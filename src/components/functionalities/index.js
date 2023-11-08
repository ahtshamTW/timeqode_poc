import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Stack,
  Box,
  Grid,
  Typography,
  Checkbox,
} from "@mui/material";
import IMAGES from "../../assets";
import "./functionalities.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Functionalities = () => {
  const ArrowIcon = ({ color }) => {
    return (
      <ArrowForwardIcon
        sx={{
          paddingTop: {
            sx: 0,
            sm: "6px",
          },
        }}
        style={{
          color,
        }}
      />
    );
  };
  return (
    <Box
      bgcolor={"#2D4156"}
      sx={{
        width: "100%",
        backgroundImage: { xs: "none", md: `url(${IMAGES.logoWhite})` },
        backgroundRepeat: `no-repeat`,
        backgroundSize: "cover",
        marginTop: { xs: "0px", sm: "-300px" },
      }}
    >
      <Container class="overlay" maxWidth="100%" disableGutters>
        <Grid container py={{ xs: "64px", sm: "148px" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
          >
            <img
              id={"functionalities"}
              srcSet={IMAGES.functionalities2x}
              src={IMAGES.functionalities}
              class="functionalities-image"
            ></img>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            alignSelf={"center"}
            order={{ xs: 1, sm: 1, md: 2, lg: 2 }}
          >
            <Grid
              px={{
                xs: 1,
                sm: 0,
              }}
              alignContent={"start"}
              container
              direction={"column"}
            >
              <Typography
                fontWeight={900}
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                  fontSize: { xs: "36px", sm: "72px" },
                  lineHeight: { xs: "40px", sm: "68px" },
                }}
                fontFamily={"Montserrat"}
                color={"#FFFFFF"}
                textAlign={"left"}
              >
                Functionalities
              </Typography>

              <Stack paddingTop={5} direction="row" spacing={2}>
                <ArrowIcon color="#00E0F7" />
                <Typography
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Advance payment request flow.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#00E0F7" />
                <Typography
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Expenses report flow with advance payment
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#0B7AFF" />
                <Typography
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Expenses report flow without advance payment
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#274EF4" />
                <Typography
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Setup of approval flow.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#4A27F4" />
                <Typography
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Types of expenditure master file, setup according to different
                  VAT %
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#8721F4" />
                <Typography
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Supplier master file and creation of new suppliers
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#B722D1" />
                <Typography
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Access restricted to certain type of user
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems={"center"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            py: {
              xs: 0,
              sm: 0,
              md: 10,
              lg: 10,
            },
            pb: {
              xs: 10,
              sm: 10,
            },
          }}
        >
          <Grid item xs={12} md={6} alignSelf={"center"}>
            <Grid
              alignContent={"start"}
              container
              direction={"column"}
              sx={{
                paddingLeft: {
                  xs: 1,
                  sm: 1,
                  md: 5,
                  lg: 25,
                },
              }}
            >
              <Typography
                fontWeight={900}
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                  fontSize: { xs: 36, sm: 72 },
                  lineHeight: { xs: "40px", sm: "68px" },
                }}
                fontFamily={"Montserrat"}
                color={"#FFFFFF"}
                textAlign={"left"}
              >
                Reports & Overviews
              </Typography>

              <Stack paddingTop={5} direction="row" spacing={2}>
                <ArrowIcon color="#B722D1" />
                <Typography
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Export in Excel of the list of advance payments and expense
                  statements
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#E038B8" />
                <Typography
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Overview per employee
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#E82394" />
                <Typography
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Analysis by type of expenses / cost center / supplier
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#DD2F5D" />
                <Typography
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Dashboard with document overview
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#0BDDD7" />
                <Typography
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Setup of approval flows
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#00E0F7" />
                <Typography
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                  fontSize={{ xs: "16px", md: "1.5rem" }}
                  lineHeight={{ xs: "24px", sm: "36px" }}
                >
                  Summary of monthly expense statements
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              id={"report"}
              srcSet={IMAGES.report2x}
              src={IMAGES.report}
              class="report-image"
            ></img>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Functionalities;
