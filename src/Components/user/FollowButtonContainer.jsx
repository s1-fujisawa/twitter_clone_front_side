import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button:{
        variant: "outlined",
        color: "primary",
    }
})

class FollowButtonContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit_createFollow = this.handleSubmit_createFollow.bind(this)
        this.handleSubmit_removeFollow = this.handleSubmit_removeFollow.bind(this)
    }

    handleSubmit_createFollow(e){
        this.props.createFollow(this.props.user_info.id)
        
    }

    handleSubmit_removeFollow(e){
        console.log(this.props.follow)
        let follow_id = this.props.follow.findIndex(({follow_user_id}) => 
            follow_user_id === this.props.user_info.id)
        this.props.removeFollow(this.props.follow[follow_id].id)
    }

    
    render(){
        const {classes, user_info, follow} = this.props;
        let continer
        if(follow.findIndex(({follow_user_id}) => follow_user_id === user_info.id) < 0)
        {
            continer = <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit_createFollow}>フォローする</Button>
        }else{
            continer = <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit_removeFollow}>フォロー外す</Button>
        }

        return(
            <div>
                {continer}
            </div>
        )
    }
}

export default withStyles(styles)(FollowButtonContainer)
