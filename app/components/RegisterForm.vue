<template>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput v-model="form.name" label="Ad" placeholder="Adınız" />
        <FormInput v-model="form.email" label="Email" type="email" placeholder="email@nümunə.com" />
        <FormInput v-model="form.password" label="Şifrə" type="password" placeholder="••••••••" />
        <FormInput v-model="form.phone" label="Telefon" type="tel" placeholder="+994 (XX) XXX-XX-XX" />
        <FormInput v-model="form.fin" label="FIN Kodu" placeholder="1234567" />
        
        <FormSelect 
          v-model="form.gender" 
          label="Cins" 
          :options="['Seçin', 'Kişi', 'Qadın']" 
        />
        
        <FormInput v-model="form.birthdate" label="Doğum tarixi" type="date" />
        <FormInput v-model="form.city" label="Şəhər" placeholder="Bakı" />
        <FormInput v-model="form.district" label="Rayon / Qəsəbə" placeholder="Nəsimi" />
        
        <FormTextarea
          v-model="form.address" 
          label="Ünvan" 
          placeholder="Küçə, bina, mənzil" 
          class="sm:col-span-2" 
        />
      </div>
  
      <FormActions
        cancel-label="Ləğv Et"
        submit-label="Qeydiyyatdan Keç"
        @cancel="$emit('cancel')"
      />
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import FormInput from './FormInput.vue'
  import FormSelect from './FormSelect.vue'
  import FormTextarea from './FormTextarea.vue'
  import FormActions from './FormActions.vue'
  
  const emit = defineEmits(['submit', 'cancel'])
  
  const form = reactive({
    name: '',
    email: '',
    password: '',
    phone: '',
    fin: '',
    gender: '',
    birthdate: '',
    city: '',
    district: '',
    address: ''
  })
  
  const handleSubmit = () => {
    emit('submit', { ...form })
  }
  </script>