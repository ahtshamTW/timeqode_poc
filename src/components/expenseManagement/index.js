import { Button, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';

function ExpenseManagement() {
    return (
        <Container disableGutters sx={{zIndex: 1}}>
            <Grid container>
                {/* Left Space */}
                <Grid item xs={12} sm={5}>
                    &nbsp;
                </Grid>
                {/* Right Side */}
                <Grid item xs={12} sm={7} sx={{ mx: { xs: '16px', sm: '0px' } }}>
                    <Typography
                        variant='h3'
                        fontWeight={900}
                        sx={{
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: { xs: 'center', sm: 'flex-start' },
                            marginTop: '64px',
                        }}
                        fontFamily={"Montserrat"}
                        color={"#2D4156"}
                        textAlign={{ xs: "center", sm: "left" }}
                    >
                        <span>Expense</span>
                        <span>Management</span>
                    </Typography>

                    <Typography
                        variant='h3'
                        fontWeight={300}
                        sx={{
                            textAlign: {
                                paddingTop: '24px',
                                textAlign: "left",
                            },
                        }}
                        fontFamily={"Montserrat"}
                        fontSize={{ xs: '20px', sm: '28px' }}
                        color={"#2D4156"}
                    >
                        Expense Management is an easy-to-use, intuitive application that simplifies the entire process of creation and approval of advance payments and expense reports for any company regardless of its size or activity.
                    </Typography>

                    <Button sx={{
                        width: { xs: '356px', sm: '396px' },
                        height: { xs: '39px', sm: '56px' },
                        background: '#1488E4 0% 0% no-repeat padding-box',
                        border: '1px solid #1488E4',
                        textTransform: 'none',
                        fontFamily: 'Montserrat',
                        marginTop: '48px',

                    }} variant="contained">
                        <Typography
                            variant='body2'
                            fontSize={{ xs: '16px', sm: '24px' }}
                            sx={{
                                textAlign: {
                                    xs: "center",
                                    sm: "left",
                                },
                            }}
                            fontFamily={"Montserrat"}
                            color={"#FFFFFF"}
                            textAlign={"center"}
                        >
                            Get in touch
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ExpenseManagement;
