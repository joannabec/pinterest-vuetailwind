<template>
  <div class="px-20 pb-10 box-border mx-auto masonry">
    <base-card v-for="card in cards" :key="card.id" :src="card.src" class="break-inside">
      <div v-if="card.title" class="text-sm leading-tight pt-2 w-full">
        <a class="font-bold hover:underline block" href="#">{{ card.title }}</a>
        <p>{{ card.author }}</p>
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
          id: '1',
          src: '1.jpg',
          title: 'Waiting for flying',
          author: 'Primero'
        },
        {
          id: '2',
          src: '2.jpg',
          title: 'Alone in the lake',
          author: 'Segundo'
        },
        {
          id: '3',
          src: '3.jpg',
          title: 'Calm mountains',
          author: 'tercero'
        },
        {
          id: '4',
          src: '4.jpg',
          title: 'Volkswagen',
          author: 'cuarto'
        },
        {
          id: '5',
          src: '5.jpg',
          title: 'Girl',
          author: 'quinto'
        },
        { 
          id: '6',
          src: '6.jpg',
        },
        // { 
        //   id: '7',
        //   src: '7.jpg',
        //   title: 'Septimo'
        // },
        { 
          id: '8',
          src: '8.jpg',
          title: 'Octavo'
        },
        { 
          id: '9',
          src: '9.jpg',
          title: 'noveno'
        },
        { 
          id: '10',
          src: '10.jpg',
          title: 'decimo'
        },
        { 
          id: '11',
          src: '11.jpg',
          title: 'once'
        },
        { 
          id: '12',
          src: '12.jpg',
          title: 'doce'
        },
        { 
          id: '13',
          src: '13.jpg',
          title: 'trece'
        },
        { 
          id: '14',
          src: '14.jpg',
          title: 'catorce'
        },
        { 
          id: '15',
          src: '15.jpg',
          title: 'quince'
        },
        { 
          id: '16',
          src: '16.jpg',
          title: 'dieciseis'
        },
        { 
          id: '17',
          src: '17.jpg',
          title: 'diecisiete'
        },
         { 
          id: '18',
          src: '18.jpg',
          title: 'ejej',
          author: 'dieciocho'
        },
         { 
          id: '19',
          src: '19.jpg',
          title: 'ejej',
          author: 'diecinueve'
        },
         { 
          id: '20',
          src: '20.jpg',
          title: 'ohoh',
        },
         { 
          id: '21',
          src: '21.jpg',
          title: 'ejej',
          author: 'veintiuno'
        },
        { 
          id: '22',
          src: '22.jpg',
          title: 'lala',
          author: 'veintidos'
        },
        { 
          id: '23',
          src: '23.jpg',
          title: 'lala',
          author: 'veintitres'
        },
      ]
    }
  }
}
</script>
