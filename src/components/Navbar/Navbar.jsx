import React from 'react';
import { Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/image1.jpg';
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit" >
                        <img src={logo} alt="Commerce.js" height="60px" className={ classes.image }/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} >
                        <IconButton aria-label="show cart items" color="inherit" >
                            <Badge badgeContent={totalItems} color="secondary" >
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
