'use strict'
/* eslint-disable react/no-direct-mutation-state */
import Button from '../Button/Button'
import './Startpage.css'
import Dialog from '../Dialog/dialog'
import React, {Component} from 'react';

export default class Startpage extends Component {

    state = {
        isModalOpen: false,
        max: 100, 
        min: 0, 
        value: 0
    }
    toggleModal = () => {
        const { isModalOpen } = this.state;
        this.setState({ isModalOpen: !isModalOpen });
    }

    render() {
        return (
            <React.Fragment>
                <section>
                    <div id="header">
                        <div id="title">
                            <h1>Little Fantasy</h1>
                            <div id="top-buttons">
                                <button id="login">Login</button>
                            </div>
                        </div>
                    </div>
                    <div id="main">
                        <div id="buttons">
                            <Button title="Start" action={ () => undefined }/>
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
                                        <input type="range" min={this.state.min} max={this.state.max} value={this.state.value} 
                                        onChange={() => console.log('hi')} className="slider" id="myRange"></input>
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
