import React from "react";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import UsersContainer from "./UsersContainer";
import SearchUserForm from './SearchUserForm';
import Header from "../Header"
import SideBar from "../SideBar"
import { withStyles } from '@material-ui/core/styles';
import {layoutConstants} from '../../constants/layout.constants';
import PaginationContainer from '../PaginationContainer'

const styles = theme => ({
    root: {
        display: 'flex',
      },

    main_content: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${layoutConstants.DRAWER_WIDTH}px)`,
        },
        display: 'block',
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
    toolbar: theme.mixins.toolbar,
})

class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.props.onMount(this.props.match.params.searchVal, 1);
    }
    
    getNextPage(nextPage){
        this.props.search(this.props.match.params.searchVal, nextPage)
    }

    render(){
        const { result, follow, classes, me } = this.props;
        let resultCon;
        let pagination;
        if (result.loading == false){
                resultCon = <UsersContainer 
                    users={ result.searchdata }  
                    follow={follow.follow}
                    me={me}
                    createFollow={this.props.createFollow}
                    removeFollow={this.props.removeFollow}/>
                pagination = <PaginationContainer 
                    getNextPage={this.getNextPage} 
                    totalData={result.totaldata}/>
        }
        return(
            <div className={classes.root}>
                <CssBaseline />
                <Header menu="検索結果" me={me}/>
                <SideBar me={me}/>
                <main className={classes.main_content}>
                    <div className={classes.toolbar} />
                    <SearchUserForm />
                    {resultCon}
                    {pagination}
                </main>
                
            </div>
        )
    }

}

SearchComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true })(SearchComponent)