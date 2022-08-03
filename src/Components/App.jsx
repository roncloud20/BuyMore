import React, { Component } from "react";
import CardList from './CardList';
import {student} from '../student';
import Header from "./Header";
import VerticalScroll from "./VerticalScroll";

class App extends Component {
    constructor() {
        super()
        this.state = {
            students : student,
            searchField: ''
        }
        console.log("this is constructor")
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(users =>{
            return this.setState({students:users})
        })
        console.log('This is conponentDidMount')
    }
    onSearchChange = (event) => {
        return this.setState({searchField: event.target.value})

    }
    render(){
        const filteredstudents = this.state.students.filter((stud) =>{
            return (stud.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        })
        console.log(" this is render");
        return(
            <div className="app">
                <h1>Welcome to Buy More</h1>
                <Header searchChange={this.onSearchChange} />
                <VerticalScroll>
                    <CardList students={filteredstudents} />
                </VerticalScroll>
            </div>
        )
    }
}

export default App;