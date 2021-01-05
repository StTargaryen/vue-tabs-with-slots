<template>
  <div class="card">
    <header class="card-header">
      <ul class="tab-heads">
        <li
          class="tab-head"
          v-for="(tab, index) in tabs"
          :key="index"
          v-bind:class="{
            'tab-head--active': activeTab === tab,
          }"
          v-on:click="switchTab(tab)"
        >
          <slot :name="tabHeadSlotName(tab)">{{ tab }} </slot>
        </li>
      </ul>
    </header>
    <main class="card-body">
      <div class="tab-panel">
        <slot :name="tabPanelSlotName"> </slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    initialTab: String,
    tabs: Array,
  },
  data() {
    return {
      activeTab: this.initialTab,
    };
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    },
  },
  methods: {
    tabHeadSlotName(tabName) {
      return `tab-head-${tabName}`;
    },

    switchTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style>
.card {
  background-color: #fff;
  border-radius: 6px;
  width: 500px;
  height: 300px;
  box-shadow: 2px 0px 30px 0 rgba(0, 0, 0, 0.14);
  overflow: hidden;
}

.card-header {
  padding: 8px;
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 6px 6px 0 0;
}

.tab-heads {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}
.large-tab-heads {
  overflow-y: scroll;
}

.tab-head {
  padding: 5px 18px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  color: #2c3e50;
}

.tab-head--active {
  background-color: #2c3e50;
  color: #fff;
  transition: 0.4s;
}

.card-body {
  box-shadow: 2px 0px 30px 0 rgba(0, 0, 0, 0.24);
  border-radius: 6px;
  margin: 6px;
  padding: 14px 10px;
}

</style>
