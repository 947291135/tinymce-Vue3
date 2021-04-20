<template>
    <div class="firet">
        <el-form ref="formRef" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-input v-model="test"></el-input>
    </div>
</template>


<script lang="ts">
import { defineComponent,reactive ,ref ,watch,toRefs} from 'vue'

export default defineComponent({
  name: 'App',
  setup(){
    const formRef = ref(null)
    const data = reactive({
      form: {
        name: '123',
        region: 'shanghai'
      },
      test:'123'
    })
    watch(data.form,(newVal)=>{
        console.log(newVal)
    },{
        deep:true
    })
    
    return {
      ...toRefs(data),
      formRef
    }
  }
})
</script>