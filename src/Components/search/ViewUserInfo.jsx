import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FollowButtonContainer from '../user/FollowButtonContainer'

const styles = theme => ({
    root:{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexwrap: 'nowrap',
    },
    box_image:{
        position: 'relative',
        width: '20%',
    },
    user_info:{
        position: 'relative',
        width: '50%',
    },
    user_box_name:{
        position: 'relative',
        width: '100%',
    },
    user_box_nickname:{
        position: 'relative',
        width: '100%',
    },
    box_follow:{
        position: 'relative',
        width: '30%',
    },
    typography: {
        position: 'relative',
        textAlign: 'left',
    }
})

class ViewUserInfo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes, me} = this.props;
        let edit_or_followButton
        if(me.me.user.id !== this.props.data.id){
            edit_or_followButton = <FollowButtonContainer
                user_info={this.props.data}
                follow={this.props.follow}
                createFollow={this.props.createFollow}
                removeFollow={this.props.removeFollow}/>
        }else{
            edit_or_followButton = 
                <Link to={"/user/edit"}>
                    <Button
                    variant="contained"
                    color="primary">
                        編集
                    </Button>
                </Link>
        }

        return(
            <div>
                 <Box className={classes.root}
                    border={1}
                    borderColor="grey.500">
                    <Box className={classes.box_image}
                            borderRight={1}>
                            <span  className={classes.post}>画像</span>
                    </Box>
                    <Box className={classes.user_info}
                        borderRight={1}>
                    <Box className={classes.box_name}>
                        <Typography className={classes.typography}>
                            <a href={"/user/" + this.props.data.id} >{this.props.data.name}</a>
                        </Typography>
                    </Box>
                    <Box className={classes.box_nickname}>
                        <Typography className={classes.typography}>{this.props.data.nickname}</Typography>
                    </Box>
                </Box>
                <Box className={classes.box_follow}>
                    {edit_or_followButton}
                </Box>
            </Box>
            </div>
        )
    }
}

export default withStyles(styles)(ViewUserInfo)