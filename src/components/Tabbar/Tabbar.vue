<template>
  <ul>
    <li
      v-for="icon of iconfonts"
      :key="icon.id"
      @click="handleClick(icon.id,$event)"
      :class="{'active-class':icon.isActive}"
    >
      <i :class="[icon.isActive?icon.active_content:icon.inactive_content]"></i>
      <div>{{icon.text}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
      iconfonts: [{
        id: 1,
        inactive_content: 'el-icon-setting',
        active_content: 'el-icon-s-tools',
        text: '发现',
        isActive: false
      }, {
        id: 2,
        inactive_content: 'el-icon-star-off',
        active_content: 'el-icon-star-on',
        text: '订阅',
        isActive: false
      }, {
        id: 3,
        inactive_content: 'el-icon-user',
        active_content: 'el-icon-user-solid',
        text: '个人',
        isActive: false
      }]
    }
  },
  methods: {
    handleClick (id, e) {
      this.iconfonts.forEach((obj) => {
        obj.isActive = (obj.id === id)
      })
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 0;
  margin: 0;
  overflow: hidden;
  list-style-type: none;
  text-align: center;
}

li {
  display: flex;
  flex: 1;
  flex-direction: column;
  list-style-type: none;
  padding: 0.5rem 0;
  color: #8b8b8b;
  background: rgba(216, 216, 216, 0.6);
}

li > div {
  font-size: 8px;
}

.active-class {
  color: #409eff;
}
</style>
