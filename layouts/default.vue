<template>
  <div>
    <NavBar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
