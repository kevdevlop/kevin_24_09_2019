import React, {Component} from 'react'

class AjaxRequest extends Component{
    state={
        data: ""
    }
    componentDidMount(){
        this.get_request()
    }
    get_request(){
        fetch("/data.json")
        .then(res => {
            res.json().then(result => {
                let data = result.data.map(element => {
                    return (
                        <div>
                            <h3>Item no. {element.id}</h3>
                            <h5>Address</h5>
                            <p>Street: {element.info.address.street}</p>
                            <p>Number: {element.info.address.number}</p>
                            <hr/>
                        </div>
                    )
                });
                this.setState({data})
            })
            
        })
        .catch(error => {
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