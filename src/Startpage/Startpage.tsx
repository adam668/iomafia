import Button from '../Button/Button'
import './Startpage.css'

export default function Startpage() {

    return <section>
        <div id="title">
            <div id="login-buttons">
                <button id="login">Login</button>
                <button id="register">Register</button>
            </div>
        </div>
        <div id="main">
            <h1><code>MAFIA.IO</code></h1>
            <div id="buttons">
                <Button title="Start" action={ () => undefined }/>
                <Button title="Profile" action={ () => undefined }/>
                <Button title="Friends" action={ () => undefined }/>
                <Button title="Options" action={ () => undefined }/>
                <Button className="fas fa-cogs"/>
            </div>
        </div>
        <div id="contacts" style={{position: "absolute", right: "15px", bottom: "15px"}}>
            <a style={{color: "white"}} href="https://discord.gg/8ckkwTYhp6" target="_blank" rel="noreferrer"><i style={{marginLeft: "15px"}} className="fab fa-discord fa-3x" ></i></a>
        </div>
    </section>
}
