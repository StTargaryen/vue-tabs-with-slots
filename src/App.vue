<template>
  <div>
    <TabCard :tabs="tabs" :initialTab="initialTab">
      <template slot="tab-head-vue"> Vue </template>
      <template slot="tab-panel-vue">
        <h3 class="title">The Progressive JavaScript Framework</h3>
        <img
          class="image"
          src="https://nuts-agency.ru/upload/iblock/03a/03a203deee86e43d13f4a61ec66459b2.png"
          alt="vue"
        />
      </template>
      <template slot="tab-head-react"> React </template>
      <template slot="tab-panel-react">
        <h3 class="title">JavaScript-libriary for creating UI</h3>
        <img class="image" src="https://reactjs.org/logo-og.png" alt="react" />
      </template>
      <template slot="tab-head-svelte"> Svelte </template>
      <template slot="tab-panel-svelte">
        <h3 class="title">Cybernetically enhanced web apps</h3>
        <img
          class="image"
          src="https://miro.medium.com/max/1400/1*D4Q_5erHUdm8zXNaxPsEGQ.png"
          alt="svelte"
        />
      </template>
    </TabCard>
  </div>
</template>

<script>
import TabCard from "./components/TabCard";

export default {
  name: "App",
  components: {
    TabCard,
  },
  data() {
    return {
      initialTab: "vue",
      tabs: ["vue", "react", "svelte"],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #eee;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: "Roboto", sans-serif;
  background: #2c3e50;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}

.image {
  width: 400px;
}
</style>
