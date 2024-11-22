<template>
    <ol class="menu">
      <li>
          <a href="https://ourworldinart.github.io"><p>Artwork Map</p></a>
          <p class="description">Every time I travel I wish I knew where to find more paintings by Marc Chagall. One time Lorde posted an instagram photo with the caption "if the tools do not exist you are spiritually obliged to create them." Here we are!</p>
      </li>
      <li>
          <router-link to="/recipes"><p>NYT Recipes Rebuild</p></router-link>
          <p class="description">Sometime in 2022 I kept getting frustrated that NYT cooking didn't offer a shuffle button so I made the NYT cooking UI I wanted to see in the world.</p>
      </li>
</ol>
</template>


<script>
export default {
  name: "HomeView",
  };
</script>

<style>
.menu {
  font-family: "IBM Plex Mono", serif;
  text-align: left;
  padding-left: 1em; 
}

/* .menu > * {
  padding: .5em; */
/* } */

ol {
  list-style-type: decimal;
}

li {
  list-style-position: inside;
}

.menu > li:hover p {
    font-style: italic;
}

.description::before {
  content: "- ";
  margin-left: -20px; 
}

.description {
  padding-left: 20px;
}

</style>
