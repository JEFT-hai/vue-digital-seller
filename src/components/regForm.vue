<template>
  <div class="log-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <input type='text' v-model="usernameModel" placeholder="请输入用户名">
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <input type='text' v-model="passwordModel" placeholder="请输入密码">
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">注册</a>
          <p>{{errorText}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userErrors() {
        let errorText, status
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '请输入邮箱地址'
        } else {
          status = true
          errorText = ''
        }
        if(! this.userFlag) {
          errorText = '',
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^\w{6,16}$/g.test(this.passwordModel)) {
          status = false
          errorText = '密码应为6-16位'
        } else {
          status = true
          errorText = ''
        }
        if(! this.passwordFlag) {
          errorText = '',
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin() {
        if (!this.userErrors.status || !this.passwordErrors.status ) {
          this.errorText = '部分选项未通过'
        } else {
          this.errorText = ''
          this.$http.post('api/login')
          .then((res) => {
            res.data.username = this.usernameModel
            console.log(res.data.username)
            this.$emit('has-name',res.data) 
          }, (error) => {
            console.log(error)
          })
        }
      }
    }
  };
</script>

<style scoped>
  .g-form-line {
    line-height: 30px;
    height: 30px;
    margin-bottom: 10px;
    font-size: 0;
  }
  .g-form-label {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    font-size: 16px;
  }
  .g-form-line input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    padding: 0 10px;
    vertical-align: top;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-btn a{
    font-size: 13px;
    color: #eee;
    text-decoration: none;
    padding: 8px 15px;
    background: #41b883;
    border-radius: 1px;
  }
  .g-form-error {
    display: inline-block;
    font-size: 16px;
    padding-left: 20px;
    color: red;
  }
  p {
    font-size: 14px;
    color: red;
  }
</style>
