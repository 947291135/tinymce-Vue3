<template>
    <div class="firet">
        <el-input v-model="app.text"></el-input>
        <Text />
    </div>
</template>


<script lang="ts">
import {app} from '@hooks/app'
import Text from "@/components/view/main/text.vue";
import { defineComponent,reactive ,toRefs, watch} from 'vue'

export default defineComponent({
  name: 'App',
  setup(){
    return {
      app
    }
  },
  components: {
    Text
  }
})
</script>