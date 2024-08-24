// src/pages/Home.js

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material'; // Ensure Button is imported
import { Link } from 'react-router-dom';

const Home = () => {
    const subjects = ["Mathe", "Deutsch", "Physik", "Biologie"]; // Example subjects

    return (
        <Container>
            <Typography variant="h2" gutterBottom align="center">
                LernApp
            </Typography>
            <Grid container spacing={3}>
                {subjects.map((subject) => (
                    <Grid item xs={12} sm={6} md={3} key={subject}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {subject}
                                </Typography>
                                <Link to={`/posts/${subject}`} style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" color="primary">
                                        View Posts
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
