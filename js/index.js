$(function(){
	var w=$("html,body").width();
	$(".s_top1_a").css("width",w)
	//轮播图
	var index=0;
			var width=$('.s_top2_t1>ul>li').width();
			var move=null;
			move=function(){
				index=index>2?0:index;
				$('.s_top2_t1>ul').stop().animate({left:-width*index},500);
//				$(".a>ul>li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
			};
			//定时器
			var timer=setInterval(function(){
				index++;
				move();
			},2500);
			$('.s_top2_t1').hover(function(){
				clearInterval(timer);
			},function(){
				timer=setInterval(function(){
				index++;
				move();
			},2500);
			})
			//箭头
			$('.zuojian').on('click',function(){
				index--;
				index=index<0?2:index;
				move();
			});
			$('.youjian').on('click',function(){
				index++;
				move();
			});
//点赞
//随机数
			for (var i = 0; i < $('.like1').length; i++) { 
                var ran = Math.floor(Math.random() * 100 + 1) 
                $('.like1').eq(i).text(ran)     
          }
			$(".li1").click(function(){
			var src=$(this).children("img").attr("src");
			var num = $(this).next().text()                
//				console.log(src)
			if(src=="img/zan.png"){
				$(this).children("img").attr("src","img/use5.png")
				$(this).children("img").css({"width":"25px","height":"25px"})
				num++; 
                $(this).next().text(num);
                $(this).siblings(".like1").css("color","#FA7E6B")
			}else{
				$(this).children("img").attr("src","img/zan.png")
				$(this).children("img").css({"width":"16px","height":"16px"})
				num--; 
                $(this).next().text(num);
                 $(this).siblings(".like1").css("color","grey")
			}
		})
//评论
			for (var i = 0; i < $('.like2').length; i++) { 
                var ran = Math.floor(Math.random() * 100 + 1) 
                $('.like2').eq(i).text(ran)     
            } 
             $(".li2").click(function () { 
                var num = $(this).next().text() 
                num++; 
                $(this).next().text(num); 
            });
//li图片阴影{
			$(".s_top2_t1_l1>li").hover(function(){
				$(this).addClass("b").removeClass("d")
			},function(){
				$(this).addClass("d").removeClass("b")
			})

//阴影
            $(".s_top3_n_t2>ul>li").hover(function(){
            	$(this).children(".yin").show();
            	$(this).addClass("b").removeClass("d")
            },function(){
            	$(this).children(".yin").hide()
            	$(this).addClass("d").removeClass("b")
            })
            $(".s_top4_n_t2>ul>li").hover(function(){
            	$(this).children(".yin").show();
//          	$(this).addClass("b").removeClass("d")
            },function(){
            	$(this).children(".yin").hide()
//          	$(this).addClass("d").removeClass("b")
            })
            $(".s_top5_n_t2>ul>li").hover(function(){
            	$(this).children(".yin").show();
            	$(this).addClass("b").removeClass("d")
            },function(){
            	$(this).children(".yin").hide()
            	$(this).addClass("d").removeClass("b")
            })
	
//导购精选
		$(".li3").click(function(){
//			$(this).children("img").attr("src","img/xinRedh.png")
			var src=$(this).children("img").attr("src");
			var num = $(this).next().text()                
//			console.log(src)
			if(src=="img/xinRedo.png"){
				$(this).children("img").attr("src","img/xinRedh.png")
				num++; 
                $(this).next().text(num); 
                $(this).siblings(".like1").css("color","#FA7E6B")
			}else{
				$(this).children("img").attr("src","img/xinRedo.png")
				num--; 
                $(this).next().text(num); 
                $(this).siblings(".like1").css("color","grey")
			}
		})
//发现酷玩
		$(".s_top6_t1").click(function(){
		$(".s_top5").animate({height:"2222px"},300)
		$(".s_top6_t2").show();
	})
	$(".s_top6_t2").click(function(){
		$(".s_top5").animate({height:"1135px"},500)
		$(".s_top6_t2").hide();
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