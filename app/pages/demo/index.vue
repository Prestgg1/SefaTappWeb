<template>
    <div class="container mx-auto px-6 py-12">
     <PopularCart/>


    <Categories/>
      <section class="py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">{{ aiSection.title }}</h2>
            <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">{{ aiSection.description }}</p>
            <button class="mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
              Daha Ətraflı
            </button>
          </div>
          <div class="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg">
            <div class="flex items-center gap-4">
              <Icon name="smart_toy" class="text-4xl text-primary"/>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">AI Simptom Analizatoru</h3>
            </div>
            <p class="mt-3 text-gray-600 dark:text-gray-300">Simptomlarınızı daxil edin və saniyələr içində potensial səbəblər haqqında məlumat əldə edin.</p>
            <div class="mt-6 space-y-4">
              <div v-for="feature in aiSection.features" :key="feature" class="flex items-start gap-3">
                <Icon name="check_circle" class="text-primary mt-1"/>
                <p class="text-gray-700 dark:text-gray-300">{{ feature }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-16 bg-background-light dark:bg-background-dark -mx-6 px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Xidmətlərimiz</h2>
          <p class="mt-2 text-lg text-gray-500 dark:text-gray-400">Sağlamlığınızı idarə etmək üçün hərtərəfli həllər.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div v-for="service in services" :key="service.id" class="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-md text-center">
            <Icon :name="service.icon" class="text-4xl text-primary mx-auto"/>
            <h3 class="text-lg font-bold mt-4 mb-2 text-gray-900 dark:text-white">{{ service.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ service.description }}</p>
          </div>
        </div>
      </section>

    </div>
  </template>
  
  <script setup>
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  
  definePageMeta({ layout: 'main' })




  const aiSection = {
  title: 'Süni İntellekt Dəstəyi ilə Sağlamlığınızın Qeydinə Qalın',
  description: 'ŞefaTapp-ın innovativ süni intellekt alqoritmləri simptomlarınızı analiz edərək ilkin diaqnoz qoymağa və doğru mütəxəssisə yönləndirməyə kömək edir. Sağlamlığınızla bağlı suallarınıza anında cavab alın.',
  features: [
    'Sürətli və etibarlı ilkin analiz',
    'Doğru həkimə yönləndirmə',
    '7/24 xidmətinizdə'
  ]
}


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
  
  <style scoped>
  /* Custom Nav Buttons */
  .swiper-button-custom {
    position: absolute;
    top: 40%;
    z-index: 20;
    transform: translateY(-50%);
    background-color: rgba(13, 148, 136, 0.15);
    backdrop-filter: blur(8px);
    border-radius: 9999px;
    color: #0d9488;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .swiper-button-custom:hover {
    background-color: rgba(13, 148, 136, 0.3);
    transform: translateY(-50%) scale(1.1);
  }
  .swiper-button-custom.prev {
    left: -2rem;
  }
  .swiper-button-custom.next {
    right: -2rem;
  }
  
  /* Pagination Dots */
  .swiper-pagination-custom,.swiper-pagination-bullet {
    background-color: rgba(156, 163, 175, 0.4);
    opacity: 1;
  }
  .swiper-pagination-custom,.swiper-pagination .swiper-pagination-bullet-active {
    background: #0d9488 !important;
    transform: scale(1.3) !important;
    transition: all 0.3s ease !important;
  }
  </style>
  