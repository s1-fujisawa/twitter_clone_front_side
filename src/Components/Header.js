import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {layoutConstants} from '../constants/layout.constants'
import { withStyles } from '@material-ui/core/styles'
import SideMenu from './SideMenuContainer'
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

class header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      left: false
    };
  }

  toggleDrawer = (side, open) => () =>{
    this.setState({
      [side]: open
    })
  }

  render(){
  const { classes, me } = this.props;
    return (
        <AppBar position="fixed"  className={classes.appBar}>
            <Toolbar >
            <   IconButton className={classes.menuButton} 
                color="inherit" 
                aria-label="Menu" 
                onClick={this.toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left',false)}
                    onKeyDown={this.toggleDrawer('left',false)}
                  >
                    <SideMenu me={me} />
                  </div>
                </Drawer>
                <Typography variant="h6" color="inherit" noWrap>
                        ツイッタークローン
                </Typography>
            </Toolbar>
        </AppBar>
    )
  }
}

header.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true })(header);