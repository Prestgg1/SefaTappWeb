<template>
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
          Hesab Məlumatları
        </h1>
  
        <div class="bg-card-light rounded-xl shadow-md p-6 sm:p-8">
          <!-- Profile Header -->
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 border-b border-gray-200 pb-8">
            <div class="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWZ7_UiwutoKLER_ik1ox8wmjGmmlgHyV-EDOEvKkXhAO2dw_fjsvkvjsz-GfwhfP5SJYsddVTJuepay5YuS-D8dUVrAZYKLnBj4sMfpnUU6YqrTWuEuvD6SXOd_wZmJLeYfTeS50uOv0pQZQHjJUN50uhc_TsvVMuD6-Wn1b7vmVTw9dXA4dtxkyLQ5MN-yZTu-k_bUzs-3DX9ECTRCiRUzQOUsCg9YRGRNiQ0CpVc8FUeSiA8xWLJ9F9v_6l7HR1KZ8ezMy5XUlH"
                alt="User Profile Picture"
                class="w-32 h-32 rounded-full object-cover ring-4 ring-primary/20"
              />
              <button
                class="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full hover:bg-primary/90 transition-colors shadow-md"
              >
                <Icon name="mdi:pencil-outline" class="text-sm" />
              </button>
            </div>
  
            <div class="text-center sm:text-left grow">
              <h2 class="text-2xl font-bold text-gray-900">Aydan Əliyeva</h2>
              <p class="text-md text-gray-500 mt-1">aydan.aliyeva@example.com</p>
  
              <div class="mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3">
                <button
                  class="w-full sm:w-auto bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="mdi:pencil-outline" class="text-base" />
                  Profili Redaktə Et
                </button>
                <button
                  class="w-full sm:w-auto bg-gray-200 text-gray-800 text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="mdi:lock-reset" class="text-base" />
                  Şifrəni Dəyiş
                </button>
              </div>
            </div>
          </div>
  
          <!-- Personal Information -->
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Şəxsi Məlumatlar
              </h3>
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div class="flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">Ad</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">Aydan Əliyeva</dd>
                </div>
                <div class="flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">FIN Kodu</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">7ABCDEF</dd>
                </div>
                <div class="flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">Cins</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">Qadın</dd>
                </div>
                <div class="flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">Doğum tarixi</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">15.05.1990</dd>
                </div>
              </dl>
            </div>
  
            <!-- Contact Information -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Əlaqə Məlumatları
              </h3>
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div class="flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">Email</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">aydan.aliyeva@example.com</dd>
                </div>
                <div class="flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">Telefon</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">+994 (50) 123-45-67</dd>
                </div>
                <div class="flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">Şəhər</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">Bakı</dd>
                </div>
                <div class="flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">Rayon/Qəsəbə</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">Nəsimi</dd>
                </div>
                <div class="sm:col-span-2 flex flex-col">
                  <dt class="text-sm font-medium text-gray-500">Ünvan</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-800">
                    Səməd Vurğun küçəsi, ev 34, mənzil 12
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
