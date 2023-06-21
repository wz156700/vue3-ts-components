<script setup lang="ts">
import { FiledPropsDefine, Schema } from '../type'
const props = defineProps(FiledPropsDefine)
const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>

<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<style></style>
