$(window).scroll(() => {
	
	let pixFromTop = $(this).scrollTop();	

	$('.logo').css({
		'transform': `translate(0px, ${pixFromTop/5}%)`
	});

});


var projectListOne = [
	"<p>Mini Projects</p>",
	"<hr>",
	"<div><a href='https://87danielbradley.github.io/javascript-challenge/' target='_blank'>Javascript Challenge</a></div>",
	"<div><a href='https://87danielbradley.github.io/Plotly-Challenge/' target='_blank'>Plotly Challenge</a></div>",	
	"<div><a href='https://87danielbradley.github.io/D3-Challenge/' target='_blank'>D3 Challenge</a></div>",
	"<div><a href='https://87danielbradley.github.io/Leaflet-Challenge/' target='_blank'>Leaflet Challenge</a></div>",
	"<div><a href='https://87danielbradley.github.io/Web-Design-Challenge/' target='_blank'>Web Design Challenge</a></div>",
	"<div><a href='https://github.com/87danielbradley/pandas-challenge' target='_blank'>Pandas Challenge</a></div>",
	"<div><a href='https://github.com/87danielbradley/python-api-challenge' target='_blank'>Python API Challenge</a></div>",
	"<div><a href='https://github.com/87danielbradley/Matplotlib' target='_blank'>Matplotlib Challenge</a></div>"

	];
		
var projectListTwo = [
	"<p>Mini Projects</p>",
 	"<hr>",
 	"<div><a href='https://public.tableau.com/profile/daniel.bradley1709#!/vizhome/citi_bike_public/Story?publish=yes' target='_blank'>Tableau-Challenge</a></div>",
 	"<div><a href='https://github.com/87danielbradley/machine-learning-challenge' target='_blank'>Machine Learning Challenge WIP</a></div>",
 	"<div><a href='https://github.com/87danielbradley/Big-Data-Challenge' target='_blank'>CSS Layout/Big Data Challenge WIP</a></div>",
	"<div><a href='https://github.com/87danielbradley/Data_Science_in_Biotechnology' target='_blank'>Data Science in Biotechnology</a></div>",
	"<div><a href='https://github.com/87danielbradley/sql-challenge' target='_blank'>SQL Challenge</a></div>",
	"<div><a href='https://github.com/87danielbradley/VBA-challenge/blob/master/VBAStocks/Stock%20Data/VBA_Macro.bas' target='_blank'>VBA Challenge</a></div>",
	"<div><a href='https://github.com/87danielbradley/Excel-Challenge' target='_blank'>Excel Challenge</a></div>",
	"<div><a href='https://github.com/87danielbradley/Python-Challenge' target='_blank'>Python Challenge</a></div>"

	];
	 


projectListOne.forEach((element) => {
	$("#projectListOne").append(element);
})

projectListTwo.forEach((element) => {
	$("#projectListTwo").append(element);
})



$("#navWho").click(function() { 
	$('html,body').animate({
        scrollTop: $("#who").offset().top},800);           
});


$("#navPortfolio").click(function() { 
	$('html,body').animate({
        scrollTop: $("#portfolio").offset().top},1000);           
});


$("#navContact").click(function() { 
	$('html,body').animate({
        scrollTop: $("#footer").offset().top},1100);           
});


$('#navResume').click(() => {
	$('#resumeModal').modal('toggle');
});



