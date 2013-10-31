// JavaScript Document

//sets up original jargon text & buttons
function setup() {

	for(var i=0; i < jargon_text.length; i++) {
	document.getElementById('main_container').innerHTML += "<span onclick=\"toggle_words("+i+")\" class=\"jargon\">" + jargon_text[i] + "</span>";
	}
}

function buttonSetup(){
	for (var i=0; i< buttons.length; i++) {
	document.getElementById('button_container').innerHTML+= "<div>" + buttons[i] + "</div>"
	}
}

function start() {
    setup();
    buttonSetup();
}
	window.onload=start;
	
//changes the words on click
function toggle_words(index) {
	var element = document.getElementById('main_container').children[index];
	if (element.getAttribute("class") == "plain"){
		jargonize(index, element);
	} else {
		dejargonize(index, element);
	}
}

function jargonizeAll(){
	document.getElementById("main_container").innerHTML= "";
	setup();
	}
	
function dejargonizeAll() {
	document.getElementById("main_container").innerHTML= "";
	unJargon();
}

//changes back to jargon
function jargonize(index, element) {
	element.innerHTML=jargon_text[index];
	element.setAttribute("class","jargon");
}

//changes back to plain
function dejargonize(index, element) {
	element.innerHTML=jargon_ptext[index];
	element.setAttribute("class","plain");
}

function unJargon() {
	for(var i=0; i < jargon_ptext.length; i++) {
	document.getElementById('main_container').innerHTML += "<span onclick=\"toggle_words("+i+")\" class=\"plain\">" + jargon_ptext[i] + "</span>";
	document.getElementById('main_container').setAttribute("class","plain");
	}
}