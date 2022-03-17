<template>
  <center>
    <Block anchor="part1" text="Stuff" />
    <Block anchor="part1" text="Work"/>
    <!-- to und anchor (id) muss das gleiche sein -->
    <nuxt-link to="/about"><Block anchor="about" text="About <- CLICK ME!!!" /></nuxt-link>
    <Block anchor="part4" text="more Stuff" />
    <Block anchor="part5" text="Hello" />
    <Block anchor="part6" text="Nork" />
  </center>
</template>

<script>
var VueScrollTo = require('vue-scrollto');
var options = {
    easing: 'ease-in',
    lazy: true,
    offset: -140, // offset, damit die Position nach dem Scroll passt
    force: true,
    x: false,
    y: true
}

export default {
  name: 'home',

  // wenn in der route ein parameter (slug) steht, scroll hin
  mounted () {
    var slug = this.$nuxt._route.params.slug;

    if(slug != null) {
      VueScrollTo.scrollTo("#"+slug, 0, options);
    }
  },

  data () {
    return {
      title: "home"
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
      VueScrollTo.scrollTo("#"+this.$nuxt._route.name, 0, options);
      var activeElement = document.getElementById("about");
      activeElement.classList.add("show");
      const myTimeout = setTimeout(hideElements, 500);

      this.$gsap.to(el, {
        duration: 0.6, // das muss länger sein als die setTimeout Zeit
        ease: 'power2.inOut',
        onComplete: done
      })
    },
  },
}

// sobald der scroll fertig ist, werden alle anderen elemente versteckt
// so gibt es kein hochsrollen auf der child seite
function hideElements() {
  var element = document.getElementById("wrapper");
  element.classList.add("hide-elements");
}
</script>
