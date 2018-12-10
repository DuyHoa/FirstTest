var url_img_close = "";// icon close chat
var url_img_icon = ""; //Image chat icon
var button_func_1 = "Nâng c?p tài kho?n Slimweb?";
var button_func_2 = "Xây d?ng landing site";
var button_func_3 = "Gia h?n tài kho?n";
var url_link_1 = '#';	//link
var url_link_2 = '#';	//link
var url_link_3 = '#';	//link
var time_delay = 4; //delay time show mess welcome (s)
var time_delay_icon = 1; //Tr? time hi?n icon (s)
var content_welcome1 = 'Xin Chào, mình là Linda!';	//fake AI
var content_welcome2 = 'B?n dang g?p khó khan, c?n tu v?n';
var num_of_button = 3;
var font_ = "roboto";
var height_mb = 360;

//xác định vị trí pop


	
	function Object_id(id){
		this.id = id;
	}
	
	Object_id.prototype.set_content_wel = function(conten_welcome){
		id.innerHTML = conten_welcome;
		id.fontFamily = font_;
	}
	
	Object_id.prototype.set_button_content = function(button_content, url_link){
		if(id && button_content != ""){
			id.innerHTML = button_content;
			id.setAttribute("href", url_link);
			id.fontFamily = font_;
		}
	}	
	
	Object_id.prototype.set_time_delay = function(_time, _status){
		setTimeout(function(){
			id.style.display = _status;
		},_time);
	}
	
	Object_id.prototype.set_status = function(_status){
		id.style.display = _status;
	}




function myfunt() {
	time_cal = (time_delay_icon+time_delay)*1000;
	time_r = time_delay_icon*1000;
	
	
	var _content_welcome_1 = new Object_id(document.getElementById("conten_welcome1"));
	var _content_welcome_2 = new Object_id(document.getElementById("conten_welcome2"));
	_content_welcome_1.set_content_wel(content_welcome1);
	_content_welcome_2.set_content_wel(content_welcome2);
	
	
	var _button_1 = new Object_id(document.getElementById("bt1"));
	_button_1.set_button_content(button_func_1, url_link_1);
	
	var _button_2 = new Object_id(document.getElementById("bt2"));
	_button_1.set_button_content(button_func_2, url_link_2);
	
	var _button_3 = new Object_id(document.getElementById("bt3"));
	_button_1.set_button_content(button_func_2, url_link_2);

	
	var ske_popup = new Object_id(document.getElementById("ske_popup"));
	ske.popup.set_time_delay(time_r, "block");
	
	var hello_notification = new Object_id(document.getElementById("hello_notification"));
	hello_notification.set_time_delay(time_cal, "block");
	
	var hello_content = new Object_id(document.getElementById("hello_content"));
	hello_content.set_time_đelay(time_cal+1000, "block");
	
	
	$getScript("change_status.js", function(){
		click_close_content_ske();
		click_turn_on_of_content_ske();
	});
}

