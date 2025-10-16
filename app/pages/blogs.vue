<template>
    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="py-16 md:py-24">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              ŞefaTapp Blogu
            </h1>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Ən son sağlamlıq və rifah məsləhətləri, tətbiq yeniləmələri və daha çoxu ilə güncəl qalın.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Blog Cards -->
      <section class="pb-16 md:pb-24">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            <BlogCard
              v-for="(post, index) in posts"
              :key="index"
              :title="post.title"
              :description="post.description"
              :image="post.image"
              :link="post.link"
            />
  
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import BlogCard from '~/components/BlogCard.vue'
  
  const posts = [
    {
      title: 'Stressin İdarə Edilməsi üçün Əsas Bələdçi',
      description: 'Stresi idarə etmək və zehni rifahınızı yaxşılaşdırmaq üçün effektiv texnikaları öyrənin. Bu əhatəli bələdçi diqqət mərkəzində olmaqdan məşqə qədər hər şeyi əhatə edir.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKFksBNocSRuvTAFm--RWk1wKozCpcjkSpCYgaf6i25OxkO7Th_i_djCT-Trc2XnFgCMsUShyvvHnv2LvZ2N8LZbeR76sIdo4ND3ro62fkM0yRjtUR3zBXEqaMNUhxULkvMEIfLcxBlyqNsv1D90pwoSbtUCBVjrjbnEPL6Tsyr9loFT_sUwXSOfPPVdEIGlEpNdkGXhGdGxdarZzQX-uH9x9pKuH6uNWaP0HCfjnCpnzzoN47nTlysFDS2JyXr_ix-9dZu5gfIZbv',
      link: '/stress-idaresi'
    },
  ]
  </script>
  