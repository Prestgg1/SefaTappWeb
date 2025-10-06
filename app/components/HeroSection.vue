<template>
    <section id="home" class="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-center text-white">
      <!-- Background Image with Gradient Overlay -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 80%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0S9JFOiywF_E-zqW_75Ef4cWtuy2k2l_yMnyXRt7kI6mwUh1icYCmZ8V85g04Cx7eCLWVAqThXtolwRsoSUyCyCtkFO4I9jY9ayFfJ1XF6Z7SMnKj-2N1dVCrCyZnXun2mZgKTdGnmv31tZbCmfqKTVbfNoELv3FGgro7lOgJ9SDBjmDZRngU70s1eO2AH7kz_p4SeRv5abDF1dVx6hDt4f3pyJQwcBOJHKPa3W_EmqKOtB2AcY-Bbf3IzXXvMIZlZmWs4pWBNJm6')`
        }"
      ></div>
  
      <!-- Content -->
      <div class="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center gap-6 sm:gap-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-5xl">
          Sağlamlığınızı Asanlaşdırın, Hər An Yanınızda!
        </h1>
        <p class="max-w-2xl text-base sm:text-lg text-gray-200 leading-relaxed px-4">
          ŞefaTapp ilə həkim konsultasiyaları, süni intellekt dəstəyi, canlı müayinələr və aptek xidmətləri bir arada! Sağlamlığınızı idarə etmək heç bu qədər rahat olmamışdı.
        </p>
        <button
          @click="downloadApp"
          class="bg-teal-600 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          Tətbiqi Yükləyin
        </button>
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
    // Yükləməni başlat
    window.location.href =
      "https://github.com/Prestgg1/FlutterApp/releases/download/Android/app-release.apk"
    
    // Modalı göstər
    showModal.value = true
    
    // 3 saniyə sonra gizlət
    setTimeout(() => {
      showModal.value = false
    }, 3000)
  }
  </script>
  
  <style scoped>
  /* sadə animasiyalar */
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