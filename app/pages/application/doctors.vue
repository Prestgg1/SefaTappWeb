<template>
    <main class="grow container mx-auto px-6 py-12">
      <div class="text-center mb-10">
        <h1 class="text-4xl font-extrabold text-gray-900">Həkimlərimiz</h1>
        <p class="mt-3 text-gray-500 ">Sağlamlığınız üçün ən yaxşı mütəxəssisləri tapın.</p>
      </div>
  
      <div class="mb-8 p-4 bg-card-light rounded-xl shadow-md grid md:grid-cols-3 gap-4">
        <input v-model="search" placeholder="Ad, soyad və ya ixtisas..." class="input pl-10" />
        <select v-model="specialization" class="input_doctors text-gray-900">
          <option>Bütün ixtisaslar</option>
          <option>Kardioloq</option><option>Pediatr</option><option>Dermatoloq</option>
          <option>Nevroloq</option><option>Ginekoloq</option><option>Oftalmoloq</option>
        </select>
        <button @click="filterDoctors" class="btn-primary flex items-center justify-center gap-2">
          <Icon name="mdi:filter-variant" /> Filterlə
        </button>
      </div>
  
      <div v-if="loading" class="text-center text-gray-500 mt-10">Yüklənir...</div>
      <div v-else-if="!doctors.length" class="text-center text-gray-500 mt-10">Həkim tapılmadı.</div>
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <DoctorCart v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
  definePageMeta({ layout: "main" })
  
  const search = ref(route.query.search?.toString() || "")
  const specialization = ref("Bütün ixtisaslar")
  const doctors = ref<Doctors>([])
  const loading = ref(true)
  
  const fetchDoctors = async () => {
    loading.value = true
    const query: any = {}
    if (search.value) query.search = search.value
    if (specialization.value !== "Bütün ixtisaslar") query.category = specialization.value
    await navigateTo({ path: route.path, query }, { replace: true })
    try {
      const { data } = await client.GET("/doctors", { params: { query } })
      doctors.value = data ?? []
    } catch {
      doctors.value = []
    } finally {
      loading.value = false
    }
  }
  
  onMounted(fetchDoctors)
  const filterDoctors = fetchDoctors
  </script>
  
  <style scoped>
  
  
  </style>
  