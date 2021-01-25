<template>
    <button class="default" :class="type"> <slot></slot> </button>
</template>
<script>

export default {
  name: 'MyButton',
  data() {
    
  },
  props() {
      return {
          type: String,
          disabled: Boolean
      }
  }
} 
</script>
