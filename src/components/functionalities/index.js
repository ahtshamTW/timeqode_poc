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
      }}
    >
      <Container class="overlay" maxWidth="100%" disableGutters>
        <Grid container py={10}>
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
            <Grid alignContent={"start"} container direction={"column"}>
              <Typography
                fontWeight={900}
                variant="h3"
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
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
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Advance payment request flow.
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#00E0F7" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Expenses report flow with advance payment
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#0B7AFF" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Expenses report flow without advance payment
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#274EF4" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Setup of approval flow.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#4A27F4" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Types of expenditure master file, setup according to different
                  VAT %
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#8721F4" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Supplier master file and creation of new suppliers
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#B722D1" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
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
              paddingLeft={20}
              direction={"column"}
              sx={{
                paddingLeft: {
                  xs: 0,
                  sm: 0,
                  md: 20,
                  lg: 20,
                },
              }}
            >
              <Typography
                fontWeight={900}
                variant="h3"
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                  // typography: {
                  //   xs: "h3",
                  // },
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
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Export in Excel of the list of advance payments and expense
                  statements
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#E038B8" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Overview per employee
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#E82394" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Analysis by type of expenses / cost center / supplier
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#DD2F5D" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Dashboard with document overview
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#0BDDD7" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
                >
                  Setup of approval flows
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <ArrowIcon color="#00E0F7" />
                <Typography
                  variant="body1"
                  fontFamily={"Montserrat"}
                  color={"#FFFFFF"}
                  textAlign={"left"}
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
