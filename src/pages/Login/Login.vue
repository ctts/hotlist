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
      >
        <el-form-item label="">
          <el-input v-model="userdata.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input
            v-model="userdata.password"
            password="password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="success"
        plain
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
        password: ''
      }
    }
  },
  components: {
    LoginHead
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
  margin: 0.5rem 0.1rem;
}

.el-form {
  padding-top: 1rem;
}

.el-button {
  width: 10rem;
  margin-top: 1rem;
}
</style>
