$(function() {
  //initialize parallax
  $('.parallax').parallax();
  // initialize nav
  $(".button-collapse").sideNav();

  var section = $('.section');
  var sectionDistance = section.offset().top;
  var sectionHeight = section.height();
  var sectionBottom = sectionHeight + sectionDistance;



  // Grid animation
  var grid = $('.grid');
  // var gridWidth = grid.width() + 10;
  var gridWidth = '110%';


 $(".klima").click(function() {
   $(".primary").animate({right: gridWidth});
  //  $(".primary").animate({right: '100%'});
   $(".secondary").animate({left: 0, top:0});
  //  alert('asd');
 });
 $(".closeBtn").click(function() {
   $(".primary").animate({right: 0});
   $(".secondary").animate({left: '100%'});
  //  alert('asd');
 });


  // $window = $(window);
  //
  // $window.scroll(function() {
  //   // console.log('w', $window.scrollTop());
  //   if ($window.scrollTop() >= sectionDistance && $window.scrollTop() <= sectionBottom) {
  //     $('nav .material-icons').css('color', 'black');
  //   } else {
  //     $('nav .material-icons').css('color', 'white');
  //   }
  // });

});
