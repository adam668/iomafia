<template>
  <section>
    <div id='title'>r
        <h1>
            Mafia.io
        </h1>
    </div>

  

    <div id="buttons">
      <button v-on:click="start()" id='start-btn'>Start</button>
      <button v-on:click="profile()">Profile</button>
      <button v-on:click="friends()">Friends</button>
      <button v-on:click="shop()">Shop</button>
      <button v-on:click="settings()">Settings</button>
    </div>

    <settings />
  </section>

</template>

<script>
//import Settings from './settings'
import {menuMusic}  from '../server/sfx.ts'


export default {
   name: 'Startpage',
   methods: {
      start() {
               menuMusic.play()
               alert('you clicked on start btn')
      },
      profile() {
          alert('you clicked on profile btn')
      },
      friends() {

      },
      shop() {

      },
      settings() {
        
      }
   },
   
}


</script>
<style>
body
{
	width:100%;
	height:100%;
	position:fixed;
	top:0;
	left:0;
	display:-webkit-box;
	display:-ms-flexbox;
	display:flex;
	-webkit-box-align:center;
	-ms-flex-align:center;
	align-items:center;
	-webkit-box-pack:center;
	-ms-flex-pack:center;
	justify-content:center;
	background:#607D8B
}
</style>
<style scoped>
/* $time: 380ms */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
      font-family: 'Courier New', Courier, monospace;
      font-size: 62px; 
      font-weight: 800;
      line-height: 72px;
      margin: 0 0 24px; 
      text-align: center; 
      text-transform: uppercase;
}

#buttons {
  display: flex;
  flex-direction: column;
  text-align: center;
}

#buttons button {
  background-color: blue;
  color: white;
  width: 70px;
  margin: 0 auto;
  height: 40px;
  border: none;
  font-family: monospace;
  text-decoration: none;
  border-radius: 10%;
  margin: 5px;
}


</style>
