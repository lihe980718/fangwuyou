$(function(){
	for (var i = 0; i < $('.l2').length; i++) { 
        var ran = Math.floor(Math.random() * 100 + 1) 
        $('.l2').eq(i).text(ran)     
  }
			$(".li1").click(function(){
			var src=$(this).children("img").attr("src");
			var num = $(this).next().children(".l2").text()  
			var num2 = $(this).next().children(".l1").text()
//				console.log(src)
			if(src=="../img/xinRedo.png"){
				$(this).children("img").attr("src","../img/xinRedh.png")
//				$(this).children("img").css({"width":"25px","height":"25px"})
				num++; 
                $(this).next().children(".l2").text(num);
                $(this).siblings(".like").css("color","#FA7E6B")
			}else{
				$(this).children("img").attr("src","../img/xinRedo.png")
//				$(this).children("img").css({"width":"16px","height":"16px"})
				num--; 
                $(this).next().children(".l2").text(num);
//              $(this).next().children(".l1").text("取消");
                 $(this).siblings(".like").css("color","grey")
			}
		})
		$(".fen").click(function(){
			var src1=$(this).children("img").attr("src");
			if(src1=="../img/share_yj1.png"){
				$(this).children("img").attr("src","../img/shareh_yj1.png")
			}else{
				$(this).children("img").attr("src","../img/share_yj1.png")
			}
			
		})
})