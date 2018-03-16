<template>
  <section class="section">
    <article class="index-menu clearfix" >
      <div class="menu-box menu-xycx fl">
        <div class="menu-img fl"></div>
        <div class="menu-txt fl">
          <p>涵盖北京市全量文创企业信用信息实时查询企业信用信息</p>
        </div>
        <div class="xycx-form fl">
          <h2>信用查询</h2>
          <div class="xycx-ipt clearfix">
            <input type="text" class="input search_input">
            <input type="submit" class="button search_button" value="">
          </div>
        </div>
      </div>
      <div class="menu-box menu-hymd fl">
        <div class="menu-img fl"></div>
        <div class="menu-txt fl">
          <h2>行业名单</h2>
          <p class="p-line">实时公布行业各类名单</p>
          <div><router-link to="/company_list">点击进入</router-link>
            <a href="platform/tpl/company_list.html">点击进入</a></div>
        </div>
      </div>
      <div class="menu-box menu-jkgz fl">
        <div class="menu-img fl"></div>
        <div class="menu-txt fl">
          <h2>监控跟踪</h2>
          <p>实时跟踪企业各类信息，发送预警邮件</p>
          <div><a href="platform/tpl/monitor_follow.html">点击进入</a></div>
        </div>
      </div>
      <div class="menu-box menu-xytj fl">
        <div class="menu-img fl"></div>
        <div class="menu-txt fl">
          <h2>信用统计</h2>
          <p>分地区、分行业统计企业各维度信用指标</p>
          <div><a href="platform/tpl/credit_statistics.html">点击进入</a></div>
        </div>
      </div>
      <div class="menu-box menu-qyyx fl">
        <div class="menu-img fl"></div>
        <div class="menu-txt fl">
          <h2>企业优选</h2>
          <p>从区域、行业的角度分类按特定维度给企业排序</p>
          <div><a href="platform/tpl/company_select.html">点击进入</a></div>
        </div>
      </div>
      <div class="menu-box menu-xydt fl">
        <div class="menu-img fl"></div>
        <div class="menu-txt fl">
          <h2>信用地图</h2>
          <p class="p-line">直观展示企业热力图</p>
          <div><a href="platform/tpl/credit_map.html">点击进入</a></div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clearfix:before, .clearfix:after {
    display: table;
    content: " ";
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix {
    *zoom: 1;
  }
  .index-menu {
    width: 1200px;
    margin: 0 auto;
  }
  .menu-box {
    margin-top: 10px;
    background-color: #fff;
    box-shadow: 0 3px 5px 0 #d8dcdf;
  }
  .menu-box .menu-img {
    width: 210px;
    height: 100%;
  }
  .menu-box .menu-txt {
    width: 155px;
    margin-top: 50px;
    color: #06588a;
  }
  .menu-box .menu-txt h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .menu-box .menu-txt p {
    margin: 20px 0;
  }
  .menu-box .menu-txt p.p-line {
    margin: 30px 0;
  }
  .menu-box .menu-txt a {
    display: block;
    width: 138px;
    height: 28px;
    border: 1px solid #1187d0;
    border-radius: 3px;
    line-height: 24px;
    text-align: center;
  }
  .menu-xycx {
    height: 170px;
    width: 1200px;
  }
  .menu-xycx .menu-img {
    background: url(../assets/index-xycx.png) no-repeat 45px center;
  }
  .menu-xycx .menu-txt {
    width: 245px;
    margin: 30px 50px 0 0;
    font-size: 16px;
    line-height: 30px;
  }
  .menu-xycx .xycx-form {
    margin-top: 20px;
    color: #06588a;
  }
  .xycx-form h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .xycx-form .xycx-ipt {
    width: 624px;
    border: 2px solid #097abf;
    line-height: 40px;
  }
  .xycx-form .xycx-ipt .input {
    float: left;
    width: 550px;
    height: 40px;
    border: none;
    padding: 0 10px;
  }
  .xycx-form .xycx-ipt .button {
    float: left;
    width: 70px;
    height: 40px;
    background: url(../assets/icon-search.png) no-repeat center center #097abf;
    border: none;
  }
  .menu-hymd {
    height: 280px;
    width: 390px;
    margin-right: 10px;
  }
  .menu-hymd .menu-img {
    background: url(../assets/index-hymd.png) no-repeat 45px center;
  }
  .menu-jkgz {
    height: 280px;
    width: 800px;
  }
  .menu-jkgz .menu-img {
    width: 450px;
    background: url(../assets/index-jkgz.png) no-repeat 45px center;
  }
  .menu-xytj {
    height: 280px;
    width: 390px;
    margin-right: 10px;
  }
  .menu-xytj .menu-img {
    background: url(../assets/index-xytj.png) no-repeat 45px center;
  }
  .menu-qyyx {
    height: 280px;
    width: 395px;
    margin-right: 10px;
  }
  .menu-qyyx .menu-img {
    background: url(../assets/index-qyyx.png) no-repeat 45px center;
  }
  .menu-xydt {
    height: 280px;
    width: 395px;
  }
  .menu-xydt .menu-img {
    background: url(../assets/index-xydt.png) no-repeat 45px center;
  }

</style>
