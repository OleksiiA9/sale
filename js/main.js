$(document).ready(function(){
  $('.sl').slick({
      //авто проктутка
      //autoplay: true,
      //скорость авто прокрутки 3с
      //autoplaySpeed: 500,
      //скорость анимации
      //speed: 1000,
      //тип анимации : //linear, ease-out
      cssEase: 'ease-in-out',
      //центрирование
      //centerMode: true,
      //ширина боковых полос
      //centerPadding: '25px',
      //нижняя навагация
      //dots: true,
      //отключение боковых стрелок для пролистования
      //arrows: false,
      //анимация изменения слайда, через тени
      //fade: true,
      //отмена пролистования мышкой(курсором), навигация только через стрелки и нижнюю навигацию//
      //draggable: false,
      //отключение цикличности и зазор
      //infinite: false,
      //edgeFriction: '0.5',
      //пауза при наведении на слайд
      pauseOnDotsHover: true,
      //способ загрузки картинок, по умолчанию 'ondemand' -  сначало картинка прогружаеться потом идёт анимация, 'progressive' - 
      //lazyLoad: 'ondemand',
      //направление слайдов, в html - сладеру нужно задать dir="rtl"
      //rtl: true,
      //вертикальное перелистование слайдов
      //vertical: true,
      //слайды идут в 2 строки
      //rows: 2,
      //столбцы
      //slidesPerRow: 2,
      //сколько слайдов видим одновременно
      slidesToShow: 3,
      //перемотка сразу несколько слайдов
      slidesToScroll: 1,
      //zindex тоже что и в css z-index
      zIndex: 1000,
      //респонсив при ширине экрана 768px и 480px//
responsive: [
{
breakpoint: 1000,
settings: {
arrows: false,
//centerMode: true,
//centerPadding: '40px',
slidesToShow: 2,
slidesToScroll: 2,
}
},
{
breakpoint: 640,
settings: {
arrows: false,
//centerMode: true,
//centerPadding: '40px',
slidesToShow: 1,
slidesToScroll: 1,
}
}
]
});
});
    //
$(document).ready(function(){
	$('.menu').click(function(){
		$(this).toggleClass('active');
		$('.nav_1').toggleClass('active');
		return false;
	});
});

    //up   
$(document).ready(function(){    
    $(".arrow .top").hide();
            $(function () {
            $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".arrow .top").css("display","block");}
        else {
            $(".arrow .top").css("display","none");}
    });
$('.arrow .top').click(function () {
    $('html, body').animate({
    scrollTop: $(".header ").offset().top
    }, 2000);
    });
    });
}); 