import React, { Component } from "react"

class Top extends Component {
    constructor(props){
        super(props)
    }
    textChange(event){
        let text = event.target.value;
        this.props.handleChange(text)
    }
    render() {
        return (
            <div className="col-md-12 pt-5 pb-5 top-color">
                <div className="container ">
                    <div className="row" >
                        <div className="col-md-2 text-light text-center">
                            <label htmlFor="" >Enter Item:</label>
                        </div>
                        <div className="col-md-4 text-center">
                            <input type="text" onChange={this.textChange.bind(this)}  />
                        </div>
                        <div className="col-md-4 text-center">
                            <button className="btn btn-primary" onClick={this.props.clickHandle} >Enter Item</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top;