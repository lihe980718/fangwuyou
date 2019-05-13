$(function(){
	$(document).scroll(function(){
			var top=$(document).scrollTop();
			if(top>350){
				$(".f_top2").show();
			}else{
				$(".f_top2").hide();
			}
		})
		$(".f_top2").click(function(){
		$("html").animate({scrollTop:0},500)
		})
})