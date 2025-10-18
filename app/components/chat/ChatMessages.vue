<template>
    <div class="flex-1 overflow-y-auto p-6 space-y-6">
      <ChatMessage
        type="incoming"
        avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCMVtxHQIr5ZAkN0CChT0QLbjWtPuXojuR5rKlv1Q37YS_6uxGyJEtam9ZK5fqsXRKaHfXLpzX2NXcjsqIuQ7HEfhOrMT_qsaFTOXramrhVLfr7cAAeUIZXX6pjHntEnIyKpRhEID71DQSYlFdzk7BZ0qlMMIIiPhG7s9PcO6I_c6F-2Dyl0BAGqcCRk5PryoJsb12d8FXUhmAFP5lVlU13vMhJMADxN5C-aIzVgMsQBlbz7zqnv8aKJ_R_F_Z4APGlcMAKoPMypnkU"
        message="Salam! Mən Şəfatapp AI, sizin virtual sağlamlıq məsləhətçinizəm. Sizə necə kömək edə bilərəm?"
        time="10:42"
      />
      <ChatMessage
        type="outgoing"
        avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCMqWdFDe3Z8rL-efV8fvqcsqc0qEwNwrpw3vufJM-oJn1iBEPAGJhLgnrmEWxsHGTVMZY1dJ9ekH8PgILi8Nyh0WHXX9PLc0-pmhU2fmp9_a5ayl38Fh-0oyPNOlk5cJ_c5c0HgQCX3knzoFaIXZWwu-2BOFU0b-tAlapYKDROkLPhuUNP9atL-r_vGc2Z0L6eWkY_eF3Ikl1-0cixg7zEmfBcFIt3udHnMp-8P8zC9GEjObPljzMj04ZPM4Wi_c03vJm-9PaGOuHK"
        message="Salam. Baş ağrısı üçün hansı həkimə müraciət etməliyəm?"
        time="10:43"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import ChatMessage from './ChatMessage.vue'
  </script>
  