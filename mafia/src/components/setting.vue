<template>
  <section>
    <p>{{ title }}</p>
    <input type="checkbox" v-model="checked" v-if="defaultValue">
    <input type="checkbox" v-model="unchecked" v-if="!defaultValue">
  </section>

</template>

<script>
export default {
   name: 'Setting',
   props: {
       title: {
           type: String,
           default: 'replace'
       },
       defaultValue: {
           type: Boolean,
           default: false
       }
   }
}


</script>

<style scoped>
    section {
        display: flex;
        flex-flow: left;
    }

</style>
