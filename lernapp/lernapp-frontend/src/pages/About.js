import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1">
                Welcome to the About Us page. Here you can provide information about your application or team.
            </Typography>
        </Container>
    );
};

export default About;
