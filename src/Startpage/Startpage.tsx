/* eslint-disable react/no-direct-mutation-state */
import Button from '../Button/Button'
import './Startpage.css'
import Dialog from '../Dialog/dialog'
import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Register from '../pages/register'

export default class Startpage extends Component {

    state = {
        isModalOpen: false,
        userName: null
    }
    toggleModal = () => {
        const { isModalOpen } = this.state;
        this.setState({ isModalOpen: !isModalOpen });
    }

    render() {
        return (
            <Router>
            <React.Fragment>
                <section>
                <Route path="/register" component={Register} ></Route>  
                    <div id="header">
                        <div id="title">
                            <h1>Little Fantasy</h1> <br/>
                            <h2>Name (temporary): {this.state.userName ?? "None"} </h2>
                            <div id="top-buttons">
                                <button id="login">Login</button>
                                <button id="register" onClick={() => {window.location.href = 'localhost:5000/register'}}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div id="main">
                        <div id="buttons">
                            <Button title="Start" action={ () => {
                                let newName = prompt('What do you want your name to be?')
                                while (newName !== null && newName.trim() !== "" && newName.length >= 10) {
                                    newName = prompt("Enter your name (needs to be below or equal to 10):");
                                  }
                                this.setState({userName: newName})
                            } }/>
                            <Button title="Profile" action={ () => undefined }/>
                            <Button title="Friends" action={ () => undefined }/>
                            <div>
                                <Button title="Options" action={() => this.toggleModal()}/>
                                <Dialog style={{transition: '0.23s'}} isOpen={this.state.isModalOpen} onClose={this.toggleModal}>
                                    <div>
                                        Settings
                                    </div>
                                    <div id='SettingsText'>
                                        Music: <br/>
                                       
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                    <div id="contacts" style={{position: "absolute", right: "15px", bottom: "15px"}}>
                        <a style={{color: "white"}} href="https://discord.gg/8ckkwTYhp6" target="_blank" rel="noreferrer" id='discord'><i style={{marginLeft: "15px"}} className="fab fa-discord fa-3x" ></i></a>
                    </div>
                </section> 
                     
            </React.Fragment>
            </Router>
        )
    }
}
