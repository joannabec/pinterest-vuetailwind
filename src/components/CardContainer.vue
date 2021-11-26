<template>
  <div class="px-20 myGrid">
    <base-card src="1.jpg">
      <div class="text-sm leading-tight pt-2 w-full">
        <a class="font-bold hover:underline block" href="#">The title of the card</a>
        <p>Author name</p>
      </div>
    </base-card>
    <base-card src="2.jpg"></base-card>
    <base-card src="3.jpg">
      <div class="text-sm leading-tight pt-2 w-full">
        <a class="font-bold hover:underline block" href="#">The title of the card</a>
        <p>Author name</p>
      </div>
    </base-card>
    <base-card src="4.jpg">
      <div class="text-sm leading-tight pt-2 w-full">
        <a class="font-bold hover:underline block" href="#">The title of the card</a>
        <p>Author name</p>
      </div>
    </base-card>
    <base-card src="5.jpg"></base-card>
    <base-card src="6.jpg">
      <div class="text-sm leading-tight pt-2 w-full">
        <a class="font-bold hover:underline block" href="#">The title of the card</a>
        <p>Author name</p>
      </div>
    </base-card>
    <base-card src="7.jpg">
      <div class="text-sm leading-tight pt-2 w-full">
        <a class="font-bold hover:underline block" href="#">The title of the card</a>
        <p>Author name</p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          src: '1.jpg',
          title: 'Waiting for flying',
          author: 'Plane930k'
        }
      ]
    }
  }
}
</script>
<style>
.myGrid {  
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: mansory;
  justify-content: center;
  gap: 20px;
}
</style>