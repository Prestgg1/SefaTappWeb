<template>
    <div class="mt-2 max-h-[70vh] overflow-y-auto pr-2">
      <form @submit.prevent="submitForm" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Ad</label>
            <input v-model="form.name" type="text" placeholder="Adınız" class="input" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input v-model="form.email" type="email" placeholder="email@nümunə.com" class="input" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Şifrə</label>
            <input v-model="form.password" type="password" placeholder="••••••••" class="input" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefon</label>
            <input v-model="form.phone" type="tel" placeholder="+994 (XX) XXX-XX-XX" class="input" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">FIN Kodu</label>
            <input v-model="form.fin" type="text" placeholder="1234567" class="input" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Cins</label>
            <select v-model="form.gender" class="input">
              <option>Seçin</option>
              <option value="male">Kişi</option>
              <option value="female">Qadın</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Doğum tarixi</label>
            <input v-model="form.birthdate" type="date" class="input" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Şəhər</label>
            <input v-model="form.city" type="text" placeholder="Bakı" class="input" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Rayon / Qəsəbə</label>
            <input v-model="form.district" type="text" placeholder="Nəsimi" class="input" />
          </div>

          <div class="sm:col-span-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Ünvan</label>
            <textarea v-model="form.address" rows="3" placeholder="Küçə, bina, mənzil" class="input"></textarea>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            @click="emit('close')"
            class="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Ləğv Et
          </button>
          <button
            type="submit"
            class="w-full sm:w-auto px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition"
          >
            Qeydiyyatdan Keç
          </button>
        </div>
      </form>
    </div>
</template>

<script setup lang="ts">
import client from '~/utils/useApi';
const toast = useToast()
const token = useCookie("token")
const user = useState<User | null>("user", () => null)
const emit = defineEmits(['close'])

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
  address: '',
})



async function submitForm() {
    const req = await client.POST("/api/auth/register", {
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    body:{
      name: form.name,
      email: form.email,
      password: form.password,
      finCode: form.fin,
      gender: form.gender as "male" | "female",
      phone: form.phone,
      birthday: form.birthdate,
      city: form.city,
      address: form.address,
      region: form.district,
      street: form.address,
    }
  })
   if(req.error && req.error?.detail){
     for(const error of req.error?.detail){
      toast.add({
        title: "Xəta",
        description: error.msg,
        type: "background",
        color: "error",
        
      })
     }
   }
   if(req.data){
    toast.add({
      title: "Məlumat",
      description: "Qeydiyyatdan keçdiniz.",
      type: "background",
      color: "success",      
    })
    token.value = req.data.token
    user.value = req.data.user
    emit('close')

   }
}
</script>

