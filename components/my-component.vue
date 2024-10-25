<template>
  <div >
    hello world
  </div>
</template>
<script setup lang="ts">
const { error, data } = await useFetch('test')

// if you replace the above line with this, the test will succeed
// const { error: err, data } = await useFetch('test')


</script>