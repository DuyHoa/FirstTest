var emojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
              0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
              0x1F431, 0x1F42A, 0x1F439, 0x1F424];



//var myJson = JSON.stringify(t);
//localStorage.setItem("ObjectJson", myJson);
//var loadObj = localStorage.getItem("ObjectJson");
//var obj = JSON.parse(loadObj);
//var _count = obj.length;

function set_style_(){
	var styleElement = document.createElement("style");
	styleElement.appendChild(document.createTextNode("#emoji_khung_ngoai{position: absolute; width: 200px; height: 190px;} #_id_button_emoji{border-radius: 50%; margin-bottom: 5px; cursor: pointer; width: 25px; height: 25px; border: 1px solid #666; } #_id_button_emoji:hover {box-shadow: 0px 0px 3px 1px rgba(8, 8, 8, 0.17);} #emoji_khung_trong{ border: 1px solid #666; height: 132px; padding: 5px; padding-top: 20px;}#emoji_khung_trong-er{position: relative; border: 1px solid #666; height: 124px; padding: 3px; overflow-y: scroll;} #emoji{background-size: cover;} .blockEmoji{ width: 30px;height: 30px;padding: 3px;} .blockEmoji:hover {border: 1px solid #333;} #emoji_khung_trong-er::-webkit-scrollbar {width: 10px;}#emoji_khung_trong-er::-webkit-scrollbar-track {box-shadow: inset 0 0 5px grey; border-radius: 10px;}#emoji_khung_trong-er::-webkit-scrollbar-thumb{background: #666; border-radius: 10px;}#emoji_khung_trong-er::-webkit-scrollbar-thumb:hover{background: #333;}"));
	document.getElementsByTagName("head")[0].appendChild(styleElement);
}

function create_ske_emoji(){
	var ske_out = document.createElement("div");
	ske_out.className = "Emoji_button";
	ske_out.id = "emoji_khung_ngoai";
	var a_out = document.getElementsByTagName("body");
	a_out[0].append(ske_out);
}

function create_ske_emoji_in(){
	var ske_in = document.createElement("div");
	ske_in.className = "Emoji_button";
	ske_in.id = "emoji_khung_trong";
	ske_in.style.display = "none";
	var a = document.getElementById("emoji_khung_ngoai");
	a.append(ske_in);
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
		block_emoji.innerHTML = emojis[i];
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
		}
		else
			document.getElementById("emoji_khung_trong").style.display = "none";
	}
	
}

(function(){
	window.onload = function(){
		create_ske_emoji();
		add_button_insert_icon();
		create_ske_emoji_in();
		create_ske_emoji_in_in();
		QuerryEmoji();
		set_style_();
		turn_on_of_table_emoji();
	}
})();


//SELECT * FROM cp.`*.json`
//$.array[?(@.key=2)].src.icon
/*{
        dvar ctl = document.getElementById('Javascript_example');
        var startPos = ctl.selectionStart;
        var endPos = ctl.selectionEnd;
      }*/