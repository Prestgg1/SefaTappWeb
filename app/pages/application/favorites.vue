<template>
    <main class="grow container mx-auto px-6 py-12">
    <div class="mb-10">
    <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Favorilər</h1>
    <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">Seçilmiş həkimlərinizin siyahısı.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" v-for="doctor in doctors" :key="doctor.id">
     <DoctorCart :doctor="doctor"/>
    
    </div>
    </main>
      </template>
      
      <script setup lang="ts">
    import client from '~/utils/client'
    
      definePageMeta({ layout: 'main' })
    
      const doctors = ref<any[]>([])
     const token = useCookie("token")
       onMounted(async ()=>{
          const req = await client().GET("/favorites/doctor")
          doctors.value = req.data?.data ?? []
          console.log(doctors.value)
       })
    
      
    
    
      </script>