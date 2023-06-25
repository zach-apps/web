<template lang="html">
  <div>
    <div class="top-spacer"></div>

    <ul style="list-style-type: none;padding:0">

      <li v-for="(project, index) in projects" :key="project.id">
        <router-link class="project" :to="'/projects/' + project.name">
          <span class='not_on_mobile'>{{ random_emoji(index) }}</span>
          {{ project.name.replaceAll("_", " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}}
          <span class="date">{{ format_date(project.date) }}</span>
        </router-link>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag.id"> {{tag}} </span>
        </div>

      </li>
      <li>
        <router-link class="project" to="/projects/spotify_streamgraph"
          >{{ random_emoji(8) }}  Spotify Streamgraph Generator<span class="date">
            1/30/2021</span ></router-link
        >
      </li>
    </ul>
    <div class="top-spacer"></div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      emojis: [
    '🔥', '👍', '🙌', '🎉', '😎', '🎶', '👏', '🌟', '🙏', '💃', '🔴', '🎊',
    '✨', '🚀', '💙', '😃', '🎁', '🌞', '👑', '💥', '😀', '💜',
    '🎈', '💛', '🌺', '💋', '🎵', '🌹', '🌷', '💚',
    '💐', '🌸', '🌼', '🌻', '🍀', '💘','🌺', '🌴', '💝', '💫', '🍃',
    '🌿', '🌱', '🌍', '💥', '💨', '🔥', '🌊', '✨', 
    '💫', '🌙', '⭐', '🌠', '🍂', '🍁', '🍃', '🌬️', '🌫️', '🌧️',
    '🌦️', '🌈', '🌤️', '☁️', '⛅', '🌥️', '🌪️', '🌡️', '🔆', '🔅',
    '❄️', '🌨️', '☃️', '⛄', '💨',  '🌊', '🌫️', '🌄', '🌅', '☄️', '💥', 
    '🚀', '🌌', '🌠', '🪐', '🌎', '🌍', '🌏', '🌙', '🌕', '🌖',
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌚', '🌝', '🌛', '🌜',
    '🎆', '🎇', '🌇', '🌆', '🌃', '🌉', '🌌', '🌁', 
    '🎎', '🎏', '🎐', '🧧', '🎀', '🎗️',
    '🏮', '🎑', '🎋', '🎍', '🎄', 
    '🎀', '🎊', '🎉', '🎎', '🎏', '🎐', '🧧', '🎈', '🎏', '🎑', 
    '🎋', '🎍', ⛪']
    };
  },
  methods: {
    random_emoji(index) { 
      console.log(index)
      console.log(Math.random())
      console.log(Math.random())
      let randomIndex = (Math.floor(Math.random() * index * 31) + (Math.floor(Math.random() * 31))) % this.emojis.length
      console.log(randomIndex)
      return this.emojis[randomIndex] + " ";
    },

    format_date(d) {
      let date = d.split("T")[0];
      let parts = date.split("-");
      return parts[1] + "/" + parts[2] + "/" + parts[0];
    }, 
  },
  computed: {
    projects() {
      return this.$root.$data.projects.filter(x => {
        return !x.name.startsWith("HIDE");
      });
    },
  }
};
</script>

<style lang="css" scoped>
.project {
  border-bottom: 2px dotted white;
  font-size: 2em;
  font-family: "ibm-plex-serif", serif;
  font-weight: 100;
}

.date {
  color: var(--dark);
  font-weight: bolder;
  font-family: "ibm-plex-mono", mono;
}

.project:hover {
  /*text-decoration: underline;*/
  border-bottom: 2px dotted var(--bright);
  color: var(--bright) !important;
  font-style: italic;
}

li {
  line-height: 4em;
  display: flex;
  align-items: center;
}

li a {
  color: black;
}

li::before {
  content: "";
  color: var(--dark);
}

.article-container {
  display: flex;
  flex-direction: row;
}

.date {
  font-size: .8em;
}

.tags span:hover {
  background-color: var(--dark);
  color: white;
}

.tags span {
  cursor: pointer;
  color: var(--dark);
  border: 2px solid var(--dark);
  border-radius: 10px;
  padding: 0 .8em .2em;
  margin: 0 .3em;
  font-weight: bolder;
  text-transform: lowercase;
}

@media (max-width: 768px) {
  .article-container {
    flex-direction: column;
  }
}

</style>
