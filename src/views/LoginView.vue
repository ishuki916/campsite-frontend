<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { API_ENDPOINTS } from '@/api'

const router = useRouter()
const user = ref({
  username:'',
  password: ''
})

const login = async () => {
  try {
    console.log(user.value)
    const res = await axios.post(API_ENDPOINTS.LOGIN_API, user.value)
    console.log(res)

    document.cookie = `tkn=${res.data.token}; path=/; `

    // toDoListPage()
  } catch (err) {
    console.log(err)
    alert(err.response.data.message)
    user.value = {}
  }
}

const signUpPage = () => {
  router.push('/signUp')
}

// const toDoListPage = () => {
//   router.push('/toDoList')
// }
</script>
<template>
    <div class="container mt-5 mb-5" style="max-width: 400px;">
        <form>
          <div class="mb-3">
          <h2 style="color: green;">Let's Camping</h2>
          <label class="form-label" for="text">帳號</label>
          <input
            class="form-control"
            type="text"
            id="username"
            name="username"
            v-model="user.username"
            placeholder="請輸入帳號"
            required
          />
          <span class="form-text">此欄位不可留空</span>
        </div>

        <div class="mb-3">
          <label class="form-label" for="pwd">密碼</label>
          <input
            class="form-control"
            type="password"
            name="pwd"
            id="pwd"
            v-model="user.password"
            placeholder="請輸入密碼"
            required
          />
        </div>
        <div class="d-flex justify-content-between">
          <input class="btn btn-outline-success" type="button" @click="login" value="登入" />
         
          <a style="color: green;" @click="signUpPage">註冊帳號</a>
        </div>
          
        </form>
    </div>

</template>
