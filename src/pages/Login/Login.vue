<template>
  <div>
    <login-head>
      <template v-slot:left>
        <i class="el-icon-back"></i>
      </template>
      <template v-slot:content>
        登录
      </template>
    </login-head>
    <div class="wrapper">
      <div class="head-img">
        <img src="../../../static/images/head.jpg">
      </div>
      <el-form
        label-position="right"
        :model="userdata"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="userdata.username"
            placeholder="账号"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="userdata.password"
            :type="showType"
            placeholder="密码"
            autocomplete="off"
          ><i
              slot="suffix"
              class="element-icons"
              :class="eyes"
              @click="lookOrHide"
            ></i></el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="success"
        plain
        @click="login"
      >登录/注册</el-button>
    </div>
  </div>
</template>

<script>
import LoginHead from '@/components/PageHeader/PageHeader'
export default {
  name: 'Login',
  data () {
    return {
      userdata: {
        username: '',
        password: '',
        userimg: ''
      },
      eyes: 'el-iconclose-eye',
      rules: {
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' },
          { min: 3, max: 11, message: '账号长度在3-11个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 11, message: '密码长度在3-11个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    LoginHead
  },
  methods: {
    lookOrHide () {
      this.eyes = this.eyes === 'el-iconclose-eye' ? 'el-iconyanjing' : 'el-iconclose-eye'
    },
    login () {
      if (this.userdata.username.trim() === '' || this.userdata.password.trim() === '') {
        return
      }
      this.axios
        .post('http://localhost:3000/login', this.userdata)
        .then(res => {
          if (res.data.result === 1 || res.data.result === 2) {
            this.$store.commit('setUser', this.userdata)
            console.log(this.$store.getters.getUser)
            this.$router.replace({ name: 'Person' })
          }
        })
    }
  },
  computed: {
    showType () {
      return this.eyes === 'el-iconclose-eye' ? 'password' : 'text'
    }
  }
}
</script>

<style scoped>
.head-img {
  width: 6rem;
  height: 6rem;
}

img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  bottom: 49px;
  left: 0;
  right: 0;
  transform: translateY(-70%);
}

.el-form-item {
  margin: 1.2rem 0.1rem;
}

.el-button {
  width: 10rem;
  margin-top: 0.5rem;
}
</style>
