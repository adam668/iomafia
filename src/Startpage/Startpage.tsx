import './Startpage.css'
import { useState } from 'react'

export default function Startpage() {


    return <section>
        <div id="title">
            <div id="login-buttons">
                <button id="login">Login</button>
                <button id="register">Register</button>
            </div>
        </div>
        <div id="main">
            <div id="buttons">
                <button>Start</button>
                <button>Profile</button>
                <button>Options</button>
                <button>Friends</button>
            </div>
            <h1><code>MAFIA.IO</code></h1>
        </div>
        <div id="contacts">
            <a href="https://discord.gg/8ckkwTYhp6" target="_blank" rel="noreferrer"><i className="fab fa-discord fa-3x" ></i></a>
        </div>
    </section>
}
