<template>
  <div class="bg-linear">
    <div class="top-content" >
      <div class="inner-bg">
        <div class="form-box login-form-new">
          <div class="form-top">
            <h3>北京市文创企业信用服务平台</h3>
          </div>
          <div class="form-bottom">
            <div class="login-icon"></div>
            <div class="form-con">
              <form role="form" action="" method="post" class="login-form form-inline" id="loginForm">
                <div class="clearfix login-form-tran">
                  <div class="login-form-list">
                    <div>
                      <input type='text' v-model="name" placeholder="请输入用户名" class='form-control' name="loginName" id="loginName">
                    </div>
                  </div>
                  <div class="login-form-list">
                    <div>
                      <input type='password' v-model="password" placeholder="请输入密码" class='form-control' id="password" name="password">

                    </div>
                  </div>
                  <div class="login-form-list">
                    <div class="form-group">
                      <input type='text' placeholder="c" v-model="code" class='form-inline mb0 ' name="code" id="code_input">
                      <img id="codeImg" ref="codeImg"  class="mb0" src="/cccredit/web_verifyCodeController/web_getImage.form" @click="changeCode();" >
                    </div>
                  </div>
                </div>
                <div class="login-message" id="message" ref="message">
                </div>
                <div>
                  <button class='btn btn-lg  btn-block login-button' type='button' @click='loginSubmit()'>立即登陆</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import axios from 'axios'
    export default {
        name: "login",
        data(){
          return {
            imgUrl:"",
            name:"",
            password:"",
            code:""
          }
        },
        methods:{
          loginSubmit:function(){
            var code = this.code;
            var name = this.name;
            var password = this.password;
            var that = this;
            axios.post("/cccredit/web_verifyCodeController/web_testCode.form",qs.stringify({code:code}))
              .then(function(res){
                if(res.data.success == true){
                  axios.post("/cccredit/web_loginRegisterController/web_userLogin.form",qs.stringify({loginName:name,password:password,code:code}))
                    .then(function(res2){
                      var loginObj = res2.data;
                      if(res2.data.success == true){
                        var userInfo = {
                          loginName: loginObj.loginName,
                          userName: loginObj.userName,
                          userId: loginObj.id,
                          enterpriseId: loginObj.enterpriseId,
                          dataStatus: 11,
                          dataStatusStr: "启用"
                        };
                        sessionStorage.setItem("platformInfo", qs.stringify(userInfo));
                        $(that.$refs.message).html("<font color='red'>" + res2.data.msg + "</font>");
                        // window.location.href = "./home.html";
                        that.$router.push("/index")

                      }else{
                        $(that.$refs.message).html("<font color='red'>" + res2.data.msg + "</font>");
                        that.changeCode();

                      }
                    })
                }
            }).catch(function(err){
              console.log(err)
            })


          },
          changeCode:function(){
            $(this.$refs.codeImg).attr("src","/cccredit/web_verifyCodeController/web_getImage.form?="+Math.random())
          }

        },
        mounted:function(){
          this.$nextTick(function () {
            var that = this;
            // axios.get("/cccredit/web_verifyCodeController/web_getImage.form").then(function(res){
            //   console.log(res.data)
            //   that.imgUrl = res.data
            // })

          })
        }

    }
</script>

<style scoped>
  input[type="text"], input[type="password"], textarea, textarea.form-control {
    height: 34px;
    margin: 0;
    padding: 0 10px 0 40px;
    vertical-align: middle;
    background: #fff;
    border: 3px solid #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 34px;
    color: #999;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    -ms-transition: all .3s;
    transition: all .3s;
  }
  textarea, textarea.form-control {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 30px;
  }
  input[type="text"]:focus, input[type="password"]:focus, textarea:focus, textarea.form-control:focus {
    outline: 0;
    background: #fff;
    border: 3px solid #fff;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  input[type="text"]:-moz-placeholder, input[type="password"]:-moz-placeholder, textarea:-moz-placeholder, textarea.form-control:-moz-placeholder {
    color: #888;
  }
  input[type="text"]:-ms-input-placeholder, input[type="password"]:-ms-input-placeholder, textarea:-ms-input-placeholder, textarea.form-control:-ms-input-placeholder {
    color: #888;
  }
  input[type="text"]::-webkit-input-placeholder, input[type="password"]::-webkit-input-placeholder, textarea::-webkit-input-placeholder, textarea.form-control::-webkit-input-placeholder {
    color: #888;
  }
  button.btn {
    height: 38px;
    margin: 0;
    padding: 0 20px;
    vertical-align: middle;
    background: #007edf;
    border: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 38px;
    color: #fff;
    text-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    -ms-transition: all .3s;
    transition: all .3s;
  }
  button.btn:hover {
    opacity: 0.6;
    color: #fff;
  }
  button.btn:active {
    outline: 0;
    opacity: 0.6;
    color: #fff;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  button.btn:focus {
    outline: 0;
    opacity: 0.6;
    background: #de615e;
    color: #fff;
  }
  button.btn:active:focus, button.btn.active:focus {
    outline: 0;
    opacity: 0.6;
    background: #de615e;
    color: #fff;
  }
  form {
    margin-bottom: 0;
  }
  /*.col-xs-2 {
      width: 176px;
  }*/
  .col-xs-1 {
    width: 90px;
  }
  .col-xs-1 p {
    margin-top: 7px;
  }
  .col-sm-3 p {
    margin-top: 6px;
  }
  .radio_left {
    margin-left: 14px;
  }
  .btn-lg {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
    margin-left: 15px;
  }
  .btn-block {
    display: block;
    width: 94%
  }
  tr th.ths {
    width: 160px;
    height: 30px;
    float: left;
    line-height: 25px;
    text-align: center;
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    border-right: 1px solid #333;
  }
  tr td.tds {
    width: 160px;
    height: 30px;
    float: left;
    line-height: 25px;
    text-align: center;
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
  }
  .br {
    border-bottom: 0px solid #dddddd;
    height: 1px;
    line-height: 28px;
    margin-left: 15px;
    margin-top: 17px;
    padding-left: 10px;
  }
  .bootstrapTable {
    white-space: normal;
    table-layout: fixed;
  }
  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Microsoft YaHei';
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #fff;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #fff;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #fff;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #fff;
  }
  label {
    font-weight: 400;
    margin-bottom: 0;
    font-family: "Microsoft YaHei"!important;
  }
  .bg-linear {
    width:100%;
    height:100%;
    background: url(../assets/login-bg.jpg);
    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  :root .gradient {
    filter: none;
  }
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
  }
  .inner-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -230px;
    margin-left: -240px;
    width: 480px;
  }
  .top-content {
    height: 100%;/*background: url("/img/loginbg.png") center no-repeat;*/
  }
  .login-form-new>.form-top {
    text-align: center;
    color: #fff;
  }
  .login-form-new>.form-top h3 {
    font-size: 30px;
  }
  .sub-title {
    padding: 5px 0 28px;
  }
  .form-bottom {
    position: relative;
    padding: 4px;
    width: 400px;
    margin: 60px auto 0;
    border: 3px solid #626b7c;
    border-radius: 5px;
  }
  .form-bottom .login-icon {
    position: absolute;
    left: 50%;
    top: -35px;
    margin-left: -45px;
    width: 90px;
    height: 90px;
    background: url(../assets/login-icon.png) no-repeat;
  }
  .form-bottom .form-con {
    padding: 70px 0 30px 0;
    margin: 0 auto;
    background-color: #fafafa;
  }
  .login-form-tran {
    background: rgba(255,255,255,.2);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,.3);
  }
  .login-form-list {
    line-height: 34px!important;
  }
  .login-form-list input {
    background-color: transparent!important;
    border: 1px solid #d3d3d3;
    margin: 0 auto;
  }
  .login-form-list input.form-control {
    width: 300px !important;
    display: block !important;
  }
  .login-form-list input.form-inline {
    width: 160px !important;
    float: left;
  }
  .login-form-list input:focus {
    border: 1px solid #306799;
    -webkit-box-shadow: 0 0 10px rgba(45,108,243, .3);
    -moz-box-shadow: 0 0 10px rgba(45,108,243, .3);
    box-shadow: 0 0 10px rgba(45,108,243, .3);
  }
  .login-form-list {
    width: 300px;
    margin: 0 auto 15px;
  }
  .login-form-list .form-group {
    display: block !important;
  }
  .login-form-list #loginName {
    background: url(../assets/login-name.png) no-repeat 8px center;
  }
  .login-form-list #password {
    background: url(../assets/login-password.png) no-repeat 8px center;
  }
  .login-form-list #code_input {
    background: url(../assets/login-code.png) no-repeat 8px center;
  }
  .login-form-list img {
    height: 34px;
    margin-bottom: 20px;
    float: right;
  }
  .login-check {
    width: 60%;
  }
  .login-message {
    width: 300px;
    margin: 0 auto;
    height: 34px;
    clear: both;
    display: block;
    line-height: 32px;
  }
  .login-button.btn {
    font-family: "Microsoft YaHei"!important;
    width: 298px;
    height: 34px;
    background: #3292df;
    border: 1px solid #2273b5;
    margin: 0 auto;
    color: #fff;
    font-size: 16px;
    line-height: 34px;
    border-radius: 0;
  }
  .login-button.btn:focus {
    background: #3292df;
  }
  .login-footer {
    position: absolute;
    width: 100%;
    line-height: 30px;
    bottom: 0;
    font-size: 12px;
    color: #fff;
    background: #265885;
    border-top: 4px solid #a40600;
  }
  .colorfff {
    color: #fff!important;
  }
  .mb0 {
    margin-bottom: 0 !important;
  }
  /*兼容ie8*/
  @media \0screeen\,screen\9 {
    /*.bg-linear{*/
    /*background-color: #1292dd;*/
    /*}*/
    .login-form-tran {
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#4Cffffff, endColorstr=#4Cffffff);
      border: 1px solid #fff;
    }
    .login-form-list {
      border-bottom: 1px solid #fff;
    }
    .login-button.btn {
      border: 1px solid #fff;
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#33ffffff, endColorstr=#33ffffff);
      /*background-color: rgba(255,255,255,.2);*/
      /*filter:alpha(opacity=20);*/
      /*-moz-opacity:0.2;*/
      /*-khtml-opacity: 0.2;*/
      /*opacity: 0.2;*/
      /*color:#fff;*/
    }
  }

</style>
