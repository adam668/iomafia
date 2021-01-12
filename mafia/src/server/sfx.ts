import {Howl} from 'howler'

export let menuMusic = new Howl({
  src: [
    '../static/sounds/menuMusic.mp3'
  ],//userSettings.volume
onunlock: () => console.log("song started playing!")
});
