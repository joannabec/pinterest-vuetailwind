<template>
<div>
  <div @mouseover="isVisible = true" @mouseleave="isVisible = false" class="relative">
    <img :src="src" alt="" class="rounded-lg">
    <div v-if="isVisible" class="absolute bg-dark opacity-50 inset-0 w-full h-full rounded-lg"></div>
    <div v-if="isVisible" class="absolute top-0 w-full h-full flex flex-col justify-between p-3 cursor-zoom-in">
      <div class="flex items-center justify-between">
        <button type="button" class="flex items-center">
          <p class="font-semibold text-white">Ui</p>
          <span class="material-icons text-white">expand_more</span>
        </button>
        <base-btntext mode="red" text="Save"></base-btntext>
      </div>
      <div class="flex items-center w-full">
        <button type="button" class="ml-auto mr-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100">
          <span class="material-icons text-base">ios_share</span>
        </button>
        <button type="button" class="bg-white rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100">
          <span class="material-icons text-base">more_horiz</span>
        </button>
      </div>
    </div>
  </div>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: ['src'],
  data() {
    return {
      isVisible: false
    }
  }
}
</script>