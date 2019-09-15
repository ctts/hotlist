<template>
  <div class="self-container">
    <div>
      <!-- <img
        v-if="imageUrl !== ''"
        :src="imageUrl"
      > -->
      <!-- 上传头像模块 -->
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img
          v-if="imageUrl"
          :src="imageUrl"
          class="avatar"
        >
        <i
          v-else
          class="el-icon-plus avatar-uploader-icon"
        ></i>
      </el-upload>
    </div>
    <!-- 个人信息 -->
    <div class="info">
      <div v-if="loaded">
        {{username}}
      </div>
      <div v-else>
        前往注册/登录
      </div>
      <div>
        <el-button
          type="danger"
          v-if="loaded"
          @click="safeOut"
        >安全退出</el-button>
        <el-button
          type="success"
          v-else
          @click="goToLogin"
        >前往注册/登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'self',
  data () {
    return {
      loaded: false,
      imageUrl: '',
      username: ''
    }
  },
  created () {
    this.username = localStorage.username
    this.userimg = localStorage.username
    if (this.username !== '') {
      this.loaded = true
    }
  },
  methods: {
    goToLogin () {
      this.$router.push({
        name: 'Login'
      })
    },
    safeOut () {
      localStorage.removeItem('username')
      localStorage.removeItem('userimg')
      this.$router.replace({ 'name': 'Login' })
    },

    // 图片上传
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },

    // 图片校验
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 3

      if (!isJPG) {
        alert('上传头像图片只能是 JPG或PNG 格式!')
      }
      if (!isLt2M) {
        alert('上传头像图片大小不能超过 3MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
.self-container {
  display: flex;
  height: 6rem;
  padding: 0.5rem;
  background: #eeeeee;
}

.info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

img {
  width: 6rem;
  height: 6rem;
  border-radius: 5px;
}

.el-button {
  width: 10rem;
}

/* 上传头像 */
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader-icon .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  border: 1px dashed #d9d9d9;
  font-size: 28px;
  color: #8c939d;
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
}
.avatar {
  width: 6rem;
  height: 6rem;
  display: block;
}

.el-message {
  height: 100px !important;
}
</style>
