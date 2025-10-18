<template>
  <main
    class="flex-grow container mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-3xl mx-auto">
      <!-- Başlıq və Əməliyyatlar -->
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
      >
        <h1
          class="text-3xl font-extrabold text-gray-900 dark:text-gray-100 transition-colors"
        >
          Bildirişlər
        </h1>

        <div class="flex items-center gap-4">
          <button
            class="text-sm font-medium text-primary hover:underline whitespace-nowrap transition-colors"
          >
            Hamısını oxunmuş kimi işarələ
          </button>
          <button
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Icon
              name="mdi:settings"
              class="text-gray-600 dark:text-gray-300"
            />
          </button>
        </div>
      </div>

      <!-- Bildirişlər siyahısı -->
      <div
        class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
      >
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          <!-- Bildiriş -->
          <li
            v-for="(item, index) in notificationss"
            :key="index"
            class="p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer relative"
          >
            <div
              v-if="item.unread"
              class="w-2.5 h-2.5 bg-primary rounded-full absolute top-1/2 -translate-y-1/2 left-3 sm:left-4"
            ></div>

            <div
              class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ml-5"
              :class="item.bg"
            >
              <Icon :name="item.icon" :class="item.iconColor" />
            </div>

            <div class="flex-1">
              <p class="font-semibold text-gray-800 dark:text-gray-100">
                {{ item.title }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ item.description }}
              </p>
            </div>

            <div class="text-right">
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ item.time }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'main'
})


onMounted(async () => {
 try{
  const req =await useServer().GET("/api/notifications")
  console.log(req)
 } catch (error) {
  console.log(error)
 } 

})

const notificationss = [
  {
    title: "Görüş xatırlatması",
    description: "Dr. Leyla Əliyeva ilə olan görüşünüz sabah saat 10:00-dadır.",
    icon: "mdi:calendar-blank-outline",
    bg: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-600 dark:text-blue-300",
    time: "5 dəq əvvəl",
    unread: true,
  },
  {
    title: "Yeni mesaj",
    description: "Dr. Elvin Quliyev sizə yeni bir mesaj göndərdi.",
    icon: "mdi:chat",
    bg: "bg-green-100 dark:bg-green-900/50",
    iconColor: "text-green-600 dark:text-green-300",
    time: "1 saat əvvəl",
    unread: true,
  },
  {
    title: "Reçetə təsdiqləndi",
    description: "Aptek sifarişiniz təsdiqləndi və hazırlanır.",
    icon: "mdi:check",
    bg: "bg-purple-100 dark:bg-purple-900/50",
    iconColor: "text-purple-600 dark:text-purple-300",
    time: "3 saat əvvəl",
    unread: false,
  },
  {
    title: "Sistem yenilənməsi",
    description: "Tətbiq yeni funksiyalarla yeniləndi. İndi yoxlayın!",
    icon: "mdi:update",
    bg: "bg-yellow-100 dark:bg-yellow-900/50",
    iconColor: "text-yellow-600 dark:text-yellow-300",
    time: "Dünən",
    unread: false,
  },
  {
    title: "Ödəniş uğursuz oldu",
    description:
      "Sonuncu rezervasiya üçün ödənişiniz uğursuz oldu. Zəhmət olmasa, ödəniş məlumatlarınızı yoxlayın.",
    icon: "mdi:error",
    bg: "bg-red-100 dark:bg-red-900/50",
    iconColor: "text-red-600 dark:text-red-300",
    time: "2 gün əvvəl",
    unread: false,
  },
  {
    title: "Görüş təsdiqləndi",
    description:
      "Dr. Aysel Məmmədova ilə olan görüşünüz 25 Aprel saat 14:30-a təsdiqləndi.",
    icon: "mdi:calendar-check",
    bg: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-600 dark:text-blue-300",
    time: "3 gün əvvəl",
    unread: false,
  },
];
</script>

  