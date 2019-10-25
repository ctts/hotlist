<template>
  <div class="self-container">
    <div>
      <!-- 上传头像模块 -->
      <el-upload
        class="avatar-uploader"
        action=""
        accept="image/gif, image/jpeg, image/png"
        ref="upload"
        :limit="1"
        :on-exceed="handleExceed"
        :show-file-list="false"
        :auto-upload="true"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :http-request="myUpload"
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
import { postUserImage } from '../../../request/api'
import global from '../../../global/global'
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
    if (this.username) {
      this.loaded = true
    }

    if (localStorage.imageUrl) {
      this.imageUrl = global.DEFAULT_URL + '/static/userHead/' + localStorage.imageUrl
    }
  },
  methods: {
    goToLogin () {
      this.$router.push({
        name: 'Login'
      })
    },
    safeOut () {
      // localStorage.removeItem('username')
      // localStorage.removeItem('imageUrl')
      // localStorage.removeItem('token')
      this.loaded = false
      localStorage.clear()
      this.$router.replace({ 'name': 'Login' })
    },
    // 警告
    handleExceed () {
      alert('只能上传一张图片！')
    },
    // 图片上传成功
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 图片上传
    myUpload (content) {
      // 清空内容，用于下次修改头像
      this.$refs.upload.clearFiles()
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      let formdata = new FormData()
      formdata.append('username', localStorage.getItem('username'))
      formdata.append('userimg', content.file)
      postUserImage(formdata, config)
        .then(res => {
          console.log(res)
          // 完成后，设置头像图片
          console.log(res)
          let userHeadImg = global.DEFAULT_URL + global.USER_HEAD + res.data.userimg
          this.imageUrl = userHeadImg
          // 存入localstorage
          localStorage.setItem('imageUrl', userHeadImg)
        })
    },
    // 图片校验
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png'
      const isLt3M = file.size / 1024 / 1024 < 3

      if (!isJPG) {
        alert('上传头像图片只能是 JPG或PNG 格式!')
      }
      if (!isLt3M) {
        alert('上传头像图片大小不能超过 3MB!')
      }
      return isJPG && isLt3M
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
