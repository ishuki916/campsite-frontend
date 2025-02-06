
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  // 用來儲存 loading 狀態
  const isLoading = ref(true)
  const router = useRouter()
  
  // 當頁面載入時執行
  onMounted(() => {
    // 取得 URL 中的 token
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    console.log("token:", token)
  
    // if (token) {
    //   // 儲存 token 到 localStorage
    //   localStorage.setItem('access_token', token)
  
    //   // 導向到應用的主頁或需要的頁面
    //   setTimeout(() => {
    //     router.push('/dashboard')  // 可以根據需要更改為其他頁面
    //   }, 1000) // 等待1秒鐘後重定向
    // } else {
    //   // 如果沒取得 token，顯示錯誤或重定向到登入頁
    //   setTimeout(() => {
    //     router.push('/login')
    //   }, 1000)
    // }
  })
  </script>

<template>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <h2>登入成功！</h2>
      <p>您已成功登入 Google，Token 已儲存。</p>
    </div>
    <div>this is the page</div>
  </template>
  
  <style scoped>
  /* 這裡可以加入樣式 */
  </style>
  