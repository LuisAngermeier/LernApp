// src/components/Footer.js

/*import React from 'react';
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
};*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faReddit, faTelegram, faSnapchat, faGoogle, faXTwitter, faYoutube, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 LernApp, Inc. All rights reserved.</p>
      <div className="social-icons">
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/LuisAngermeier/LernApp" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faReddit} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faWikipediaW} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

