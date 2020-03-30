import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import reducers from '../reducers'
import TweetContainer from "./tweet/TweetContainer"
import PostsContainer from "./tweet/PostsContainer"
import { createTweets } from "../Actions/tweet.actions"
import SearchUserForm from "./search/SearchUserForm"
import Header from "./Header"
import SideBar from "./SideBar"
import { withStyles } from '@material-ui/core/styles';
import {layoutConstants} from '../constants/layout.constants';
import PaginationContainer from './PaginationContainer'

const  styles  = theme => ({
    root: {
        //width: 'auto',
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
});


class Main extends React.Component{



    constructor(props){
        super(props);
        this.props.onMount(1);
    }



    render(){
        const { me ,tweet, classes} = this.props;
        let PostsCon
        if (tweet.loading == false){
            if(tweet.postdata.length > 0){
                PostsCon = <PostsContainer postdata={ tweet.postdata } />
            }
        }
        
        return(
            <div className={classes.root}>
                <CssBaseline />
                <Header me={me} menu="ホーム"/>
                <SideBar logOut={this.props.logOut} me={this.props.me}/>
                <main className={classes.main_content}>
                    <div className={classes.toolbar} />
                    <SearchUserForm />
                    <TweetContainer tweetPost={this.props.createTweets}/>
                    {PostsCon}
                    <PaginationContainer getNextPage={this.props.getTweets} totalData={tweet.totalTweets}/>
                </main>
            </div>        
        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true })(Main);