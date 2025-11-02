<template>
    <section class="py-20 sm:py-24 bg-gray-50  transition-colors duration-300">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto text-center mb-12">
          <h2 class="text-4xl font-extrabold tracking-tight text-gray-900  sm:text-5xl">
            Tez-tez Verilən Suallar
          </h2>
          <p class="mt-4 text-lg text-gray-600 ">
            ŞefaTapp haqqında suallarınıza cavab tapın.
          </p>
        </div>
  
        <div class="max-w-3xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-gray-200  rounded-xl overflow-hidden bg-white  backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              @click="toggle(index)"
              class="w-full flex items-center justify-between text-left p-5"
            >
              <span class="font-semibold text-gray-800 ">
                {{ faq.question }}
              </span>
              <Icon
                :name="faq.open ? 'mdi:minus' : 'mdi:plus'"
                class="text-primary text-xl transition-transform duration-200"
                :class="{ 'rotate-180': faq.open }"
              />
            </button>
  
            <Transition name="fade">
              <div
                v-show="faq.open"
                class="px-5 pb-5 pt-0 border-t border-gray-100 "
              >
                <p class="text-gray-700  leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const faqs = ref([
    {
      question: 'SefaTapp nədir və nə üçün istifadə olunur?',
      answer:
        'SefaTapp, online rezervasiya platformasıdır. İstifadəçilər həkimlər üçün növbə gözləmədən yer rezervasiya edə bilirlər.',
      open: false,
    },
    {
      question: 'SefaTapp-dan istifadə etmək üçün qeydiyyat tələb olunurmu?',
      answer: 'Bəli, qeydiyyat tələb olunur və tamamilə pulsuzdur.',
      open: false,
    },
    {
      question: 'SefaTapp mobil və veb platformada eyni şəkildə işləyir?',
      answer:
        'Xeyr. Hal-hazırda bütün funksionallıqlar yalnız mobil tətbiqdə mövcuddur. Tətbiqi yükləyərək istifadə edə bilərsiniz.',
      open: false,
    },
    {
      question: 'Hər hansı bir texniki problem yaşadığım zaman kimə müraciət edə bilərəm?',
      answer:
        'Bizim rəsmi veb saytımızdan əlaqə forması və digər əlaqə vasitələri ilə bizə yazmaq mümkündür. Eyni zamanda sosial media hesablarımızdan da dəstək ala bilərsiniz.',
      open: false,
    },
  ])
  
  const toggle = (index) => {
    faqs.value[index].open = !faqs.value[index].open
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }
  </style>
  