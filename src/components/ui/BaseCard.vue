<template>
<div class="mb-5">
  <div @mouseover="isVisible = true" @mouseleave="isVisible = false" class="relative">
    <img :src="src" alt="" class="rounded-lg">
    <div v-if="isVisible" class="absolute bg-dark opacity-50 inset-0 w-full h-full rounded-lg"></div>
    <div v-if="isVisible" class="absolute top-0 w-full h-full flex flex-col justify-between p-3 cursor-zoom-in">
      <div class="flex items-center justify-between">
        <base-button type="button">
          <p class="font-semibold text-white">Ui</p>
          <span class="material-icons text-white">expand_more</span>
        </base-button>
        <base-button mode="red">Save</base-button>
      </div>
      <div class="flex items-center w-full">
        <base-button mode="img" class="ml-auto mr-2 w-8 h-8 bg-white hover:opacity-100 text-dark opacity-75">
          <span class="material-icons text-base">ios_share</span>
        </base-button>
        <base-button mode="img" class="w-8 h-8 bg-white hover:opacity-100 text-dark opacity-75">
          <span class="material-icons text-base">more_horiz</span>
        </base-button>
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