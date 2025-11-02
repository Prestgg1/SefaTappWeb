<template>
    <aside class="w-80 bg-card-light  border-r border-border-light  flex flex-col">
      <div class="p-4 border-b border-border-light  flex items-center gap-3">
        <h2 class="text-xl font-bold text-gray-900 ">Mesajlar</h2>
      </div>
  
      <div class="grow overflow-y-auto">
        <div class="p-4">
          <div class="relative mb-4">
            <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Axtarış..."
              class="w-full  border border-border-light rounded-full py-2 pl-10 pr-4 text-sm text-gray-600 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
  
        <nav class="flex flex-col">
          <NuxtLink
            to="/application/reservations/0"
            class="flex items-center gap-4 px-4 py-3 bg-primary/10 dark:bg-primary/20 border-l-4 border-primary"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuHbACFghDKiQqMYFhdgCIeNzJzmO8kEJA1eMmmKBRTFIf4Yse3wPekFR58fdW9j-BgypV22vZS8xpOn4nj_B-CRUcpbtNQWx07DwmzxO2ZHueEqANY4wqwHRsSEl6NI-78kFAnstU0U6JO6iu_J0sLN0_haeJ6JcbLVLa7Wxqyaq2ooHborY8pcuN6tlhzqUoW1sYvcFMLAKOl5yLWvTjyerq6HJCzNd5RFVRL_StZCSSplQ_miof4Sl9TaH9z698Lp9jIUqcsqz1"
              alt="Şəfatapp AI"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h3 class="font-bold text-gray-900 ">Şəfatapp AI</h3>
                <span class="text-xs text-gray-500 ">10:42</span>
              </div>
              <p class="text-sm text-primary mt-1">Sizə necə kömək edə bilərəm?</p>
            </div>
          </NuxtLink>
  
          <a
            href="#"
            class="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 transition-colors"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZqF4aTg1-QeILQ02J5grgDuY5WX9VEItlHQBCdwvDx-NMsaI3l-DVDnzevPE1bm4xgzO1fWx2fhTJJXIi3Ju807P7hT2TWe_EuB7ZsipHlWHAkXRJ07Fu0Dnof9o-18ZsWjPUeRXaa6UTHQguak-PfMYIAwZfXXxyu7iTxX8gaazrqH1UBP6O7Tzh5u9jBdZWwl9v_-FueWJrZtc4rW7YElTY9h1uGIhTZ_3j1Ix_r9u92F8ndU5suESq50UaD82cdpjjCWmeFQHr"
              alt="Dr. Leyla Əliyeva"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h3 class="font-semibold text-gray-900 ">Dr. Leyla Əliyeva</h3>
                <span class="text-xs text-gray-500 ">Dünən</span>
              </div>
              <p class="text-sm text-gray-500 mt-1">
                Analizlərin nəticələri hazırdır.
              </p>
            </div>
          </a>
        </nav>
      </div>
    </aside>
  </template>
