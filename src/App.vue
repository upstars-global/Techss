<template>


  <main_page v-if="!stube_mode"/>
  <stub_page v-if="stube_mode"/>


</template>

<script>
import main_page from './components/main_page';
import stub_page from "@/components/stub_page.vue";


export default {
  name: 'App',
  components: {
    main_page,
    stub_page,
  },
  data() {
    return {
      stube_mode: false
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  font-size: 100%;
  vertical-align: baseline
}
  html
    font-size 1px
    scroll-behavior: smooth;
    scroll-padding-top: 100px;

html, body {
  max-width: 100%;
  overflow-x: hidden;
}

body {
  line-height: 1;
  color: #222;
  background: #fff
}

ol, ul {
  list-style: none
}

table {
  border-collapse: separate;
  border-spacing: 0;
  vertical-align: middle
}

caption, th, td {
  text-align: left;
  font-weight: normal;
  vertical-align: middle
}

a img {
  border: none
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.v-lazy-image
  opacity 0
  filter blur(7px)
  transition: all 0.5s ease-out;


.v-lazy-image-loaded
  filter blur(0)
  opacity 1



</style>
