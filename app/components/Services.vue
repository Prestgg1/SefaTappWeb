<template>
    <section class="py-16  -mx-6 px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">Xidmətlərimiz</h2>
        <p class="mt-2 text-lg text-gray-500">Sağlamlığınızı idarə etmək üçün hərtərəfli həllər.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="service in services" :key="service.id" class="bg-card-light p-6 rounded-xl shadow-md text-center">
          <Icon :name="service.icon" class="text-4xl text-primary mx-auto"/>
          <h3 class="text-lg font-bold mt-4 mb-2 text-gray-900">{{ service.title }}</h3>
          <p class="text-sm text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </section>

</template>
<script setup lang="ts">
const services = [
{
  id: 1,
  icon: 'mdi:event_available',
  title: 'Həkim Randevusu',
  description: 'Asanlıqla onlayn həkim görüşü təyin edin.'
},
{
  id: 2,
  icon: 'mdi:medical_information',
  title: 'Elektron Tibbi Kart',
  description: 'Sağlamlıq məlumatlarınızı təhlükəsiz saxlayın.'
}
]
</script>
