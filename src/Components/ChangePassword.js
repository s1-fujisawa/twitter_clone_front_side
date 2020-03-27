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
    layoyt: {
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
        width: '100%',
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

class ChangePassword extends React.Component{
    constructor(props){
        super(props);
        const {me} = this.props;
        this.state = {
            password: "",
            password_confirmation: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit(e){
        e.preventDefault();
        const {  password, password_confirmation} = this.state;
        if(password, password_confirmation) {
            this.props.changePassword( password, password_confirmation);
        }
    }

    render() {
        const {classes,me} = this.props;
        console.log(me);
        return(
            <React.Fragment>
                <Header menu="ログアウト"/>
                <CssBaseline />
                <main className={classes.layoyt}>
                    <Paper className={classes.paper}>
                        <Typography variant="subtitle1">ユーザー情報更新</Typography>
                        {this.props.error?
                            <p className={classes.alert}>ユーザ登録に失敗しました</p>
                            : ''
                        }
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">パスワード</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password_confirmation">パスワード</InputLabel>
                            <Input
                                name="password_confirmation"
                                type="password"
                                id="password_confirmation"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}>
                            更新
                        </Button>
                    </form>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ChangePassword);