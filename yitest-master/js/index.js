/*
* @Author: vincnet
* @Date:   2016-08-08 18:52:36
* @Last Modified by:   vincnet
* @Last Modified time: 2016-08-17 11:12:06
*/

$(".hehe").on("mouseenter",function(){
	if($(".city").css("display")=="none"){
		$(".city").slideDown(200);
	}
});
$(".hehe").on("mouseleave",function(){
	if($(".city").css("opacity")==1){
		$(".city").slideUp(400);
	}
});
// 当鼠标进入轮播图区域时显示两个箭头
$(".carousel").on("mouseenter",function(){
	$(".right span").css("display","block");
});
$(".carousel").on("mouseenter",function(){
	$(".left span").css({
		"display":"block"
	});
});
// 当鼠标离开轮播图区域时隐藏两个箭头
$(".carousel").on("mouseleave",function(){
	$(".right span").css("display","none");
});
$(".carousel").on("mouseleave",function(){
	$(".left span").css("display","none");
});
// 第一个
$(".aone").on("mouseenter",function(){
	$(".one").css({
		"opacity":1,
		"transform" : "translate(0, 140px)"
	});
	$(".two").css({
		"opacity":1,
		"transform" : "translate(0, -170px)"
	});
	$(".two h4").css("color","#F0E9E9");
	$(".two .meal-price").css("color","#C7AAAA");
	$(".two span").css("color","#272424");
})
$(".aone").on("mouseleave",function(){
	$(".one").css({
		"opacity":0,
		"transform" : "translate(0, 0)"
	});
	$(".two").css({
		"opacity":0,
		"transform" : "translate(0, 0)"
	});
});
// 第二个
$(".bone").on("mouseover",function(){
	$(".three").css({
		"opacity":1,
		"top" : "40px"
	});
	$(".four").css({
		"opacity":1,
		"top" : "180px"
	});
	$(".four h4").css("color","#F0E9E9");
	$(".four .meal-price").css("color","#C7AAAA");
	$(".four span").css("color","#272424");
})
$(".bone").on("mouseout",function(){
	$(".three").css({
		"opacity":0,
		"top" : "-100px"
	});
	$(".four").css({
		"opacity":0,
		"top" : "350px"
	});
});
// 第三个
$(".cone").on("mouseenter",function(){
	$(".five").css({
		"opacity":1,
		"transform" : "translate(0, 140px)"
	});
	$(".six").css({
		"opacity":1,
		"transform" : "translate(0, -170px)"
	});
	$(".six h4").css("color","#F0E9E9");
	$(".six .meal-price").css("color","#C7AAAA");
	$(".six span").css("color","#272424");
})
$(".cone").on("mouseleave",function(){
	$(".five").css({
		"opacity":0,
		"transform" : "translate(0, 0)"
	});
	$(".six").css({
		"opacity":0,
		"transform" : "translate(0, 0)"
	});
});
// 第四个
$(".done").on("mouseenter",function(){
	$(".sev").css({
		"opacity":1,
		"transform" : "translate(0, 140px)"
	});
	$(".eight").css({
		"opacity":1,
		"transform" : "translate(0, -170px)"
	});
	$(".eight h4").css("color","#F0E9E9");
	$(".eight .meal-price").css("color","#C7AAAA");
	$(".eight span").css("color","#272424");
})
$(".done").on("mouseleave",function(){
	$(".sev").css({
		"opacity":0,
		"transform" : "translate(0, 0)"
	});
	$(".eight").css({
		"opacity":0,
		"transform" : "translate(0, 0)"
	});
});