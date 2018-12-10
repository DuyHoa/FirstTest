function click_turn_on_of_content_ske(){
	document.getElementById("mb").onclick = function () {
		if(document.getElementById("content_ske").style.display == 'none'){
			if($(window).height() < 450){
				turn_on_fix_screen_status_change_ske_popup()
			}
			else{
				turn_on_nor_status_change_ske_popup()
			}
		}
		else{
			turn_off_status_change_ske_popup(){
		}	
	};	
}

function click_close_content_ske(){
	document.getElementById("button_close_top").onclick = function(){
		if(document.getElementById("content_ske").style.display == 'block')
			turn_off();
	};
	
}

function turn_on_fix_screen_status_change_ske_popup(){
	document.getElementById("mb").style.display = 'none';
	document.getElementById("content_ske").style.bottom = "-135px";
	document.getElementById("content_ske").style.display = 'block';
	document.getElementById("hello_content").style.display = 'none';
	document.getElementById("hello_notification").style.display = 'none';
	document.getElementById("im").setAttribute("href", url_img_close);
}
function turn_on_nor_status_change_ske_popup(){
	document.getElementById("content_ske").style.bottom = "-8%";
	document.getElementById("content_ske").style.display = 'block';
	document.getElementById("hello_content").style.display = 'none';
	document.getElementById("hello_notification").style.display = 'none';
	document.getElementById("im").setAttribute("href", url_img_close);
}
function turn_off_status_change_ske_popup(){
	document.getElementById("content_ske").style.display = 'none';
	document.getElementById("mb").style.display = 'block';
	document.getElementById("im").setAttribute("href", url_img_icon);
}