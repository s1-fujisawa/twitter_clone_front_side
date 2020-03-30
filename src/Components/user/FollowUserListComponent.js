import React from "react"
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "../Header"
import SideBar from "../SideBar"
import UsersContainer from "../search/UsersContainer";
import { withStyles } from '@material-ui/core/styles';
import {layoutConstants} from '../../constants/layout.constants';
import PaginationContainer from '../PaginationContainer'

const styles = theme => ({
    root: {
        display: 'flex',
      },

    main_content: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${layoutConstants.DRAWER_WIDTH}px)`,
        },
        display: 'block',
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
    toolbar: theme.mixins.toolbar,
})

class FollowUserList extends React.Component{
    constructor(props){
        super(props)
        this.props.onMount(this.props.match.params.id,1);
    }

    getNextPage(nextPage){
        this.props.getFollowUser(this.props.match.params.id,nextPage)
    }

    render() {
        const { followUser, follow, classes, me } = this.props;
        let resultCon;
        let pagination;
        if (followUser.loading == false){
            resultCon = <UsersContainer 
            users={ followUser.followUser }  
            follow={follow.follow}
            me={me}
            createFollow={this.props.createFollow}
            removeFollow={this.props.removeFollow}/>
            pagination = <PaginationContainer 
                getNextPage={this.getNextPage} 
                totalData={followUser.totalUsers}/>
    }
        return(
            <div className={classes.root}>
            <CssBaseline />
            <Header menu="フォロー" me={me}/>
            <SideBar me={me} />
            <main className={classes.main_content}>
                <div className={classes.toolbar} />
                {resultCon}
                {pagination}
            </main>
            
        </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(FollowUserList)