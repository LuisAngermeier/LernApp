import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Contact = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom sx={{ marginTop: 4 }}>
                Kontakt
            </Typography>
            <Typography variant="body1" paragraph>
                Willkommen auf unserer Kontaktseite. Hier können Sie unsere GitHub-Profile und die Repositories des Projekts finden:
            </Typography>
            <Typography variant="body1">
                <Link href="https://github.com/LuisAngermeier" target="_blank" rel="noopener" color="inherit">
                    Luis Mathias Johannes Angermeier
                </Link>
            </Typography>
            <Typography variant="body1">
                <Link href="https://github.com/Nils13141" target="_blank" rel="noopener" color="inherit">
                    Nils Hornitschek
                </Link>
            </Typography>
            <Typography variant="body1">
                <Link href="https://github.com/stefan-iu" target="_blank" rel="noopener" color="inherit">
                    Stefan Arbutina
                </Link>
            </Typography>
            <Typography variant="body1">
                <Link href="https://github.com/MrLordVoldemort" target="_blank" rel="noopener" color="inherit">
                    Jose Chacin
                </Link>
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
                Projekt Repositories
            </Typography>
            <Typography variant="body1">
                <Link href="https://github.com/LuisAngermeier/Lernplattform_Gruppe6" target="_blank" rel="noopener" color="inherit">
                    Lernplattform Gruppe 6
                </Link>
            </Typography>
            <Typography variant="body1">
                <Link href="https://github.com/LuisAngermeier/LernApp" target="_blank" rel="noopener" color="inherit">
                    LernApp
                </Link>
            </Typography>
        </Container>
    );
};

export default Contact;
