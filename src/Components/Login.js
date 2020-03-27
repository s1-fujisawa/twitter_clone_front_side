import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './Header';

const styles = theme => ({
    layout: {
      width: 'auto',
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    alert: {
      color: 'red',
      fontSize: 14
    }
  });
  

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    
    handleSubmit(e){
        e.preventDefault();
        const { email, password} = this.state;
        if(email && password) {
            this.props.login(email,password);
        }
    }

    render(){
        const { classes,me } = this.props;
        console.log(me);
        return(
            <React.Fragment>
                <Header menu="ログイン"/>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avater}>
                            <LockIcon />
                        </Avatar>
                        <Typography variant="subtitle1">ログイン</Typography>
                        {this.props.error?
                            <p className={classes.alert}>ユーザ名またはパスワードが正しくありません</p>
                            : ''
                        }
                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email" >メールアドレス</InputLabel>
                                <Input 
                                    id="email" 
                                    name="email"
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                                
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">パスワード</InputLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                ></Input>
                            </FormControl>
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}>
                                    ログイン
                            </Button>
                        </form>
                    </Paper>
                    <Button href="/signup">新規登録</Button>
                </main>
            </React.Fragment>

        )
    }

}

export default withStyles(styles)(Login);