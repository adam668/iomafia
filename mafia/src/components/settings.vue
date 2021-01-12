<template>
  <section>
    <h1>Settings</h1>
    <div id="settings">
        <Setting title="mytest" defaultValue="true" />
    </div>
  </section>

</template>

<script>

import Setting from './setting.vue'

export default {
   name: 'Settings',
   components: {
       Setting
   }
}


</script>

<style scoped>


</style>
