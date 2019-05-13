$(function(){
	 $.idcode.setCode();   //加载生成验证码方法
//  $("#butn").click(function(){
//      var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
//      if(IsBy){
//          alert("验证码输入正确")
//      }else {
//          alert("请重新输入")
//      }
//  })
    
    $(document).ready(function(){
          //绑定失去焦点事件
          $("#mobile").blur(checkMoblie);
          $("#user").blur(checkUser);
          $("#pwd").blur(checkPass);
          $("#repwd").blur(checkRePass);
          

         //提交表单,调用验证函数
          $("#myform").submit(function () {
              var flag = true;
              if (!checkMoblie()){
              	 flag = false;
              }
              if (!checkUser()){
              	 flag = false;
              }
              if (!checkPass()){
              	flag = false;
              } 
              if (!checkRePass()){
              	flag = false;
              } 
              
              return flag;
          });
     })
    //手机号码
    function checkMoblie(){
    	var $mobileId = $("#mobile");
    	var $divID = $("#DivMobile");
    	var regMobile = /^1\d{10}$/;
    	$divID.html("");   
    	
    	if ($mobileId.val() == "") {
	          $divID.html("手机号不能为空");
	          return false;
	      }
        if ($mobileId.val() == regMobile) {
//      	alert("aa")
            $mobileId.html("手机号码不正确，请重新输入");
            return false;
        }
        return true;
    }
    //验证用户名
	  function checkUser() {
	      var $userId = $("#user");
	      var $divID = $("#DivUser");
	      $divID.html("");
	      if ($userId.val() == "") {
	          $divID.html("姓名不能为空");
	          return false;
	      }
	      for (var i = 0; i < $userId.val().length; i++) {
	          var j = $userId.val().substring(i, i + 1)
	          if (j >= 0) {
	              $divID.html("姓名中不能包含数字");
	              return false;
	          }
	      }
	      return true;
	  }
	  //验证输入密码
	  function checkPass() {
	      var $pwdId = $("#pwd");
	      var $divID = $("#DivPwd");
	      $divID.html("");
	      if ($pwdId.val() == "") {
	          $divID.html("密码不能为空");
	          return false;
	      }
	      if ($pwdId.val().length < 6) {
	          $divID.html("密码必须等于或大于6个字符");
	          return false;
	      }
	      return true;
	  }
	  //验证重复密码
	  function checkRePass() {
	      var $pwdId = $("#pwd"); //输入密码
	      var $repwd = $("#repwd");  //再次输入密码
	      var $divID = $("#DivRepwd");
	      $divID.html("");
	      if ($pwdId.val() != $repwd.val()) {
	          $divID.html("两次输入的密码不一致");
	          return false;
	      }
	      return true;
	  }
      
})