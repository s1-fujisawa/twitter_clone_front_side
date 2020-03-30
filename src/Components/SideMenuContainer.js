import React from 'react'
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    toolbar: theme.mixins.toolbar,

})

class SideMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { classes, me } = this.props;
        return(
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
    }
}

SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired
  };

export default withStyles(styles, { withTheme: true })(SideMenu);