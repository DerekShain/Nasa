<template>
  <header>
    <Navbar />
  </header>
  <main class="bgdk">
    <router-view />
  </main>
  <footer>
    <div class="bgdk text-light text-center p-4">
      D. Shain
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
