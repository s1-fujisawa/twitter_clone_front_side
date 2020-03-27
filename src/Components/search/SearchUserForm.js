import React from "react"
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    contener:{

        width: '100',
        //marginRight : 'auto',
        //marginLeft  : 'auto',
    },
    textField: {
        //width: 'auto',
    }
})

class SearchUserForm extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            searchVal: ""
        }

        this.handleChange  = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e)
    {
        const{ name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        //this.props.tweetPost(this.state.post)
        this.setState({searchVal: ''})
    }

    render() {
        const {classes} = this.props;
        return(
            <dev className={classes.contener}>
                <TextField className={classes.textField}
                    name='searchVal'
                    value={this.state.searchVal}
                    onChange={this.handleChange} />
                <Button className={classes.button}　
                    variant="contained" 
                    color="primary" 
                    href={"/user/search/"+this.state.searchVal}>
                        検索
                </Button>
            </dev>
        )
    }
}


export default withStyles(styles)(SearchUserForm)