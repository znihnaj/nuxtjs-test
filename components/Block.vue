<template>
  <div class="block-wrapper" :id="anchor">
    <div class="block">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['anchor', 'text']
}
</script>