var emoji_page_1 = {
	icon_1: "";
	icon_2: "";
	icon_3: "";
	icon_4: "";
	icon_5: "";
	icon_6: "";
	icon_7: "";
	icon_8: "";
	icon_9: "";
	icon_10: "";
	icon_11: "";
	icon_12: "";
	icon_13: "";
	icon_14: "";
	icon_15: "";
	icon_16: "";
	icon_17: "";
	icon_18: "";
	icon_19: "";
	icon_20: "";
}

function set_style_(){
	//css khung ngoai
	var ske_emoji_out_= document.getElementById("Emoji_button");
	ske_emoji_out_.style.width = "200px";
	ske_emoji_out_.style.height = "180px";
	//css khung trong
	var ske_emoji_in_= document.getElementById("emoji_khung_trong");
	ske_emoji_in_.style.border = "1px solid #ddd";
	ske_emoji_in_.style.paddingLeft = "5px";
	ske_emoji_in_.style.paddingRight = "5px";
	ske_emoji_in_.style.paddingBottom = "5px";
	ske_emoji_in_.style.paddingTop = "20px";
	//css khung trong er
	var ske_emoji_in_in_ = document.getElementById("emoji_khung_trong-er");
	ske_emoji_in_in_.style.border = "1px solid #ddd";
	ske_emoji_in_in_.style.padding = "3px";
	ske_emoji_in_in_.style.overflow-y = "scroll";
	
	
	var ske_border_emoji = document.getElementsByClassName("blockEmoji");
	ske_border_emoji.style.width = "30px";
	ske_border_emoji.style.height = "30px";
	ske_border_emoji.style.padding = "3px";
	//css emoji
	var emoji_img = document.getElementById("emoji");
	emoji_img.style.backgroundSize = "cover";
	
}

function create_ske_emoji(){
	var ske_out = document.createElement("div");
	ske_out.className = "Emoji_button";
	ske_out.id = "emoji_khung_ngoai";
	var a_out = document.getElementById("subject");
	a_out[0].append(skeout);
}

function create_ske_emoji_in(){
	var ske_in = document.createElement("div");
	ske_in.className = "Emoji_button";
	ske_in.id = "emoji_khung_trong";
	var a = document.getElementById("Emoji_button");
	a[0].append(skeout);
}

function create_ske_emoji_in_in(){
	var ske_in_in = document.createElement("div");
	ske_in_in.className = "Emoji_button";
	ske_in_in.id = "emoji_khung_trong-er";
	var a = document.getElementById("emoji_khung_trong");
	a[0].append(skeout);
}

function add_button_insert_icon(){
	var button_icon = document.createElement("input");
	button_icon.className = "bt_emoji";
	
	var a = document.getElementById("emoji_khung_ngoai")[0];
	a.appendChild(button_icon);
	
		
}

function QuerryEmoji(){
	for (var i = 0; i < emoji_page_1.length; i++){
		//tao blocl emoji
		var block_emoji = document.createElement("div");
		block_emoji.className = "blockEmoji";
		block_emoji.id = "emoji-"+i;
		var b = document.getElementById("emoji_khung_trong-er");
		b.appendChild(block_emoji);
		var img = document.createElement("image");
		img.className = "emoji";
		img.src = emoji_page_1.icon_+(i+1);
		var a = document.getElementById("emoji-"+i");
		a.appendChild(img);
	}
}


function main(){
	create_ske_emoji();
	add_button_insert_icon();
	create_ske_emoji_in();
	create_ske_emoji_in_in();
	set_style_();
	QuerryEmoji();
}
	



