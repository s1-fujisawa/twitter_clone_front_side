import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    root:{
        width: '100%',
        display: 'flex',
        flexwrap: 'nowrap',
    },
    box_image:{
        width: '5%',

    },
    box_id:{
        minheight: '20px',
    },
    box_created:{
        minheight: '20px',
    },
    box_post:{
        width: 'auto',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
    },
    tweet_data: {
        width: '95%',
        flex: '1',
    },
    user_info:{
        width: '95%',
        //display: 'flex',
        flexwrap: 'nowrap',
    },
    typography: {
        textAlign: 'left',
    }

})

class TweetInfo extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        this.props.removeTweet(this.props.postdata.id)
    }

    render ()  {
        const {classes, postdata, me} = this.props;
        let removeButton;

        if(me.me.user.id == postdata.user_id){
            removeButton  = 
                <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}>
                    削除
                </Button>
        }

        return(
            <Box className={classes.root}
                border={1}
                borderColor="grey.500">
                <Box className={classes.box_image}
                        borderRight={1}>
                        <span  className={classes.post}>画像</span>
                </Box>
                <div className={classes.tweet_data}>
                    <div className={classes.user_info}>
                        <Box className={classes.box_id}>
                            <Typography className={classes.typography}>
                                <a  href={"/user/" + postdata.user_id}>
                                    {postdata.user_name}
                                </a>
                            </Typography>
                        </Box>
                    </div>
                    <Box className={classes.box_post}>
                        <Link to={"tweet/" + postdata.id}>
                            <Typography className={classes.typography}>{postdata.post}</Typography>
                        </Link>
                        
                    </Box>
                    <div className={classes.user_info}>
                        <Box className={classes.box_created}>
                            <Typography className={classes.typography}>{postdata.created_at}</Typography>
                        </Box>
                    </div>
                    {removeButton}
                </div>                               
            </Box>
        )
    }
}

export default withStyles(styles, { withTheme: true })(TweetInfo)