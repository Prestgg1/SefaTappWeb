<!-- SEO meta tags -->
<script setup>
useHead({
  title: 'ŞefaTapp - Sağlam və Rahat',
  meta: [
    {
      name: 'description',
      content:
        'ŞefaTapp, həkimlərə problemsiz giriş, süni intellekt dəstəyi, canlı müayinələr, klinika rezervasiyaları və aptek məhsulları təklif edən vahid sağlamlıq yoldaşınızdır.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { property: 'og:title', content: 'ŞefaTapp - Sağlamlığınız, Sadələşdirilmiş' },
    {
      property: 'og:description',
      content: 'Həkimlərə problemsiz giriş, süni intellekt dəstəyi və daha çoxu. Sağlamlığınızı idarə edin.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'ŞefaTapp - Sağlamlığınız, Sadələşdirilmiş' },
    {
      name: 'twitter:description',
      content: 'Həkimlərə problemsiz giriş, süni intellekt dəstəyi və daha çoxu. Sağlamlığınızı idarə edin.',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap',
    },
  ],
})
</script>

<template>

<div class="relative w-full  min-h-screen  flex flex-col bg-gray-50 transition-colors duration-300">
  <MainHeader />

  <slot />
    </div>
    <Footer />
</template>
  

<style>

::-webkit-scrollbar {
    width: 6px;
  }

.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} 

</style>
