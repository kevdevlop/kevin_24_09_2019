import React, {Component} from 'react'

class AjaxRequest extends Component{
    state={
        data: undefined
    }
    componentDidMount(){
        this.get_request()
    }
    get_request(){
        fetch("https://www.reddit.com/r/all.json").then((result) => {
            this.setState({data: "Success response"})
        }).catch(error => {
            this.setState({data: "Error in request"})
        })
    }
    render(){
        return(
            <div>
                {this.state.data}
            </div>
        )
    }
}

export default AjaxRequest