import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                LernApp
                            </Link>
                        </Typography>
                        {isMobile ? (
                            <>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} style={{ marginLeft: 'auto' }}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor="right" open={open} onClose={toggleDrawer}>
                                    <List>
                                        <ListItem button onClick={toggleDrawer} component={Link} to="/">
                                            <ListItemText primary="Home" />
                                        </ListItem>
                                        <ListItem button onClick={toggleDrawer} component={Link} to="/contact">
                                            <ListItemText primary="Contact" />
                                        </ListItem>
                                        <ListItem button onClick={toggleDrawer} component={Link} to="/about">
                                            <ListItemText primary="About Us" />
                                        </ListItem>
                                    </List>
                                </Drawer>
                            </>
                        ) : (
                            <div style={{ marginLeft: 'auto' }}>
                                <List style={{ display: 'flex', flexDirection: 'row' }}>
                                    <ListItem button component={Link} to="/" style={{ color: 'white' }}>
                                        <ListItemText primary="Home" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/contact" style={{ color: 'white' }}>
                                        <ListItemText primary="Contact" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/about" style={{ color: 'white' }}>
                                        <ListItemText primary="About Us" />
                                    </ListItem>
                                </List>
                            </div>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;
