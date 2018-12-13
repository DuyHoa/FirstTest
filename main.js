https://apps.timwhitlock.info/emoji/tables/unicode

var emojis = [0x1F600, 0x1F602, 0x1F603, 0x1F604, 0x1F605, 0x1F606, 0x1F34A, 0x1F344,
			  0x1F37F, 0x1F363, 0x1F370, 0x1F355, 0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 
			  0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA, 0x1F431, 0x1F42A, 0x1F439, 0x1F424, ];



			  
			  
			  
			  
			  
(function(){
	window.onload = function(){
		create_ske_div();
		add_button_insert_icon();
		create_ske_div_in();
		create_close_button()
		create_ske_emoji_in_in();
		QuerryEmoji();
		set_style_();
		turn_on_of_table_emoji();
	}
})();


//var myJson = JSON.stringify(t);
//localStorage.setItem("ObjectJson", myJson);
//var loadObj = localStorage.getItem("ObjectJson");
//var obj = JSON.parse(loadObj);
//var _count = obj.length;

function set_style_(){
	var styleElement = document.createElement("style");
	styleElement.appendChild(document.createTextNode("#emoji_khung_ngoai{position: absolute; width: 200px; height: 190px;} #_id_button_emoji{margin-bottom: 5px; cursor: pointer; width: 25px; height: 25px; border: 1px solid #666; } #_id_button_emoji:hover {box-shadow: 0px 0px 3px 1px rgba(8, 8, 8, 0.17);} #emoji_khung_trong{background-color: rgba(210, 178, 178, 0.47); position:relative; box-shadow: 0px 0px 1px 1px rgba(8, 8, 8, 0.16); border: 1px solid #666; height: 132px; padding: 5px; padding-top: 20px;}#emoji_khung_trong-er{background-color: white; opacity: 1; position: relative; border: 1px solid #666; height: 124px; padding: 3px; overflow-y: scroll;} #emoji{background-size: cover;} .blockEmoji{cursor: pointer; display: inline-block; width: 23px; height: 23px; padding: 3px; margin: 1px; border: 1px solid #fff; text-align: center;} .blockEmoji:hover {border: 1px solid #333;} #emoji_khung_trong-er::-webkit-scrollbar {width: 8px;}#emoji_khung_trong-er::-webkit-scrollbar-track {box-shadow: inset 0 0 5px grey; border-radius: 10px;}#emoji_khung_trong-er::-webkit-scrollbar-thumb{background: #666; border-radius: 10px;}#emoji_khung_trong-er::-webkit-scrollbar-thumb:hover{background: #333;} #close_bt:hover{transition: 0.8s ; background-color: red; color: white;} #close_bt{cursor: pointer; position: absolute; float: left; top: 0px; right: 3px; text-align: center; height: 16px; width: 20px; font-family: roboto; font-size: 12px;}"));
	document.getElementsByTagName("head")[0].appendChild(styleElement);
}

function create_ske_div(){
	var ske_out = document.createElement("div");
	ske_out.className = "Emoji_button";
	ske_out.id = "emoji_khung_ngoai";
	var a_out = document.getElementsByTagName("body");
	a_out[0].append(ske_out);
}

function create_ske_div_in(){
	var ske_in = document.createElement("div");
	ske_in.className = "Emoji_button";
	ske_in.id = "emoji_khung_trong";
	ske_in.style.display = "none";
	var a = document.getElementById("emoji_khung_ngoai");
	a.append(ske_in);
}

function create_close_button(){
	var _close_bt = document.createElement("div");
	_close_bt.id = "close_bt";
	_close_bt.innerHTML = "x";
	var a = document.getElementById("emoji_khung_trong");
	a.appendChild(_close_bt);
}

function create_ske_emoji_in_in(){
	var ske_in_in = document.createElement("div");
	ske_in_in.className = "Emoji_button";
	ske_in_in.id = "emoji_khung_trong-er";
	var a = document.getElementById("emoji_khung_trong");
	a.append(ske_in_in);
}

function add_button_insert_icon(){
	var button_icon = document.createElement("div");
	button_icon.id = "_id_button_emoji";
	var a = document.getElementById("emoji_khung_ngoai");
	a.append(button_icon);	
}

function QuerryEmoji(){
	var toAdd = document.createDocumentFragment();
	for (var i = 0; i < emojis.length; i++){
		//tao blocl emoji
		var block_emoji = document.createElement("div");
		block_emoji.className = "blockEmoji";
		block_emoji.id = "blockEmoji" + i;
		block_emoji.innerHTML = String.fromCodePoint(emojis[i]);
		block_emoji.onclick = function(){
			var ctl = document.getElementById("tx");
			var start_pos_cursor = ctl.selectionStart;
			var end_pos_cursor = ctl.selectionEnd;
			alert(/&#x1F600);
			ctl.val.substring(start_pos_cursor, end_pos_cursor)
			
		}
		
		//if(i >= 5 && i%5 == 0){
		//	block_emoji.style.display = "inline-block";
		//}
		//block_emoji.background = t.array[key=i].src.icon;
		toAdd.appendChild(block_emoji);
		/*var img = document.createElement("image");
		img.className = "emoji";
		img.src = t.array[key=i].src.icon;
		block_emoji.appendChild("img");*/
	}
	document.getElementById("emoji_khung_trong-er").appendChild(toAdd);
}

function turn_on_of_table_emoji(){
	
	document.getElementById("_id_button_emoji").onclick = function(){
		if(document.getElementById("emoji_khung_trong").style.display == "none"){
			document.getElementById("emoji_khung_trong").style.display = "block";
			document.getElementById("emoji_khung_trong").style.transition = "1s";
		}
		else
			document.getElementById("emoji_khung_trong").style.display = "none";
	}
	document.getElementById("close_bt").onclick = function(){
		if(document.getElementById("emoji_khung_trong").style.display == "block"){
			document.getElementById("emoji_khung_trong").style.display = "none";
		}
	}
	document.body.onwheel = function(){
		if(document.getElementById("emoji_khung_trong").style.display == "block"){
			document.getElementById("emoji_khung_trong").style.display = "none";
		}
	}
	
}




/*function insert_emoji(){
	
}

//SELECT * FROM cp.`*.json`
//$.array[?(@.key=2)].src.icon
/*{
        var ctl = document.getElementById('Javascript_example');
        var startPos = ctl.selectionStart;
        var endPos = ctl.selectionEnd;
      }*/