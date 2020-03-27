import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root:{
        //position: 'relative',
        width: '100%',
        //marginRight: 'auto',
        //marginLeft : 'auto',
        display: 'flex',
        //flexDirection: 'row',
        flexwrap: 'nowrap',
    },
    box_image:{
        //position: 'relative',
        width: '5%',

    },
    box_id:{
        //position: 'relative',
        //width: '45%',
        minheight: '20px',
    },
    box_created:{
        //width: '45%',
        minheight: '20px',
    },
    box_post:{
        width: 'auto',
        //width: '500px',
        //minheight: '20px',
        //position: 'relative',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
    },
    tweet_data: {
        width: '95%',
        flex: '1',
    },
    user_info:{
        width: '95%',
        //position: 'relative',
        display: 'flex',
        //flexDirection: 'row',
        flexwrap: 'nowrap',
    },
    typography: {
        //position: 'relative',
        textAlign: 'left',
    }

})

class ViewPost extends React.Component{
    constructor(props){
        super(props);
    }

    render ()  {
        const {classes} = this.props;
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
                                <a  href={"/user/" + this.props.data.user_id}>
                                    {this.props.data.user_name}
                                </a>
                            </Typography>
                        </Box>
                        <Box className={classes.box_created}>
                            <Typography className={classes.typography}>{this.props.data.created_at}</Typography>
                        </Box>
                    </div>
                    <Box className={classes.box_post}>
                        <Link to={"tweet/" + this.props.data.id}>
                            <Typography className={classes.typography}>{this.props.data.post}</Typography>
                        </Link>
                        
                    </Box>
                </div>
                                
            </Box>
        )
    }
}

export default withStyles(styles)(ViewPost);