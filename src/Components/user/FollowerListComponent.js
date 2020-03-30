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

class FollowerList extends React.Component{
    constructor(props){
        super(props)
        this.props.onMount(this.props.match.params.id, 1);
    }

    getNextPage(nextPage){
        this.props.getFollower(this.props.match.params.id, nextPage)
    }

    render() {
        const { follower, follow, classes, me } = this.props;
        console.log(follower)
        let resultCon;
        let pagination;
        if (follower.loading == false){
            resultCon = <UsersContainer 
            users={ follower.followerUser }  
            follow={follow.follow}
            me={me}
            createFollow={this.props.createFollow}
            removeFollow={this.props.removeFollow}/>
            pagination = <PaginationContainer 
                getNextPage={this.getNextPage} 
                totalData={follower.totalUsers}/>
        }
        return(
            <div className={classes.root}>
            <CssBaseline />
            <Header menu="フォロワー" me={me}/>
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

export default withStyles(styles, { withTheme: true })(FollowerList)