$(function(){
	var nav=[
		{"n":"首页",href:"../index.html"},
		{"n":"酷玩",href:"../play/updated.html"},
		{"n":"导购",href:"../guid/最新.html"},
		{"n":"试用",href:"../use/大众试用全部.html"},
		{"n":"报告",href:"../report/报告最新.html"}
	]
	 var n='';
    for(var i=0;i<nav.length;i++){
        n+='<li>'+'<a href='+nav[i].href+'>'+nav[i].n+'</a>'+'</li>';
    }
    $(".nav_center>ul").html(n);
 	
 	var tu=[
 		{src:'../../img/use1.png',"num":"开放申请"},
        {src:'../../img/use2.png',"num":"名单公布"},
        {src:'../../img/use3.png',"num":"产品试用"},
        {src:'../../img/use4.png',"num":"提交反馈"},
        {src:'../../img/use5.png',"num":"活动结束"}
 	]
 	 var list='';
    for(var i=0;i<tu.length;i++){
        list+='<li>'+'<img src="images/'+tu[i].src+'"><p>'+tu[i].num+'</p></li>';      
    }
    $('.s_top2_t1>ul').html(list);
	$(".s_top2_t1>ul>li:eq(0)").children("p").addClass('aa')
	$(".s_top2_t1>ul>li").click(function(){
		$(this).children("p").addClass('aa')
		$(this).siblings().children("p").removeClass('aa')
	})
	//返回顶部
	
		$(document).scroll(function(){
			var top=$(document).scrollTop();
			if(top>600){
				$(".f_top2").show();
			}else{
				$(".f_top2").hide();
			}
		})
		$(".f_top2").click(function(){
		$("html").animate({scrollTop:0},500)
	})
})