<template>
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Main Heading -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900  mb-6">
            Bu gün ŞefaTapp ilə başlayın
          </h2>
          
          <!-- Description -->
          <p class="text-base sm:text-lg lg:text-xl text-gray-600  leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto">
            İstifadəsi asan mobil tətbiqimizlə sağlamlığınıza nəzarət edin. İndi yükləyin və səhiyyənin gələcəyini təcrübədən keçirin.
          </p>
    
          <!-- Download Button -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              @click="downloadApp" 
              class="w-full sm:w-auto bg-teal-600 text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span class="flex items-center justify-center gap-2">
                <span>İndi Yüklə</span>
                    <Icon name="mdi:download" class="group-hover:translate-x-1 transition-transform text-white text-2xl" />
              </span>
            </button>
            
            <!-- Additional Info -->
            <div class="flex items-center gap-2 text-sm text-gray-500 ">
                <Icon name="mdi:verified" class="group-hover:translate-x-1 transition-transform text-teal-600  text-2xl" />
              <span>Pulsuz yüklənmə</span>
            </div>
          </div>
    
          <!-- Features List -->
          <div class="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div class="flex flex-col items-center text-center p-4">
              <div class="w-12 h-12 bg-teal-100  rounded-full flex items-center justify-center mb-3">
                    <Icon name="mdi:smartphone" class="group-hover:translate-x-1 transition-transform text-teal-600  text-2xl" />
              </div>
              <h3 class="font-semibold text-gray-900  mb-1">Mobil Tətbiq</h3>
              <p class="text-sm text-gray-600  ">iOS və Android üçün mövcuddur</p>
            </div>
    
            <div class="flex flex-col items-center text-center p-4">
              <div class="w-12 h-12 bg-teal-100  rounded-full flex items-center justify-center mb-3">
                    <Icon name="mdi:security"  class="group-hover:translate-x-1 transition-transform text-teal-600  text-2xl"/>
              </div>
              <h3 class="font-semibold text-gray-900  mb-1">Təhlükəsiz</h3>
              <p class="text-sm text-gray-600  ">256-bit SSL şifrələmə</p>
            </div>
    
            <div class="flex flex-col items-center text-center p-4">
              <div class="w-12 h-12 bg-teal-100  rounded-full flex items-center justify-center mb-3">
                    <Icon name="mdi:support"  class="group-hover:translate-x-1 transition-transform text-teal-600  text-2xl"/>
              </div>
              <h3 class="font-semibold text-gray-900  mb-1">24/7 Dəstək</h3>
              <p class="text-sm text-gray-600  ">Həmişə yanınızdayıq</p>
            </div>
    
            <div class="flex flex-col items-center text-center p-4">
              <div class="w-12 h-12 bg-teal-100  rounded-full flex items-center justify-center mb-3">
                    <Icon name="mdi:update"  class="group-hover:translate-x-1 transition-transform text-teal-600  text-2xl"/>
              </div>
              <h3 class="font-semibold text-gray-900  mb-1">Daimi Yenilənmə</h3>
              <p class="text-sm text-gray-600  ">Yeni funksiyalar əlavə edilir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade"
      >
        <div
          class="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center transform transition duration-500 scale-100 animate-pop"
        >
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Seçdiyiniz üçün təşəkkürlər 🎉
          </h2>
          <p class="text-gray-600">Yükləmə avtomatik başladı...</p>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showModal = ref(false)
  
  const downloadApp = () => {
    // Endirmə başlasın
    window.location.href =
      "https://github.com/Prestgg1/FlutterApp/releases/download/Android/app-release.apk"
  
    // Modal aç
    showModal.value = true
  
    // 3 saniyə sonra modalı bağla
    setTimeout(() => {
      showModal.value = false
    }, 3000)
  }
  </script>
  
  <style scoped>
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes pop {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  .animate-fade {
    animation: fade 0.3s ease-out;
  }
  .animate-pop {
    animation: pop 0.4s ease-out;
  }
  </style>