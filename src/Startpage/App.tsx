/* eslint-disable react/no-direct-mutation-state */
import Button from '../Button/Button'
import './Startpage.css'
import Dialog from '../Dialog/dialog'
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Startpage extends Component {

    state = {
        isModalOpen: false,
        isStartOpen: false,
        userName: null
    }
    toggleModal = () => {
        const { isModalOpen } = this.state;
        this.setState({ isModalOpen: !isModalOpen });
    }

    toggleStart = () => {
        const { isStartOpen } = this.state;
        this.setState({ isStartOpen: !isStartOpen });
    }

    render() {
        return (
           
            <React.Fragment>
                <section>
                
                    <div id="header">
                        <div id="title">
                            <h1>Little Fantasy</h1> <br/>
                            <div id="top-buttons">
                                <button id="login">Login</button>
                                <NavLink to='/register'>
                                <button id="register">Register</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div id="main">
                        <div id="buttons">
                            <div>
                            <Button title="Start" action={ () => 
                             this.toggleStart()  }/>
                             <Dialog style={{transition: '0.23s'}} isOpen={this.state.isStartOpen} onClose={this.toggleStart}>
                                    <div id='NameStart'>
                                    Name: {this.state.userName ?? "None"} 
                                    </div>
                                    <div>
                                        <button onClick={() => {
                                             let newName = prompt('What do you want your name to be?')
                                             while (newName !== null && newName.trim() !== "" && newName.length >= 20) {
                                                 newName = prompt("Enter your name (needs to be below or equal to 10):");
                                               }
                                             this.setState({userName: newName})
                                        }}>Get a name!</button>
                                    </div>
                                </Dialog>
                             </div>
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
        )
    }
}