$(function(){
	$(document).scroll(function(){
			var top=$(document).scrollTop();
			if(top>600){
				$(".f_top2").show();
			}else{
				$(".f_top2").hide();
			}
		})
		$(".f_top2").click(function(){
			$("html").animate({scrollTop:0},300)
		})
	for (var i = 0; i < $('.like1').length; i++) { 
            var ran = Math.floor(Math.random() * 99 + 1) 
            $('.like1').eq(i).text("( "+ran+" )")     
       }
})