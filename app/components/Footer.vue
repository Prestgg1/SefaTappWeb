<template>
    <footer class="bg-white border-t border-gray-200">
    <div class="container mx-auto px-4 sm:px-6 py-8 lg:py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <svg class="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_6_535)">
                <path 
                  clip-rule="evenodd" 
                  d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" 
                  fill="currentColor" 
                  fill-rule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_535">
                  <rect fill="white" height="48" width="48"/>
                </clipPath>
              </defs>
            </svg>
            <h3 class="text-xl font-bold text-gray-900 ">ŞefaTapp</h3>
          </div>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Sağlamlığınızı sadələşdirən, hərtərəfli sağlamlıq həlli. Həkimlərdən tutmuş apteklərə qədər hər şey bir tətbiqdə.
          </p>
          
          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <a target="_blank" href="https://www.facebook.com/sefatapp/" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 transition-colors">
              <Icon name="mdi:facebook" class="material-symbols-outlined text-gray-600  hover:text-teal-600">
                facebook
              </Icon>
            </a>
            <a target="_blank" href="https://twitter.com/sefatapp" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 transition-colors">
              <Icon name="mdi:twitter" class="material-symbols-outlined text-gray-600  hover:text-teal-600">
                twitter
              </Icon>
            </a>
            <a target="_blank" href="https://www.instagram.com/sefatapp/" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 transition-colors">
              <Icon name="mdi:instagram" class="material-symbols-outlined text-gray-600  hover:text-teal-600">
                instagram
              </Icon>
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/sefatapp/" class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 transition-colors">
              <Icon name="mdi:linkedin" class="material-symbols-outlined text-gray-600  hover:text-teal-600">
                linkedin
              </Icon>
            </a> 
          </div>
        </div>
  
        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Sürətli Keçidlər</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink href="/about" class="text-sm text-gray-600  hover:text-teal-600 transition-colors">
                Haqqımızda
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="/blogs" class="text-sm text-gray-600  hover:text-teal-600 transition-colors">
                Bloglar
              </NuxtLink>
            </li>
            <li>
            <!--   <NuxtLink href="/careers" class="text-sm text-gray-600  hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Karyera
              </NuxtLink> -->
            </li>
          </ul>
        </div>
  
        <!-- Support -->
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Dəstək</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink href="/support" class="text-sm text-gray-600  hover:text-teal-600 transition-colors">
                Yardım Mərkəzi
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="/contact" class="text-sm text-gray-600  hover:text-teal-600 transition-colors">
                Bizimlə Əlaqə
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="/faq" class="text-sm text-gray-600  hover:text-teal-600 transition-colors">
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="/support" class="text-sm text-gray-600  hover:text-teal-600 transition-colors">
                Texniki Dəstək
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Bottom Footer -->
      <div class="border-t border-gray-200 pt-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <!-- Legal Links -->
          <div class="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
            <a class="text-sm text-gray-500  hover:text-teal-600 transition-colors" href="#">
              Məxfilik Siyasəti
            </a>
            <a class="text-sm text-gray-500  hover:text-teal-600 transition-colors" href="#">
              Xidmət Şərtləri
            </a>
            <a class="text-sm text-gray-500  hover:text-teal-600 transition-colors" href="#">
              Cookie Siyasəti
            </a>
          </div>
  
          <!-- Copyright -->
          <p class="text-sm text-gray-500  text-center sm:text-right">
            © 2025 ŞefaTapp. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>