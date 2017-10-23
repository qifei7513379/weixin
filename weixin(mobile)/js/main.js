//swiper1
	$(document).ready(function () {
		
		if(typeof Swiper != "undefined"){
			var swiper = new Swiper('#swiper01', {
		        pagination: '.swiper-pagination',    //指示点
		        paginationClickable: true,    //TRUE指示点可点
		        spaceBetween:0,    //间隙
		        centeredSlides: true,   //TRUE居中
		        autoplay: 2000,   //自动轮播时间                                               
		        autoplayDisableOnInteraction: false,  //TRUE操作停止自动轮播        
		        slidesPerView: 1, //单片
		     /*	effect: 'fade',  *///渐变有需要可以添加
		        loop: true,   //TRUE循环
		        autoHeight: true, //高度随内容变化
			}); 
		}
	
})





//menu02
$("#menu02").on("click",function(){
	if($("#menu02-list").css("display")=="block"){
		$("#menu02-list").hide(300)
		$(".jiantou").hide(300)
	}else{
		$("#menu02-list").show(300)
		$(".jiantou").show(300)
	}
	
})

      $("#menu02-list>li > a").click(function(){  
          var iclass = $(this).attr("class");  
          if (iclass=="current"){  
              $(this).next().hide(300);  
          }else {  
              $(this).addClass("current").next().show(300).parent().siblings().children("a").removeClass("current").next().hide(300);    
              return false;  
          }  
      }); 
