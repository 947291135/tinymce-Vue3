<template>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: 'App',
    setup() {
      let store = useStore();

      // console.log(store.state);
    },
  });
</script>

<style></style>
