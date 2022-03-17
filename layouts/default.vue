<template>
  <div class="container">
    <header class="navbar sticky-top">
      <h1>title</h1>
      <!-- <nuxt-link to="/" class="link">Home</nuxt-link>
      <nuxt-link to="/about" class="link">About</nuxt-link> -->
      <!-- <button v-on:click="show = !show">
        Toggle
      </button> -->
    </header>
    <div v-if="show" id="wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'default',
  data () { 
    return { show: true }
  },
}
</script>