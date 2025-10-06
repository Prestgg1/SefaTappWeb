<template>
    <section id="support" class="py-16 sm:py-20 lg:py-24">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            
            <div class="text-center mb-8 lg:mb-10">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4">
                <Icon name="mdi:email" class="material-symbols-outlined text-teal-600 dark:text-teal-400 text-2xl"/>
              </div>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Bizimlə Əlaqə
              </h2>
              <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Suallarınız var? Bizə yazın, ən qısa müddətdə sizə cavab verəcəyik.
              </p>
            </div>
    
            <div v-if="isSuccess" class="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div class="flex items-center gap-3">
                <Icon name="mdi:email" class="material-symbols-outlined text-green-600 dark:text-green-400 text-2xl"/>
                <p class="text-green-800 dark:text-green-200 font-medium">
                  Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.
                </p>
              </div>
            </div>
    
            <div class="max-w-3xl mx-auto">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Ad və Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      v-model="formData.name"
                      @input="clearError('name')"
                      :class="[
                        'w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200',
                        errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      ]"
                      placeholder="Adınızı daxil edin"
                      :disabled="isSubmitting"
                    />
                    <p v-if="errors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">
                      {{ errors.name }}
                    </p>
                  </div>
    
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      E-mail Ünvanı *
                    </label>
                    <input
                      type="email"
                      id="email"
                      v-model="formData.email"
                      @input="clearError('email')"
                      :class="[
                        'w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200',
                        errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      ]"
                      placeholder="email@example.com"
                      :disabled="isSubmitting"
                    />
                    <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">
                      {{ errors.email }}
                    </p>
                  </div>
                </div>
    
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Telefon Nömrəsi
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      v-model="formData.phone"
                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder="+994 XX XXX XX XX"
                      :disabled="isSubmitting"
                    />
                  </div>
    
                  <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mövzu *
                    </label>
                    <select
                      id="subject"
                      v-model="formData.subject"
                      @change="clearError('subject')"
                      :class="[
                        'w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200',
                        errors.subject ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      ]"
                      :disabled="isSubmitting"
                    >
                      <option value="">Mövzu seçin</option>
                      <option value="general">Ümumi sual</option>
                      <option value="support">Texniki dəstək</option>
                      <option value="appointment">Rezervasiya problemi</option>
                      <option value="billing">Ödəniş məsələləri</option>
                      <option value="partnership">Tərəfdaşlıq</option>
                      <option value="feedback">Geri bildirim</option>
                    </select>
                    <p v-if="errors.subject" class="mt-1 text-sm text-red-600 dark:text-red-400">
                      {{ errors.subject }}
                    </p>
                  </div>
                </div>
    
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    @input="clearError('message')"
                    rows="5"
                    :class="[
                      'w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none',
                      errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                    ]"
                    placeholder="Mesajınızı buraya yazın..."
                    :disabled="isSubmitting"
                  ></textarea>
                  <p v-if="errors.message" class="mt-1 text-sm text-red-600 dark:text-red-400">
                    {{ errors.message }}
                  </p>
                  <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {{ formData.message.length }}/500 simvol
                  </p>
                </div>
    
                <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <div class="flex items-start gap-3">
                    <Icon name="mdi:privacy-tip" class="text-teal-600 dark:text-teal-400 text-lg mt-0.5"/>
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Məxfiliyiniz bizim üçün vacibdir. Məlumatlarınız yalnız sizinlə əlaqə saxlamaq üçün istifadə olunur və üçüncü tərəflərlə paylaşılmır.
                      </p>
                    </div>
                  </div>
                </div>
    
                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <template v-if="isSubmitting">
                    <div class="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Göndərilir...</span>
                  </template>
                  <template v-else>
                    <Icon name="mdi:send" class="text-white text-lg mt-0.5"/>
                    <span>Mesaj Göndər</span>
                  </template>
                </button>
              </form>
            </div>
    
            <!-- Contact Info -->
            <div class="mt-12 lg:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 text-center sm:text-left max-w-4xl mx-auto">
                <div class="flex flex-col sm:flex-row items-center gap-3">
                  <div class="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <Icon name="mdi:phone" class="text-teal-600 dark:text-teal-400 text-lg"/>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">Telefon</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">+994 51 942 33 75</p>
                  </div>
                </div>
    
                <div class="flex flex-col sm:flex-row items-center gap-3">
                  <div class="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <Icon name="mdi:mail" class=" text-teal-600 dark:text-teal-400 text-lg"/>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">E-mail</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">prestgg56@gmail.com</p>
                  </div>
                </div>
    
                <div class="flex flex-col sm:flex-row items-center gap-3">
                  <div class="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                    <Icon name="mdi:schedule" class="text-teal-600 dark:text-teal-400 text-lg"/>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">İş Saatları</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">24/7 Dəstək</p>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  
  
  interface FormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
  }
  
  type Errors = Partial<Record<keyof FormData, string>>
  
  const formData = reactive<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const errors = reactive<Errors>({})
  
  const validateForm = (): boolean => {
    // Clear previous errors
    Object.keys(errors).forEach(key => delete errors[key as keyof Errors])
  
    if (!formData.name.trim()) {
      errors.name = 'Ad və soyad tələb olunur'
    }
  
    if (!formData.email.trim()) {
      errors.email = 'E-mail ünvanı tələb olunur'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Düzgün e-mail ünvanı daxil edin'
    }
  
    if (!formData.subject.trim()) {
      errors.subject = 'Mövzu tələb olunur'
    }
  
    if (!formData.message.trim()) {
      errors.message = 'Mesaj tələb olunur'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Mesaj ən az 10 simvol olmalıdır'
    }
  
    return Object.keys(errors).length === 0
  }
  
  const handleSubmit = async () => {
    if (!validateForm()) return
  
    isSubmitting.value = true
  
    try {
      const req = await fetch("https://bimonet.com/api/mail/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `\nTelefon: ${formData.phone}
          \nMövzu: ${formData.subject}
          \n
          ${formData.message}\n`
        })
      })
      const res = await req.json()
      console.log(res)
  
      isSuccess.value = true
      
      // Reset form
      formData.name = ''
      formData.email = ''
      formData.phone = ''
      formData.subject = ''
      formData.message = ''
  
      useToastify(
        "Mesajınız uğurla göndərildi!",
        {
             type:"success"
        }
      )
  
    } catch (error) {
      useToastify(
        "Xəta baş verdi. Yenidən cəhd edin.",
        {
             type:"error"
        }
      )
      isSuccess.value = false
    } finally {
      isSubmitting.value = false
    }
  }
  
  const clearError = (field: keyof FormData) => {
    if (errors[field]) {
      delete errors[field]
    }
  }
  </script>
  
  <style scoped>
  /* Əgər lazım olsa, əlavə style-lar buraya əlavə edilə bilər */
  </style>