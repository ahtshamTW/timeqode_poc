import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";

const benefits = [
  {
    title: "Cloud infrastructure",
  },
  {
    title: "Database size limit",
    value: "5GB",
  },
  {
    title: "Cloud infrastructure uptime",
    value: "99.90%",
  },
  {
    title: "ERP Integration",
    value: "Optional",
  },
  {
    title: "Onboarding (for yearly payment)",
  },
  {
    title: "Solution Maintenance (new versions, bug-fixing)",
  },
  {
    title: "Online Support",
    value: "8x5",
  },
];

const tiers = [
  {
    title: "STANDARD",
    color: "#274EF4",
    price: { monthly: "€12", yearly: "€10" },
    users: "10-15",
  },
  {
    title: "PROFESSIONAL",
    color: "#8721F4",
    price: { monthly: "€10", yearly: "€8" },
    users: "51-100",
  },
  {
    title: "Enterprise",
    color: "#DD2F5D",
    users: "100+",
  },
];

export const Pricing = () => {
  const [option, setOption] = useState("monthly");

  return (
    <Box
      bgcolor={"white"}
      sx={{
        width: "100%",
        height: "auto",
        marginTop: { xs: "64px", sm: "148px" },
      }}
    >
      <Container maxWidth="xl">
        <Grid md={10} direction="column">
          <Grid item>
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
              color={"#2D4156"}
              textAlign={"left"}
            >
              Pricing
            </Typography>
          </Grid>
          <Grid direction={"column"} container paddingTop={10} rowSpacing={5}>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
                fontSize: { xs: "16px" },
              }}
              fontFamily={"Montserrat"}
              color={"#0F3131"}
              textAlign={"left"}
            >
              Minimum 10 users required.
            </Typography>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
                fontSize: { xs: "16px" },
              }}
              fontFamily={"Montserrat"}
              color={"#0F3131"}
              textAlign={"left"}
            >
              On-premises deployment option available upon request.
            </Typography>
          </Grid>
          <Grid direction={"column"} container rowSpacing={5}>
            <Grid item>
              <Stack
                py={3}
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "left",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontFamily={"Montserrat"}
                  color={option == "monthly" ? "#209DE7" : "#2D4156"}
                >
                  Monthly
                </Typography>
                <AntSwitch
                  checked={option === "yearly"}
                  onChange={() => {
                    setOption(option === "monthly" ? "yearly" : "monthly");
                  }}
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography
                  variant="h6"
                  fontFamily={"Montserrat"}
                  color={option == "yearly" ? "#209DE7" : "#2D4156"}
                >
                  Yearly
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          pt="10"
          container
          spacing={{
            xs: "48px",
            sm: "48px",
            md: 10,
          }}
        >
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} md={4}>
              <Card
                sx={{
                  border: 1,
                  borderColor: "#274EF4",
                  boxShadow: 3,
                  borderRadius: 4,
                }}
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)",
                }}
              >
                <CardContent>
                  <Box p={2}>
                    <Typography
                      sx={{
                        color: tier.color,
                      }}
                      variant="body1"
                      fontFamily={"Montserrat"}
                      fontWeight={"900"}
                    >
                      {tier.title}
                    </Typography>

                    {tier.price ? (
                      <Grid container>
                        <Typography
                          variant="h4"
                          fontFamily={"Montserrat"}
                          fontWeight={"900"}
                          sx={{
                            pr: 1,
                          }}
                        >
                          {tier.price[option]}
                        </Typography>
                        <Typography
                          alignSelf={"flex-end"}
                          variant="body2"
                          fontFamily={"Montserrat"}
                        >
                          user/month
                        </Typography>
                      </Grid>
                    ) : (
                      <Typography
                        variant="h4"
                        fontFamily={"Montserrat"}
                        fontWeight={"900"}
                      >
                        Custom
                      </Typography>
                    )}
                    <Typography variant="body2" fontFamily={"Montserrat"}>
                      {`${tier.users}`} end users
                    </Typography>
                  </Box>

                  <List
                    sx={{
                      width: "100%",
                    }}
                  >
                    {benefits.map((item, index) => (
                      <ListItem
                        key={index}
                        secondaryAction={
                          !item?.value ? (
                            <CheckIcon
                              style={{
                                color: "#0CB460",
                              }}
                            />
                          ) : (
                            <Typography
                              color={"#2D4156"}
                              fontFamily={"Montserrat"}
                              variant="body2"
                            >
                              {item.value}
                            </Typography>
                          )
                        }
                      >
                        <ListItemText
                          primaryTypographyProps={{
                            color: "#2D4156",
                            fontFamily: "Montserrat",
                            variant: "body2",
                          }}
                          primary={item.title}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 30,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 60,
      backgroundColor: "rgba(0,0,0,.25)",
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 3,
    "&.Mui-checked": {
      transform: "translateX(40px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "white",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "1 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 24,
    height: 24,
    borderRadius: 8,
    color: "#1488E4",
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 10,
    opacity: 1,
    backgroundColor: "white",
    boxSizing: "border-box",
    border: "solid #7C7C7C 1px",
  },
}));
