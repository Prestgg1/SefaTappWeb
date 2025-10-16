<template>
    <main class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      <!-- Hero Section -->
      <section
        class="relative flex items-center justify-center text-center h-[60vh] sm:h-[70vh] bg-cover bg-center rounded-b-3xl overflow-hidden"
        style='background-image: url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop");'
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 dark:from-black/50 dark:to-black/80"></div>
        <div class="relative z-10 px-6 sm:px-8 max-w-3xl text-white">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            ŞefaTapp Haqqında
          </h1>
          <p class="mt-4 text-lg sm:text-xl text-gray-200">
            ŞefaTapp, səhiyyə idarəçiliyini sadələşdirərək tibbi xidmətlərə çıxışı artırmaq məqsədi daşıyır. 
            Biz fərdləri sağlamlıq səyahətlərini öz əllərinə almağa təşviq edirik.
          </p>
        </div>
      </section>
  
      <!-- Mission Section -->
      <section class="py-16 sm:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div class="container mx-auto px-6 sm:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Missiyamız
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ŞefaTapp-da biz inanırıq ki, sağlamlığınızı idarə etmək sadə və əlçatan olmalıdır.
            Tətbiqimiz görüşlərin planlaşdırılmasından tibbi qeydlərə qədər prosesi asanlaşdırır.
          </p>
        </div>
      </section>
  
      <!-- Team Section -->
      <section class="py-16 sm:py-24 bg-primary/10 dark:bg-primary/20">
        <div class="container mx-auto px-6 sm:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Komandamızla Tanış Olun
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div
              v-for="(member, index) in team"
              :key="index"
              class="flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300"
            >
              <img
                :src="member.image"
                :alt="member.name"
                class="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-primary/40 mb-4"
              />
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ member.name }}</h3>
              <p class="text-primary font-medium">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Values Section -->
      <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="container mx-auto px-6 sm:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Əsas Dəyərlərimiz
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(value, index) in values"
              :key="index"
              class="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <div class="flex justify-center mb-5">
                <div class="bg-primary/10 text-primary p-4 rounded-full" v-html="value.icon"></div>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ value.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ value.text }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  const team = [
    {
      name: "Akif Əzizov",
      role: "CEO",
      image: "/images/akif.jpg",
    },
    {
      name: "Elnur Məmmədov",
      role: "Team Leader, HR",
      image: "/images/elnur.jpg",
    },
    {
      name: "Aynurə Azayeva",
      role: "SMM",
      image: "/images/aynure.jpg",
    },
    {
      name: "Həsənova Şəbnəm",
      role: "Layihə Rəhbəri",
      image: "/images/sebnem.jpg",
    },
    {
      name: "Səbuhi Sarıyev",
      role: "FullStack Developer",
      image: "/images/sabuhi.jpg",
    },
    {
      name: "Toğrul Ağayev",
      role: "Frontend Developer",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    {
      name: "Aysun Tağızadə",
      role: "Mobile Developer",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    }
  ];
  
  const values = [
    {
      title: "Xəstə Mərkəzli",
      text: "İstifadəçilərimizin ehtiyaclarını və rifahını prioritet hesab edirik, onların səhiyyə təcrübəsini artırmağa çalışırıq.",
      icon: `<svg fill="currentColor" height="32" width="32" viewBox="0 0 256 256"><path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z"></path></svg>`,
    },
    {
      title: "Dürüstlük",
      text: "Əməliyyatlarımızda şəffaflıq və dürüstlük prinsiplərinə sadiq qalırıq.",
      icon: `<svg fill="currentColor" height="32" width="32" viewBox="0 0 256 256"><path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Z"></path></svg>`,
    },
    {
      title: "İcma",
      text: "İnklüziv və dəstəkləyici icma yaradır, sağlamlıq və rifahı təşviq edirik.",
      icon: `<svg fill="currentColor" height="32" width="32" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92Z"></path></svg>`,
    },
  ];
  </script>
  