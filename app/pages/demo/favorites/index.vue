<template>
<main class="flex-grow container mx-auto px-6 py-12">
<div class="mb-10">
<h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Favorilər</h1>
<p class="mt-2 text-lg text-gray-500 dark:text-gray-400">Seçilmiş həkimlərinizin siyahısı.</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" v-for="doctor in doctors" :key="doctor.id">
 <DoctorCart :doctor="doctor"/>
 <DoctorCart :doctor="doctor"/>
 <DoctorCart :doctor="doctor"/>
 <DoctorCart :doctor="doctor"/>
 

</div>
</main>
  </template>
  
  <script setup>
  definePageMeta({ layout: 'main' })


  

 const doctors = ref([{
    id: 1,
    user: {
      name: 'John Doe',
      image: 'https://res.cloudinary.com/djfeqtwjx/image/upload/v1760094582/yiqfx8nb4hv2sdn0nvq3.png',
    },
    average_rating: 4.5,
    doctor_category: {
      id: 1,
      title: 'Cardiology',
    },
 }])

  </script>