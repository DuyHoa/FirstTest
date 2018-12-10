function add_meta_tag(){
		var meta = document.createElement("META");
		meta.name = "viewport";
		meta.content="width=device-width, initial-scale=1.0";
		meta.setAttribute("charset", "utf-8");
		head.appendChild(meta);
		var head = document.getElementsByTagName("head")[0];
	}

	function add_script_1(){
		var lib_script = document.createElement("script");
		lib_script.language = "JavaScript";
		lib_script.type = "text/javascript";
		lib_script.src = "content/javascript/demojs.js";
		lib_script.charset = "utf-8";
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(lib_script);
	}

	function add_style_css(){
		var style_plugin = document.createElement("link");
		style_plugin.type = "text/css";
		style_plugin.rel = "stylesheet";
		style_plugin.href = "content/css/demostyle.css";
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(c);
	}

	function add_ske_div(){
		var div = document.createElement("div");
		div.className = "sketon_div";
		div.style.display = "block";
		div.id = "ske_plugin";
		$("ske_plugin").load("content/templates/skeleton_plugin.txt");
		document.body.appendChild(div);
	}

	function add_link_font(){
		var font_link = document.createElement("link");
		font_link.rel = "stylesheet";
		font_link.href = "https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese";
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(font_link);
	}