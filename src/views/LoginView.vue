<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const user = ref({
  username:'',
  password: ''
})

const login = async () => {
  try {
    console.log(user.value)
    const res = await axios.post('http://localhost:8080/login', user.value)
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
  <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
      <div class="side">
        <a href="#"
          ></a>
        
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">Let's Camping</h2>
          <label class="formControls_label" for="text">帳號</label>
          <input
            class="formControls_input"
            type="text"
            id="username"
            name="username"
            v-model="user.username"
            placeholder="請輸入帳號"
            required
          />
          <span>此欄位不可留空</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            v-model="user.password"
            placeholder="請輸入密碼"
            required
          />
          <input class="formControls_btnSubmit" type="button" @click="login" value="登入" />
          <a class="formControls_btnLink" @click="signUpPage">註冊帳號</a>
        </form>
      </div>
    </div>
  </div>
</template>
