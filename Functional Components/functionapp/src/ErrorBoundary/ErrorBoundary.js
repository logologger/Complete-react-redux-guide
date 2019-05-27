import React , {Component}  from 'react';


class ErrorBoundary extends Component {

    state = {
        hasError : false, 
        errorMessage : ''
    }

    componentDidCatch = (error , info) => {
        this.setState({hasError:true, errorMessage:error});
    }

    render( ) {

        if(this.state.hasError) {
            return (<h1>{this.state.errorMessage.toString()}</h1>)
        }
        else {
        return (
             <span> {this.props.children}</span>
        )
        }
    }
}

export default ErrorBoundary;