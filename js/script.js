window.onscroll = function() {myFunction()};
var arrow = document.getElementById("arrow");

function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		arrow.style.display = "flex";
	}
	else {
		arrow.style.display = "none";
	}

}

function return_top() {
}

/* SKLEP */
function goTo(url){
	window.location.href = "http://"+url;
}