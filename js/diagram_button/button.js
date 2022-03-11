function diagram_button (target_id, config_template_urls, custom_lib_urls) {

  config_template_urls = (typeof config_template_urls !== 'undefined') ? config_template_urls : [
    "https://raw.githubusercontent.com/lasssim/diagrams.net-templates/main/config/styles.json",
    "https://raw.githubusercontent.com/lasssim/diagrams.net-templates/main/config/webui.json"
  ]

  custom_lib_urls = (typeof custom_lib_urls !== 'undefined') ? custom_lib_urls : [
    "https://raw.githubusercontent.com/lasssim/diagrams.net-templates/main/lib/Lasssim%20Primitives.xml",
    "https://raw.githubusercontent.com/lasssim/diagrams.net-templates/main/lib/Lasssim%20Arrangements.xml"
  ];


  config_requests = config_template_urls.map((url) => $.getJSON(url));

  Promise.all(config_requests).then(function(configs) {

    config = Object.assign(...configs);

    string = JSON.stringify(config);
    url_encoded = encodeURIComponent(string);
    deflated = String.fromCharCode.apply(null, new Uint8Array(pako.deflateRaw(url_encoded)));
    base64 = btoa(deflated);

    //let btn = document.createElement("button");
    //btn.innerHTML = "Open Diagrams.net with Lasssim Styles";
    //btn.classList.add("btn");
    //btn.classList.add("btn-primary");
    btn = document.getElementById(target_id);
    btn.onclick = function () {
      clibs = custom_lib_urls.map(function(element) { return "U".concat(element); }).join(";");

      url = `https://app.diagrams.net/?splash=0&libs=general;basic;arrows2&clibs=${clibs}#_CONFIG_${base64}`;
      console.log(url);

      encoded_url = url;
      
      window.open(encoded_url, '_blank');
    };


  });
}