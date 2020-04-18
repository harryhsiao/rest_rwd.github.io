$(document).ready(function(e){
	$(".ham_menu").on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('drop_down');
	});

	$(".order_menu > ul > li >a ").on('click' , function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parent('li').toggleClass('active');
		$(this).parent().siblings('li').find('a').removeClass('active');
	});

	$(".reset_check").on('click' , function (e) {
		window.alert("已發送認證信置您的信箱");
	})
});