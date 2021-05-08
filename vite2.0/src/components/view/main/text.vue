<!--
 *@description:
 *@author: Ming
 *@date: 2021-04-24 15:59:09
 *@version: V1.0.5
-->
<template>
  <div>{{text}}</div>
</template>

<script lang='ts'>
import { defineComponent, computed, reactive} from 'vue'
import {app} from '@hooks/app'
export default defineComponent({
      setup() {
        const text = computed(()=>app.text)
        return {
          text
        }
      }
 })
</script>
<style lang='scss' scoped>
</style>