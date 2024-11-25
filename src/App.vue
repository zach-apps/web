<template>
    <div id="router-view">
      <router-view />
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style>
:root {
  --site-width: 60vw;
  --recipes-width: 80vw;
  --bright: #FF5722;
  --site-width-mobile: 90vw;
  --grey: #f5f5f5;
  --dark: #90a4ae;
  /*--bright: #f6a434;*/
}

#app {
  /* width: 100vw; */
  margin:0;
}

#router-view {
  /* width: 100vw; */
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: var(--bright) !important;
}

body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: 200;
}

.menu {
  margin: 0 auto;
}

@media (hover: none) and (pointer: coarse), (max-width: 768px) {
    a:hover {
      color: initial;
    }
}

</style>
