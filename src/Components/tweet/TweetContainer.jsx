import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const styles = theme => ({
    contener:{
        width: '100',
        //marginLeft: drawerWidth,
        //[theme.breakpoints.up('sm')]: {
        //    width: `calc(100% - ${drawerWidth}px)`,
        //},
        //marginRight : 'auto',
        //marginLeft  : 'auto',
    },
    textField: {
        width: '100%',
        //position: 'relative',
        //position: 'absolute',
        //left: 'auto',
        //right: 'auto',
        //top: '0%',
        //left: '0%',
    },
    button: {
        marginTop: '2px',
        //position: 'relative',
        //position: 'absolute',
        marginRight : 'auto',
        //marginLeft  : '0',
        //left: '0',
        //right: 'auto',
    }

})

class TweetContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const{ name, value } = e.target;
        this.setState({ [name]: value }); 
    }

    handleSubmit(e){
        this.props.tweetPost(this.state.post)
        this.setState({post: ''})
    }

    render() {
        const {classes} = this.props;
        
        return(
            <div className={classes.contener}>
                <form>
                    <TextField className={classes.textField}
                    name='post'
                    variant='outlined'
                    multiline
                    rows='4'
                    value={this.state.post}
                    onChange={this.handleChange} />
                    <Button className={classes.button}　variant="contained" color="primary" onClick={this.handleSubmit}>ツイート</Button>
                </form>
            </div>
        )
    }
    
}

export default withStyles(styles)(TweetContainer);