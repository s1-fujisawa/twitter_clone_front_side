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
import { Link } from 'react-router-dom';
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

class Edit extends React.Component{
    constructor(props){
        super(props);
        const {me} = this.props;
        this.state = {
            nickname:me.me.user.nickname,
            name: me.me.user.name,
            email: me.me.user.email,
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
        const {  name, nickname, email, password, password_confirmation} = this.state;
        if(nickname && name && email) {
            this.props.edit( name, nickname, email, password, password_confirmation);
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
                            <InputLabel htmlFor="account_id">ユーザーID</InputLabel>
                            <Input
                                id="name"
                                name="name"
                                value={this.state.name}
                                autoFacus
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">ユーザー名</InputLabel>
                            <Input
                                id="nickname"
                                name="nickname"
                                value={this.state.nickname}
                                autoFacus
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="emial">メールアドレス</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                value={this.state.email}
                                autoFacus
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
                    <Link to={"/user/chagePassword"}>パスワード変更</Link>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Edit);