<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import {API_ENDPOINTS} from '@/api'
const router = useRouter()
const newUser = ref({
  password: '',
  username: '',
  email: '',
  auth:'USER'

})
const checkPwd = ref('')
const signUp = async () => {
  if (newUser.value.password !== checkPwd.value) {
    alert('密碼確認欄位不一致')
    checkPwd.value = ''
    return
  }
  try {
    const res = await axios.post(API_ENDPOINTS.SIGNUP_API, newUser.value)
    loginPage()
  } catch (err) {
    console.log(err.response.data.message)
    alert(err.response.data.message)
    newUser.value = {
  password: '',
  username: '',
  email: '',
  auth:'USER'

}
    checkPwd.value = ''
  }
}
const loginPage = () => {
  router.push('/login')
}
</script>
<template>
    <div class="container mt-5 mb-5" style="max-width: 400px;">

        <form>
          <h2 style="color: green;">註冊帳號</h2>
          <div class="mb-3">
          <label class="form-label" for="email">Email</label>
          <input
            class="form-control"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            v-model="newUser.email"
            required
          />
          </div>
          <div class="mb-3">
          <label class="form-label" for="name">您的暱稱</label>
          <input
            class="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="請輸入您的暱稱"
            v-model="newUser.username"
          />
          </div>
          <div class="mb-3">
          <label class="form-label" for="pwd">密碼</label>
          <input
            class="form-control"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            v-model="newUser.password"
            required
          />
          </div>
          <div class="mb-3">
          <label class="form-label" for="pwd">再次輸入密碼</label>
          <input
            class="form-control"
            type="password"
            name="pwd"
            id="checkPwd"
            placeholder="請再次輸入密碼"
            v-model="checkPwd"
            required
          />
          </div>
          <div class="d-flex justify-content-between">
          <input class="btn btn-outline-success" type="button" @click="signUp" value="註冊帳號" />
          <a style="color: green;" @click="loginPage">登入</a>
        </div>
        </form>
      </div>

</template>
<style scoped></style>
