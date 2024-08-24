// src/components/Footer.js

import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <Container>
                <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} LernApp. All rights reserved.
                </Typography>
                <Typography variant="body2" align="center">
                    <Link href="/contact" color="inherit">Contact</Link> |{' '}
                    <Link href="/about" color="inherit">About Us</Link>
                </Typography>
            </Container>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '20px 0',
        backgroundColor: '#f5f5f5',
        marginTop: 'auto',
        borderTop: '1px solid #e0e0e0',
    },
};

export default Footer;
