<template>
    <section id="features" class="py-16 sm:py-20 lg:py-24">
      <div class="container mx-auto px-4 sm:px-6">
        <!-- Header -->
        <div class="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900  mb-4">
            Əsas Xüsusiyyətlər
          </h2>
          <p class="text-base sm:text-lg text-gray-600  leading-relaxed">
            ŞefaTapp sağlamlığınızı effektiv idarə etmək üçün hərtərəfli alətlər dəsti təqdim edir.
          </p>
        </div>
  
        <!-- Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            :class="[
              feature.special
                ? 'bg-gradient-to-br from-teal-50 to-teal-100  border-2 border-teal-200 '
                : 'bg-white  border border-gray-200',
              'rounded-xl p-6 lg:p-8 flex flex-col items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group'
            ]"
          >
            <!-- Icon -->
            <div 
  :class="[
    feature.special ? 'bg-teal-600/20 ' : 'bg-teal-600/10 ',
    'p-3 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'
  ]"
>

            <!-- Buradaki iconlar tam istediyim gibi hizanlanmamış ortalanmamış -->
              <Icon :name="'mdi:'+feature.icon" class=" transition-transform text-teal-600  text-3xl" />
            </div>
  
            <!-- Content -->
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-gray-900  group-hover:text-teal-600 transition-colors">
                {{ feature.title }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600  leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const features = ref([
    {
      icon: 'calendar',
      title: 'Həkim Rezervasiya',
      description: 'Bölgənizdəki ən yaxşı həkimlərlə görüş təyin edin.',
      special: false
    },
    {
      icon: 'robot',
      title: 'Süni İntellekt Dəstəyi',
      description: 'Süni intellekt köməkçimizdən dərhal sağlamlıq məsləhətləri və dəstək alın.',
      special: false
    },
    {
      icon: 'monitor',
      title: 'Canlı Müayinələr',
      description: 'Canlı müayinələrlə sağlamlıq göstəricilərinizi real vaxtda izləyin.',
      special: false
    },
    {
      icon: 'hospital',
      title: 'Klinika Rezervasiyaları',
      description: 'Klinika və xəstəxanalarda yerinizi asanlıqla rezerv edin.',
      special: false
    },
    {
      icon: 'pill',
      title: 'Aptek Məhsulları',
      description: 'Dərmanlarınızı və sağlamlıq məhsullarınızı birbaşa tətbiqdən alın.',
      special: false
    },
    {
      icon: 'new-releases', 
      title: 'Və Daha Çox...',
      description: 'Təcrübənizi yaxşılaşdırmaq üçün daim yeni funksiyalar əlavə edirik.',
      special: true
    }
  ])
  </script>
  