import React from 'react'
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {layoutConstants} from '../constants/layout.constants';
import {　logoutAndRedirect } from "../Actions/auth.actions"

const styles = theme => ({

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: layoutConstants.DRAWER_WIDTH,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: layoutConstants.DRAWER_WIDTH,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
})

class SideBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            mobileOpen: false,
          };
    }

    logOut = () => {
        console.log("test")
        this.props.logOut();
    }
    
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render(){
        const { classes, theme, me } = this.props;
        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <Link to={"/main"}>
                        <ListItem button>
                            <ListItemText primary="ホーム" />
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link to={"/user/" + me.me.user.id}>
                        <ListItem button>
                            <ListItemText primary="プロフィール" />
                        </ListItem>
                    </Link>
                </List>
                <List>
                    <Link onClick={this.logOut}>
                        <ListItem button>
                            <ListItemText primary="ログアウト" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        )

        return(
            <nav className={classes.drawer}>
                <Hidden smUp  implementation="css">
                    <Drawer
                        container={this.props.container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                    >
                    {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        )
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired
  };

export default withStyles(styles, { withTheme: true })(SideBar);