import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import UserInfoContainer from './user/UserInfoContainer';
import PostsContainer from './tweet/PostsContainer';
import {layoutConstants} from '../constants/layout.constants';
import Header from "./Header";
import SideBar from "./SideBar";
import PaginationContainer from "./PaginationContainer"

const styles = theme => ({
    root: {
        display: 'flex',
      },

    main_content: {
        //width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${layoutConstants.DRAWER_WIDTH}px)`,
        },
        display: 'block',
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
    toolbar: theme.mixins.toolbar,
})

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.props.onMount(this.props.match.params.id);
    }

    getNextPage(nextPage)
    {
        this.props.getUserTweets(this.props.match.params.id,nextPage)
    }

    render(){
        const { me ,tweet,userInfo,follow, classes} = this.props;
        console.log(this.props.userInfo.info);
        let PostsCon;
        let pagination;
        if (tweet.loading == false){
            PostsCon = <PostsContainer postdata={ tweet.postdata } />
            pagination = <PaginationContainer 
                getNextPage={this.getNextPage} 
                totalData={tweet.totalTweets}/>
        }
        return(
            <div className={classes.root}>
                                <CssBaseline />
                <Header menu="ホーム"/>
                <SideBar me={me} />
                <main className={classes.main_content}>
                    <div className={classes.toolbar} />
                    <UserInfoContainer 
                        userInfo={userInfo.info.user} 
                        follow={follow.follow}
                        me={me}
                        createFollow={this.props.createFollow}
                        removeFollow={this.props.removeFollow}/>
                    {PostsCon}
                    {pagination}
                </main>
            </div>
        )
    }
}

UserInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
  };


export default withStyles(styles, { withTheme: true })(UserInfo)