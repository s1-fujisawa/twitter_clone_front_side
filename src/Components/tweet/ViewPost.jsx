import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { layoutConstants } from '../../constants/layout.constants'

const styles = theme => ({
    root:{
        display: 'flex',
    },
    box_image:{
        width: layoutConstants.ICON_SIZE_WIDTH + 'px'

    },
    box_id:{
        minheight: '20px',
    },
    box_created:{
        minheight: '20px',
    },
    box_post:{
        whiteSpace: 'normal',
    },
    tweet_data: {
        width: `calc(100% - ${layoutConstants.ICON_SIZE_WIDTH}px)`,
        flex: '1',
    },
    user_info:{
        width: `calc(100% - ${layoutConstants.ICON_SIZE_WIDTH}px)`,
        display: 'flex',
    },
    typography: {
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