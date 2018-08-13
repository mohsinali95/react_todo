import React, { Component } from 'react';
import Top from "./Top";
import Middle from "./Middle";
class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todoItem: [],
            todoText: ''
        }

    }
    changeText(text) {
        this.setState({
            todoText: text.target.value
        })
    }
    
    show() {
        let arr = [...this.state.todoItem];
        let obj = {
            item: this.state.todoText
        }
        arr.push(obj)
        
        this.setState({
            todoText: '',
            todoItem: arr
        })
        
    }

    deleteItem(ind){
        let arr = this.state.todoItem;
        let res = arr.splice(ind,1);

        this.setState({
            todoItem: arr
        })
    }
    editItem(ind,text){
        let arr = this.state.todoItem;
        arr[ind].item = text
        this.setState()
    }
    render() {
        return (
            <div className="main-div">
                {/* <Top clickHandle={this.show.bind(this)} handleChange={this.changeText.bind(this)} /> */}
                <div className="col-md-12 pt-5 pb-5 top-color">
                    <div className="container ">
                        <div className="row" >
                            <div className="col-sm-2 text-light text-center">
                                <label className="col-12" htmlFor="" >Enter Item:</label>
                            </div>
                            <div className="col-md-4 text-center">
                                <input className="col-12" type="text" value={this.state.todoText}  onChange={this.changeText.bind(this)}  />
                            </div>
                            <div className="col-md-4 text-center">
                                <button className="btn btn-primary float-left" onClick={this.show.bind(this)} >Enter Item</button>
                            </div>
                        </div>
                    </div>
                </div>

                   <Middle deleteItem={this.deleteItem.bind(this)} text={this.state.todoItem} editItem={this.editItem.bind(this)} />
            </div>
        )
    }
}

export default Counter;