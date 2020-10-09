<template>
  <div id="container">
    <!-- 登录部分 -->
    <div id="login">
      <div>
        <h2>登录</h2>
      </div>
      <div>
        <ul>
          <li>
            如果您已经在Lee线下门店或官方微信注册成为了Lee牛仔部落会员，
            无需在本网站再次注册。首次登陆前请
            <a
              href="javascript:"
            >点击这里设置密码</a>即可
          </li>
          <li>
            <label for>登录账号</label>
            <span>
              <input type="text" @blur="name" v-model="uname" maxlength="12" placeholder="请输入账号" />
              <span>{{textUname}}</span>
            </span>
          </li>
          <li>
            <label for>密码</label>
            <span>
              <input
                type="password"
                @blur="upwd"
                v-model="user_upwd"
                maxlength="16"
                placeholder="请输入密码"
                autocomplete="offs"
              />
              <span>{{textUpwd}}</span>
            </span>
          </li>
          <li>
            <span>
              <a href="javascript:">忘记密码？</a>
            </span>
          </li>
          <li>
            <button class="btn-register" @click="login()"><span>立即登录</span></button>
          </li>
        </ul>
      </div>
    </div>
    <!-- 注册部分 -->
    <div id="register">
      <div>
        <div>
          <h2>新用户</h2>
        </div>
        <div >
          <ul>
            <li>
              <span>姓名</span>
              <input
                type="text"
                @blur="checkUname()"
                placeholder="请输入用户名"
                autocomplete="offs"
                maxlength="12"
                v-model="username"
              />
              <span>{{textUsername}}</span>
            </li>
            <li class="verify">
              <label for>手机</label>
              <input
                type="text"
                v-model="userphone"
                placeholder="请输入手机号"
                autocomplete="offs"
                maxlength="11"
                @blur="checkPhone"
              />
              <span>{{textUserphone}}</span>
              <!-- <a href="javscript:">获取验证码</a> -->
            </li>
            <li class="verify posi">
              <label for>输入验证码</label>
              <input type="text" />
            </li>
            <!-- 输入密码 -->
            <li>
              <label for>密码</label>
              <input
                type="password"
                @blur="checkUpwd"
                placeholder="请输入密码"
                autocomplete="offs"
                maxlength="16"
                v-model="password"
              />
              <span>{{textPassword}}</span>
            </li>
            <!-- 邮箱 -->
            <li>
              <label for>邮箱</label>
              <input
                type="text"
                v-model="useremail"
                placeholder="输入邮箱"
                autocomplete="offs"
                maxlength="20"
                @blur="checkemail"
              />
              <span>{{textUserEmail}}</span>
            </li>
            <!-- 确认密码 -->
            <li class="private clearfix">
              <span>
                <input
                  type="password"
                  v-model="passwordTwo"
                  placeholder="再次输入密码"
                  autocomplete="offs"
                  maxlength="16"
                  @blur="checkUpwdTwo"
                />
                <span>{{textPasswordTwo}}</span>
              </span>
              <span>我已经阅读并同意使用使用条款 & 隐私政策</span>
            </li>
            <li>                                        
              <button class="btn-register" @click="register()"><span>注册</span></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#container::after {
  clear: both;
  content: "";
  display: block;
}
ul {
  margin: 0;
  padding: 0;
}
span,
label {
  display: block;
}
/* span和label设为块元素 */
ul li {
  list-style: none;
  text-align: left;
}
ul li input {
  width: 230px;
  padding: 4px;
  display: block;
}
ul li:last-child input {
  color: #fff;
  width: 242px;
  background: #000;
}
label {
  font-size: 14px;
  margin: 0 0 8px;
}
span {
  margin-bottom: 8px;
}
#login {
  width: 340px;
  padding: 20px 0 95px 0;
  float: left;
  margin-left: 100px;
}
#login div h2 {
  text-align: left;
}
#login div li:first-child {
  /* 如果您已经……,文字部分 */
  width: 237px;
  text-align: left;
  font-size: 12px;
  margin: 0 45px 18px 0;
}
#login div li:nth-child(4) a {
  color: #1f2020;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 8px;
}
/* ↑ 登录部分样式 ↑ */
/* ↓ 注册部分样式 ↓ */
#register {
  width: 549px;
  float: right;
  margin-right: 100px;
  text-align: left;
  border: 1px solid #000;
  border-top: none;
  border-right: none;
  border-bottom: none;
  padding: 20px 0px 0 100px;
  padding-bottom: 100px;
  margin-bottom: 100px;
}
input[type="checkbox"] {
  display: inline-block;
  width: 21px;
  height: 21px;
  margin-top: -2px;
  margin-left: 0px;
  margin-right: 10px;
  border: 1px solid #000;
}
.private span {
  float: left;
  margin-top: 10px;
}
.private span:last-child {
  font-size: 12px;
}
/* 验证码样式 */
.verify {
  position: relative;
}
.verify a {
  position: absolute;
  left: 113px;
  bottom: 0px;
  display: block;
  text-align: center;
  width: 120px;
  height: 20px;
  padding: 4px;
  color: #fff;
  font-size: 14px;
  background-color: #000;
  text-decoration: none;
}
#register div ul li label {
  margin-top: 5px;
}
#register div label,
span {
  margin-bottom: 10px;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.btn-register{
  background: #000;
  color :white;
  width: 250px;
}
.btn-register span{
  display: block;
  height: 33px;
  font-size:16px ;
  text-align: center;
  line-height: 33px;
  margin: 0;
}
</style>

<script>
export default {
  mounted(){
    
  },
  data() {
    return {
      username: "",
      password: "",
      passwordTwo: "",
      textUsername: "",
      textPassword: "",
      textPasswordTwo: "",
      userphone: "",
      textUserphone: "",
      useremail: "",
      textUserEmail: "",
      uname: "",
      user_upwd: "",
      textUname: "",
      textUpwd: "",
    };
  },
  methods: {
    //用户注册
    //用户名前台验证 是否符合标准
    checkUname() {
      //声明局部变量usernameRegExp保存正则表达式 以便验证
      let usernameRegExp = /^[a-zA-Z0-9_]{6,12}$/;
      //使用test方法验证用户输入的是否符合正则表达式
      if (usernameRegExp.test(this.username)) {
        //格式正确返回
        this.textUsername = "√";
      } else {
        //格式错误返回
        this.textUsername = "账号格式错误";
      }
    },
    //密码前台验证,是否符合标准
    checkUpwd() {
      //声明局部变量passwordRegExp保存正则表达式 以便验证
      let passwordRegExp = /^[a-zA-Z0-9_]{8,16}$/;
      //使用test方法验证用户输入的是否符合正则表达式
      if (passwordRegExp.test(this.password)) {
        this.textPassword = "√";
      } else {
        this.textPassword = "密码格式错误";
      }
      // console.log(111);
    },
    //在次前台判断密码是否正确
    checkUpwdTwo() {
      if (this.password == this.passwordTwo) {
        this.textPasswordTwo = "√";
      } else {
        this.textPasswordTwo = "两次密码输入不一致";
      }
    },
    //前台验证手机号是否正确
    checkPhone() {
      //声明局部变量userphoneRegExp保存正则表达式 以便验证
      let userphoneRegExp = /^1[3456789]\d{9}$/;
      //使用test方法验证用户输入的是否符合正则表达式
      if (userphoneRegExp.test(this.userphone)) {
        this.textUserphone = "√";
      } else {
        this.textUserphone = "手机号格式不正确";
      }
    },
    checkemail() {
      let userEmailRegExp = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (userEmailRegExp.test(this.useremail)) {
        this.textUserEmail = "√";
      } else {
        this.textUserEmail = "邮箱格式不正确";
      }
    },
    //注册点击事件
    register() {
      //判断用户名 密码 再次输入密码 手机号 邮箱 完全符合要求后 通过register事件向后台发送插入数据的请求
      if (
        this.textUsername == "√" &&
        this.textPassword == "√" &&
        this.textPasswordTwo == "√" &&
        this.textUserphone == "√" &&
        this.textUserEmail == "√"
      ) {
        console.log("注册成功");
        this.$axios
          .post(
            "/api/register",
            `user_name=${this.username}&password=${this.password}&user_phone=${this.userphone}&user_email=${this.useremail}`
          )
          .then((res) => {
            console.log(res);
          });
      }
    },

    //用户登录
    name() {
      //登录前需要前台验证 验证无误之后返回后台
      let unameRegExp = /^[a-zA-Z0-9_]{6,12}$/;
      if (unameRegExp.test(this.uname)) {
        this.textUname = "√";
      } else {
        this.textUname = "格式错误";
      }
    },
    upwd() {
      let upwdRegExp = /^[a-zA-Z0-9_]{8,16}$/;
      //使用test方法验证用户输入的是否符合正则表达式z
      if (upwdRegExp.test(this.user_upwd)) {
        this.textUpwd = "√";
      } else {
        this.textUpwd = "密码格式错误";
      }
    },
    //登陆点击事件
    login() {
      //判断用户名 和密码 同时符合前台标准后向后台发送请求 验证用户名和密码是否正确
      if (this.textUpwd == "√" && this.textUname == "√") {
        this.$store.state.islogin=true
        this.$axios
          .post(
            "api/register",
            `user_name=${this.uname},password=${this.user_upwd}`
          )
          .then((res) => {
            console.log(res);
          });
      }
    },
  }
};
</script>