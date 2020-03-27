import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';
import ViewUserInfo from './ViewUserInfo'

const styles = theme => ({
    box:{
        position: 'relative',
        width: '100%',
        marginRight : 'auto',
        marginLeft  : 'auto',
    },

})

class UsersContainer extends React.Component{

    constructor(props){
        super(props)
    }

    render (){
        const {classes,follow, me} = this.props;
        return(
            <Box className={classes.box}
                border={1}
                borderColor="grey.500">
                {this.props.users.map((data) =>{
                    return(
                        <div>
                            <ViewUserInfo 
                                data={ data } 
                                key={data.id} 
                                follow={follow}
                                me={me}
                                createFollow={this.props.createFollow}
                                removeFollow={this.props.removeFollow}/>
                        </div>
                    )
                })}
            </Box>
        )
    }
}

export default withStyles(styles)(UsersContainer);