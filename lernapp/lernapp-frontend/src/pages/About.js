import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom sx={{ marginTop: 4, marginBottom: 4 }}>
                Über uns
            </Typography>
            <Typography variant="body1" paragraph>
                Wir sind ein Team von vier Studierenden der Internationalen Hochschule, bestehend aus Luis Angermeier, Jose Chacin, Nils Hornitschek und Stefan Arbutina.
                Gemeinsam studieren wir den Kurs "Programmierung von Web-Anwendungen". Unser Ziel ist es, innovative und effiziente Webanwendungen zu entwickeln, die den Bedürfnissen der Nutzer gerecht werden.
            </Typography>
            <Typography variant="body1">
                Mit einer Leidenschaft für Technologie und einem starken Fokus auf praktische Anwendungen sind wir bestrebt, unser Wissen kontinuierlich zu erweitern und unsere Fähigkeiten in der Webentwicklung zu vertiefen.
                Wir freuen uns darauf, unsere Kenntnisse in die Praxis umzusetzen und freuen uns, dass Sie mehr über uns erfahren möchten.
            </Typography>
        </Container>
    );
};

export default About;
