import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TweetInfo from './TweetInfo'
import Header from "../Header"
import SideBar from "../SideBar"
import { withStyles } from '@material-ui/core/styles';
import {layoutConstants} from '../../constants/layout.constants';

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

class ShowTweetComponents extends React.Component{
    constructor(props){
        super(props);
        this.props.onMount(this.props.match.params.id);
    }

    render(){
        const {me,classes, tweet} = this.props

        let PostsCon
        console.log(tweet);
        if (tweet.loading == false){
            PostsCon = <TweetInfo postdata={ tweet.postdata[0] } removeTweet={this.props.removeTweet} me={me} />
        }

        return(
            <div className={classes.root}>
                <CssBaseline />
                <Header menu="ツイート内容" me={me}/>
                <SideBar me={me}/>
                <main className={classes.main_content}>
                    <div className={classes.toolbar} />
                    {PostsCon}
                </main>
            </div>
        )
    }    
}

export default withStyles(styles)(ShowTweetComponents)