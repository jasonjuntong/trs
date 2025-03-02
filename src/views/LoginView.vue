<script setup lang='ts'>
import Button from "primevue/button"

const onClickHandler = () => console.log("clicked")
</script>

<template>
  <div>
    <Button label="Verify" @click="onClickHandler" />
  </div>
</template>

<style scoped>

</style>