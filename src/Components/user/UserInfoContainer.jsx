import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FollowButtonContainer from './FollowButtonContainer'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { layoutConstants } from '../../constants/layout.constants'

const styles = theme => ({
    root:{
        position: 'relative',
        width: '100%',
        marginRight: 'auto',
        marginLeft : 'auto',
    },
    upper_part:{
        position: 'relative',
        width: '100%',
        display: 'flex',
        //flexDirection: 'row',
        flexwrap: 'nowrap',
    },
    box_image:{
        position: 'relative',
        width: '100pt',
    },
    box_follow:{
        position: 'relative',
        //marginRight: 'auto',
        marginLeft : 'auto',
        width: '20%',
    },
    box_id:{
        position: 'relative',
        //width: '45%',
        minheight: '20px',
    },
    box_created:{
        //width: '45%',
        minheight: '20px',
    },
    lower_part: {
        width: '100%',
        flex: '1',
    },

    typography: {
        position: 'relative',
        textAlign: 'left',
    }

})

class UserInfoContainer extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {classes , userInfo, me} = this.props;

        let edit_or_followButton
        if(me.me.user.id !== userInfo.id){
            edit_or_followButton = <FollowButtonContainer
                user_info={userInfo}
                follow={this.props.follow}
                createFollow={this.props.createFollow}
                removeFollow={this.props.removeFollow}/>
        }else{
            edit_or_followButton = <Link to={"/user/edit"}>
                    <Button
                    variant="contained"
                    color="primary">
                        編集
                    </Button>
                </Link>
        }
        return(
            <div className={classes.root}>
                <Box className={classes.upper_part}
                    border={1}
                    borderColor="grey.500">
                    <Box className={classes.box_image}
                            borderRight={1}>
                            <span>画像</span>
                            
                    </Box>

                    <Box className={classes.box_follow}
                    borderRight={1}>
                        {edit_or_followButton}
                    </Box>
                                                    
                </Box>
                                    
                <Box className={classes.lower_part}
                border={1}
                borderColor="grey.500">
                    <Box className={classes.box_id}>
                        <Typography className={classes.typography}>{userInfo.name}</Typography>
                    </Box>
                    <Box className={classes.box_created}>
                        <Typography className={classes.typography}>{userInfo.nickname}</Typography>
                    </Box>
                </Box>
            </div>

        )
    }
}

export default withStyles(styles)(UserInfoContainer)