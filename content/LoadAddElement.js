$(document).ready = function(){
	$getScript("AddElement.js", function(){
		add_meta_tag();
		add_script_1();
		add_style_css();
		add_ske_div();
		add_link_font();
	})
}



function loadSketonPlugin(){
	//checkJquery();
	var a = document.createElement("script");
	a.src = "content/LoadAddElement.js";
	a.language = "JavaScript";
	a.type = "text/javascript";
	a.charset = "utf-8";
	document.head.appendChild(a);
	
}

function checkJquery(){
	var checkjq = document.getElementById("checkjq");
	if(checkjq){}else{
		var _jquery = document.createElement("script");
		_jquery.src = "//code.jquery.com/jquery-1.11.0.min.js";
		_jquery.id = "checkjq";
		
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(_jquery);
	}
}
function AddAjax(){
	var checkaj = document.getElementById("checkaj");
	if(checkaj){}else{
		var _ajax = document.createElement("script");
		_ajax.src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
		_ajax.id = "checkaj";
		
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(_ajax);
	}
}



if(!document.head){
	window.addEventListener("load", loadSketonPlugin());
}
else{
	loadSketonPlugin();
}