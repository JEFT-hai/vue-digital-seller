<template>
  <div @click="resetComponent">
    <div class="app-header">
      <div class="app-head-inner">
        <router-link to="/">
          <img src="../assets/logo.png">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{ username }} </li>
            <li v-if="username"class="nav-pile">|</li>
            <li v-if="username" @click="outClick">退出</li>
            <li v-if="!username" @click="LogClick">登录</li>
            <li v-if="!username" class="nav-pile">|</li>
            <li v-if="!username" @click="RegClick">注册</li>
            <li  class="nav-pile">|</li>
            <li @click="AboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <MyDialog :isShow="showLogDialog" @on-close="close('showLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </MyDialog>
    <MyDialog :isShow="showRegDialog" @on-close="close('showRegDialog')">
      <reg-form @has-name="onSuccessName"></reg-form>
    </MyDialog>
    <MyDialog :isShow="showAboutDialog" @on-close="close('showAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </MyDialog>
  </div>
</template>

<script>
import { eventBus } from '../eventBus'
import Dialog from './dialog'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
  data() {
    return {
      showLogDialog: false,
      showRegDialog : false,
      showAboutDialog : false,
      username : '',
      userData:[]
    }
  },
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm
  },
  methods: {
    LogClick() {
      this.showLogDialog = true;
    },
    RegClick() {
      this.showRegDialog = true;
    },
    AboutClick() {
      this.showAboutDialog = true;
    },
    outClick() {
      this.username = '';
    },
    close(attr) {
      this[attr] = false
    },
    onSuccessLog(data) {
      console.log(data)
      this.close('showLogDialog'),
      this.username = data.username
    },
    onSuccessName(data) {
      console.log(data)
      this.userData.push(data)
      console.log(this.userData);
    },
    resetComponent() {
      eventBus.$emit('reset-component')
    }
  }
}
</script>
  
<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em,  img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b,  i, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
 
/* remember to define focus styles! */
:focus {
    outline: 0;
}
 
/* remember to highlight inserts somehow! */
ins {
    text-decoration: none;
}
del {
    text-decoration: line-through;
}
 
/* tables still need 'cellspacing="0"' in the markup */
table {
    border-collapse: collapse;
    border-spacing: 0;
}
 
/* Resetting HTML5! */
section, article, aside, header, footer, nav, dialog, figure { display:block; }

.app-header {
  width: 100%;
  height: 60px;
  background: #333;
}
.app-head-inner {
  padding: 10px 200px;
}
.app-head-inner img{
  width: 40px;
  height: 40px;
}
.head-nav {
  float:right
}
.head-nav ul{
  font-size: 0
}
.head-nav ul li {
  display:inline-block;
  vertical-align: top;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: rgba(255,255,255,.8)
}
.nav-pile {
  padding: 0 5px;
}
.app-content {
  width: 100%;
  background: #f0f0f0;
}
</style>
