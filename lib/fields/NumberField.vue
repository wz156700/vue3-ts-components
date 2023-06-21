<script setup lang="ts">
import { FiledPropsDefine } from '../type'
const props = defineProps(FiledPropsDefine)
const handleChange = (e: any) => {
  const num = Number(e.target.value)
  if (Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>

<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<style></style>
