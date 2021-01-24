<template>

<v-app>
 


      <div id='login-btns'>

        <button id='login'>Login</button>

        <button id='register'>Register</button>

      </div>


      <div id='title'>

          <h1>
              Mafia
          </h1>

      </div>

    

  
    <div id="buttons">
      <button v-on: click="start()" id='start-btn' @mouseover="mouseOver()">Start</button>
      <button v-on: click="profile()">Profile</button>
      <button v-on: click="friends()">Friends</button>
      <button v-on: click="shop()">Shop</button>
       <div class="settings">
    <v-dialog
      v-model="settings"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
         Settings
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Settings
        </v-card-title>
        <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis cupiditate tempora quae! Repudiandae reiciendis eos culpa natus aperiam doloremque pariatur impedit consectetur dolores quis consequuntur fugit eius beatae alias cupiditate quidem ratione, incidunt id, blanditiis, vitae quisquam quibusdam magni distinctio? Nesciunt similique quisquam dolore amet nulla explicabo? Unde, dolores molestiae. Esse quasi minus blanditiis provident, numquam voluptates fuga asperiores consequatur laborum eius error? Accusamus nostrum doloremque alias in consequatur error enim! Modi, iste? Adipisci cumque voluptate voluptas alias eos nesciunt totam enim laboriosam iste quis, unde cupiditate ullam quidem eaque consectetur sequi voluptatibus. Quidem veniam tempora aspernatur facere et ullam enim culpa libero? Nostrum voluptate, sed ipsa dolorem recusandae in magni quibusdam totam fugit ducimus, minima nihil commodi ad repellat. Modi, quos porro id optio nisi saepe veniam nihil, vitae suscipit eos consequuntur voluptates, odio tempore obcaecati consequatur impedit corporis rerum dolores deserunt! Similique minus suscipit vitae ea id numquam dignissimos, a ullam dolorem quidem, facere, consectetur alias at! Est doloremque rerum eligendi ab natus ipsa nisi unde hic. Inventore enim iste est iusto soluta placeat alias maiores molestias earum reiciendis provident, ab commodi voluptatem. Explicabo minus nostrum, provident exercitationem natus veniam nobis laboriosam, delectus nisi, hic ut excepturi veritatis? Corrupti totam officia quia modi voluptates ea vero illo officiis? Perspiciatis similique dignissimos excepturi animi asperiores perferendis in, dolores, autem debitis nostrum blanditiis deserunt illo laborum obcaecati quam! Quo nulla nihil commodi quam suscipit! Modi repudiandae ea culpa temporibus laborum suscipit odio ullam quas, similique consequatur non, in consequuntur doloribus. Natus sequi ratione corporis eveniet unde? Ratione architecto labore quidem, nulla itaque explicabo voluptatum debitis deserunt nihil totam voluptatibus tempore fuga quas porro? Sed molestias libero vero saepe nesciunt deserunt veritatis doloribus quam, tempora omnis quisquam delectus expedita voluptatibus reprehenderit recusandae maiores! Labore consequatur reprehenderit dolor eos sed obcaecati quis atque tempore eveniet harum repellendus, similique dolore, esse corrupti minus totam cumque ducimus nemo, numquam iusto quod nam dolorem ipsam. Ullam, voluptates unde molestias praesentium tenetur labore. Voluptas laudantium perferendis deleniti iste ea odio perspiciatis ipsum iusto, laboriosam modi quia voluptatem fuga quae facilis quisquam aspernatur reprehenderit neque distinctio sunt quo praesentium non. Asperiores quod soluta voluptate quaerat consequatur expedita neque adipisci nulla laborum quis ipsa harum necessitatibus, ex totam nihil saepe alias et? Voluptates dolor quasi illum ex asperiores vero tenetur doloremque ad nam nobis molestias maiores, libero animi autem necessitatibus delectus, nostrum, deleniti reiciendis. Quisquam corrupti placeat deserunt quibusdam quis unde qui quia porro quam modi, aliquam voluptatibus adipisci ducimus enim, culpa fugiat asperiores quos provident architecto cumque exercitationem corporis id iure debitis. Possimus exercitationem iure illum voluptatem. Atque dolor qui perspiciatis! Laudantium officiis soluta quaerat temporibus vero. Quidem ab eveniet blanditiis saepe iure, est vero, perferendis nulla dolore doloremque accusamus veritatis dignissimos dolores delectus sunt, laboriosam architecto corporis optio cupiditate ipsum eius? Reprehenderit et iure perspiciatis vel in accusamus vitae ipsa tempore magni pariatur itaque fugit aliquam, ea sint deserunt necessitatibus molestiae, eius quas aspernatur omnis. Enim consectetur rerum fuga quia cumque. Odio neque qui explicabo ea reiciendis officiis repellat, laborum exercitationem commodi iste iusto corporis molestiae aut placeat harum dolorem, totam aliquid voluptas! Ut, dolores magni. Eius, molestias nam. Recusandae corrupti sapiente nobis dolor alias nulla excepturi eaque omnis, non minima tempora id enim dicta voluptatem consectetur debitis ab accusantium blanditiis, doloremque, vel et! Nihil natus ducimus molestias possimus quisquam debitis consectetur nesciunt odio adipisci odit quae accusantium, consequatur et inventore repudiandae eos nisi dolorum. Cupiditate optio asperiores ex, animi officiis inventore iure dolorum sequi sapiente, laudantium ipsam minus, tenetur quod. Vero molestias eligendi aliquid reprehenderit officia mollitia asperiores non unde sunt! Voluptatem incidunt, magni iure aut consectetur, saepe atque vitae nobis repudiandae laudantium nesciunt ut quia dicta sint soluta sed? Rerum odit nam tempore facilis sequi beatae, fugiat assumenda unde quis repellendus enim? Consequuntur vero fugiat rerum alias corporis non nisi repellat harum, eius tempora excepturi quos placeat dolore recusandae adipisci tempore unde quaerat voluptatibus labore magnam eos facere? Vitae dolorum vel, molestias facere velit aspernatur non rerum qui aperiam quasi impedit eum quos soluta et distinctio repellat repellendus? In suscipit repudiandae quisquam quibusdam maiores rerum natus voluptatum illum ipsam ad nobis eum recusandae soluta atque incidunt, architecto earum quae ullam quis illo ab, exercitationem eaque reprehenderit. In ipsa provident molestias eum nam distinctio asperiores laudantium ipsam. Dolorem praesentium vero laborum corporis dolore, ratione molestias eveniet quae quo veritatis minima a blanditiis fuga rerum soluta, atque nisi totam laudantium optio voluptatum, perferendis vitae neque. Maxime, facere necessitatibus nesciunt ad dolores, architecto excepturi ex neque magni est error veritatis non numquam iure earum maiores ullam? Perferendis vitae eaque expedita molestias. Omnis harum, perferendis veritatis nemo repudiandae placeat? Repudiandae ullam error ab, rerum suscipit obcaecati similique, enim animi distinctio nihil tenetur maxime, eaque dolores corrupti minus. Accusamus, ratione. Magni, natus consectetur. Eos amet quibusdam modi veniam vel totam minima doloribus eaque quis eum laboriosam velit eligendi, assumenda similique consequatur quidem, id magni ducimus quod impedit voluptatum at. Esse unde dolorum eveniet maxime ducimus pariatur aliquid consectetur inventore, distinctio molestias perferendis aperiam accusantium. Quasi, doloribus, odit pariatur id voluptatum maiores omnis saepe, quo eveniet at distinctio quod! Aut ducimus minima tenetur voluptatibus, exercitationem cupiditate perspiciatis labore repellat ratione excepturi consequatur recusandae consectetur reiciendis quasi fugiat ad inventore magnam provident deleniti, rem dolorem impedit? Alias saepe repellat reiciendis error! Temporibus et amet placeat culpa. Nesciunt dicta ipsum architecto neque, omnis eligendi corrupti distinctio consequuntur voluptatum debitis in? Reiciendis, commodi? Eaque illo voluptatibus, recusandae commodi, voluptatem consectetur fuga praesentium maiores eligendi ipsam porro dolor ea expedita dolorem velit mollitia repellendus cumque ipsum repudiandae quas laudantium unde. Vero earum accusamus sapiente aperiam culpa fugiat cumque nihil, modi a, excepturi nemo impedit blanditiis eaque laudantium quibusdam. Aperiam veniam accusamus, accusantium, inventore quis hic nihil dolor aspernatur saepe cupiditate dolorum iusto. Iste eligendi corporis sunt et qui voluptate quas tenetur! Illum assumenda, ducimus esse debitis veritatis ratione! Eum voluptates ad, ut incidunt nulla eos porro corporis expedita illo delectus ratione vel, obcaecati corrupti nemo molestiae! Commodi provident quisquam molestias? Tempore, quis dicta.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="settings = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </div>

    <div id='contacts'>
     <i class='fa fa-discord'></i>
    </div>

 
</v-app>
</template>


<script>
//import Settings from './settings'
import {Howl} from 'howler'
let menuMusic = new Howl({
  preload: true, 
  html5: true,
  src: [
    '../static/sounds/hover.mp3'
  ],
  loop: true,
  autoplay: true,//userSettings.volume
onunlock: () => console.log("song started playing!"),
onplay: (m) => console.log('onplay', m.toString()),
onstop: () => console.log("song stopped for some reasons"),
onloaderror: (sound, err) => console.log('onloaderror',sound, err),
onplayerror: (sound, err) => console.log('onplayerror', err)
});
menuMusic.play()
export default {
   name: 'Startpage',
   data() {
     return {
        profile: false,
        friends: false,
        shop: false,
        settings: false
      }
   },
   methods: {
     mouseOver() {
        console.log('k')
     },
      startOnClick() {
        alert('you clicked on start btn')
      },
      profileOnClick() {
          alert('you clicked on profile btn')
      },
      friendsOnClick() {

      },
      shopOnClick() {

      },
      settingsOnClick() {
        
      },

   }
    
} 


</script>
<style>
body
{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	background-color: #000000
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
  height: 60px;
  width: 240px;
  font-weight: 800;
  line-height: 72px;
  margin: 0 0 24px; 
  text-align: center; 
  text-transform: uppercase;
  color: green;
}

#title {
  position: relative;
  bottom: 100px;
}

#login-btns {
  display: flexbox;
  position: relative;
  left: 550px;
  bottom: 80px;
}


#login-btns button {
  background-color: rgb(63, 63, 63);
  color: white;
  width: 100px;
  height: 60px;
  border: none;
  font-family: monospace;
  text-decoration: none;
  border-radius: 7%;
  margin: 5px;
}

#buttons {
  display: flex;
  flex-direction: column;
  text-align: center;

}

#buttons button {
  background-color: rgb(63, 63, 63);
  color: white;
  width: 240px;
  margin: 0 auto;
  height: 60px;
  border: none;
  font-family: monospace;
  text-decoration: none;
  border-radius: 7%;
  margin: 5px;
}

#discord-btn {
  background-color: rgb(63, 63, 63);
  color: white;
  width: 90px;
  margin: 0 auto;
  height: 20px;
  font-family: monospace;
  border-radius: 4%;
  margin: 5px;
}

#contacts {
  position: fixed;
  bottom: 0;
  right: 0;
}

#contacts i {
  height: 50px;
}

</style>

