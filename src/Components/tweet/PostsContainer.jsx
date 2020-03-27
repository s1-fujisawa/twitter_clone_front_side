import React from 'react';
import ViewPost from './ViewPost'
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const styles = theme => ({

    box:{
        width: '100%',
        //position: 'relative',
        //marginLeft: drawerWidth,
        //[theme.breakpoints.up('sm')]: {
        //    width: `calc(100% - ${drawerWidth}px)`,
        //},
        //marginRight : 'auto',
        //marginLeft  : 'auto',
    },

})

class PostsContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <Box className={classes.box}
                border={1}
                borderColor="grey.500">
                {this.props.postdata.map((data) =>{
                    return(
                        <div>
                            <ViewPost data={ data } key={data.id} />
                        </div>
                    )
                })}
            </Box>
        )
    }
}

export default  withStyles(styles)(PostsContainer);