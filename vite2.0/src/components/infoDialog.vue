<template>
  <el-dialog v-model="visible" title="修改用户信息" width="30%" :before-close="handleClose">
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { computed, defineProps, defineEmit } from 'vue';
  const props = defineProps({
    show: {
      type: Boolean,
      default() {
        return false;
      },
    },
  });
  const emit = defineEmit(['close']);

  let visible = computed(() => {
    return props.show;
  });
  const handleClose = () => {
    emit('close');
  };
  const submit = () => {};
</script>

<style lang="scss" scoped></style>
