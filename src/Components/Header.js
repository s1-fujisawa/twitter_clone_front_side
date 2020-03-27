import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {layoutConstants} from '../constants/layout.constants'

import { withStyles } from '@material-ui/core/styles'

const  styles = theme => ({

    appBar: {
        marginLeft: layoutConstants.DRAWER_WIDTH,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${layoutConstants.DRAWER_WIDTH}px)`,
        },
      },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
});

function header(props){
    const { classes } =props;
    return (
        <AppBar position="fixed"  className={classes.appBar}>
            <Toolbar >
                <IconButton  
                    color="inherit" 
                    aria-label="Open drawer"
                    className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                        ツイッタークローン
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

header.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true })(header);