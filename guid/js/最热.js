$(function(){
	$(document).scroll(function(){
			var top=$(document).scrollTop();
			if(top>400){
				$(".f_top2").show();
			}else{
				$(".f_top2").hide();
			}
		})
		$(".f_top2").click(function(){
			$("html").animate({scrollTop:0},500)
		})
$(".s_top6_t1").click(function(){
		$(".s_top3").animate({height:"2250px"},300)
		$(".s_top6_t2").show();
	})
	$(".s_top6_t2").click(function(){
		$(".s_top3").animate({height:"970px"},500)
		$(".s_top6_t2").hide();
	})
//爱心
for (var i = 0; i < $('.like1').length; i++) { 
        var ran = Math.floor(Math.random() * 100 + 1) 
        $('.like1').eq(i).text(ran)     
   }
for (var i = 0; i < $('.like2').length; i++) { 
        var ran = Math.floor(Math.random() * 100 + 1) 
        $('.like2').eq(i).text(ran)     
    } 
 $(".li2").click(function () { 
    var num = $(this).next().text() 
    num++; 
    $(this).next().text(num); 
});
$(".li3").click(function(){
	var src=$(this).children("img").attr("src");
	var num = $(this).next().text()                
//			console.log(src)
	if(src=="../img/xinRedo.png"){
		$(this).children("img").attr("src","../img/xinRedh.png")
		num++; 
        $(this).next().text(num); 
        $(this).siblings(".like1").css("color","#FA7E6B")
	}else{
		$(this).children("img").attr("src","../img/xinRedo.png")
		num--; 
        $(this).next().text(num); 
        $(this).siblings(".like1").css("color","grey")
	}
})
})