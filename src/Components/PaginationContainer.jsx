import React from 'react'
import Pagination from "material-ui-flat-pagination";

class PaginationContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            offset: 0,
            parPage: 10,
        }
        this.handleClickPagination = this.handleClickPagination.bind(this)
    }

    handleClickPagination = offset => {
        //this.setState({ offset })
        console.log(`offset:${offset}`)
        this.setState({ offset })
        let nextPage
        if (offset == 0){
            nextPage = 1
        }else{
            nextPage = offset / this.state.parPage + 1
        }
        this.props.getNextPage(nextPage)
    }

    render(){
        return(
            <div>
                <Pagination
                    limit={this.state.parPage}
                    offset={this.state.offset}
                    total={this.props.totalData}
                    onClick={(e, offset) => this.handleClickPagination(offset)}
                />
            </div>
        )
    }
}

export default PaginationContainer