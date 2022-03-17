<template>
  <div>
    <center>

      <Block anchor="about" text="About" class="show" />
      <Flup text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet." />
      <Flup text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet." />
      <Flup text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet." />
      <Flup text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet." />
      <Flup text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet." />
      <Flup text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. Liest das Jemand? Et justo duo dolores et ea rebum. Stet 
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet." />
      <nuxt-link to="/" class="small">(ich hasse scrollen auf der index seite!)</nuxt-link>
    </center>
    <!-- slug wird benutzt, um zu wissen wohin gescrolled werden soll nachdem man wieder bei index landet -->
    <nuxt-link :to="{ name: 'index', params: { slug: 'about' } }" class="small">
      <b-icon icon="x-circle-fill" scale="2" variant="danger" class="closeBtn"></b-icon>
    </nuxt-link>
  </div>
</template>

<script>
import Block from '../components/Block.vue'
import Flup from '../components/Flup.vue'

export default {
  //layout: 'work',

  components: { Flup, Block },
  name: 'About',
  data () {
    return {
      title: "About"
    }
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
    },

    enter(el, done) {
      this.$gsap.to(el, {
        onComplete: done
      })
    },

    leave(el, done) {
      showElements();
      window.scrollTo(0, 0);

      this.$gsap.to(el, {
        duration: 0.5,
        onComplete: done
      })
    },
  },
}

// die Elemente wieder einblenden, wenn man zurück zum Index geht
function showElements() {
  var element = document.getElementById("wrapper");
  element.classList.remove("hide-elements");
}
</script>