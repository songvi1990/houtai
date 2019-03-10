<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm login_to"
      label-position="top"
    >
      <h2>用户登录</h2>
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>




<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "change" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "change" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "change"
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      console.log("123");
      // 提交数据之前的验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 数据正确
          // alert("submit!");
          
          this.$http.post("login", this.ruleForm).then(res => {
            console.log(res);
            if (res.data.meta.status === 400) {
              // 错误 弹框 用户名或密码错误
              this.$message.error(res.data.meta.msg);
            } else {
              // 成功弹框
              this.$message.success(res.data.meta.msg);
              // 保存token
              window.sessionStorage.setItem('token',res.data.data.token)
              // 使用路由提供的方式进行跳转 编程式导航
              this.$router.push('/')
            }
          });
        } else {
          // 数据错误 this.$http
          this.$message.error("请正确输入用户名和密码");
          return false;
        }
      });
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
/* .login {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
} */
.login {
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.el-form {
  width: 580px;
  height: 440px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 10px;
}
.login-btn {
  width: 100%;
}
</style>
