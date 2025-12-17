<template>
  <NuxtLayout name="main">
    <div class="grow flex items-center justify-center container mx-auto px-6 py-12">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-xl shadow-md p-8">
          <slot />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.bg-primary {
  background-color: #226d63;
}

.text-primary {
  color: #226d63;
}

:deep(.focus\:ring-primary:focus) {
  --tw-ring-color: #226d63;
}
</style>