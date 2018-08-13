import React, { Component } from "react";


class Middle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: null,
            editText: ''
        }
    }
    handleDelete(ind) {
        this.props.deleteItem(ind);
    }

    changeEdit(event){
        this.setState({
            editText: event.target.value
        })
    }
    changetext(ind,text){
        if(this.state.editText != ''){
            this.props.editItem(ind,text)
            this.setState({
                edit: null,
                editText: ''
            })
        }else{
            this.setState({
                edit: null,

            })
        }
        

    }
    render() {
        return (
            <div>
                {(this.props.text.length > 0) ?
                    <div className="lists-part">
                        {this.props.text.map((val, ind) => {
                            return (
                                <div key={ind} className="container">

                                    <div className="row">
                                        <div className="col-md-12 mt-2 box">
                                            {(this.state.edit == ind) ?
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <input type="text" className="col-sm-12"  onChange={this.changeEdit.bind(this)} />
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <button className="btn btn-info float-right" onClick={this.changetext.bind(this,ind,this.state.editText)} >Apply</button>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <button className="btn btn-danger" onClick={()  => {this.setState({edit: null})}}>Cancel</button>
                                                    </div>
                                                </div>
                                                :
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <p>{(1+ind)}) {val.item}</p>
                                                    </div>
                                                    <div className="col-sm-2 ">
                                                        <button className="btn btn-info float-right" onClick={() => { this.setState({ edit: ind }) }}>Edit</button>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <button className="btn btn-danger" onClick={this.handleDelete.bind(this, ind)}>Delete</button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    :
                    <p>No Item</p>
                }


            </div>
        )
    }
}

export default Middle