<template>
    <section class="py-20 bg-card-light dark:bg-card-dark">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Bizimlə Əlaqə</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          Hər hansı sualınız varsa, bizimlə əlaqə saxlamaqdan çəkinməyin.
        </p>
        <form class="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Adınız"
            class="w-full p-3 border border-gray-300 rounded-lg dark:bg-card-dark dark:border-gray-700"
          />
          <input
            type="email"
            placeholder="E-mail"
            class="w-full p-3 border border-gray-300 rounded-lg dark:bg-card-dark dark:border-gray-700"
          />
          <textarea
            placeholder="Mesajınız"
            class="w-full p-3 border border-gray-300 rounded-lg dark:bg-card-dark dark:border-gray-700 h-32"
          ></textarea>
          <button
            type="submit"
            class="bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Göndər
          </button>
        </form>
      </div>
    </section>
  </template>
  