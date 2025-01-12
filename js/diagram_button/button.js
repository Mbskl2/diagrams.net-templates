// on dom ready select all img tags with "drawio"


function diagram_button ({target_id, on_click, open_url, config_template_urls, custom_lib_urls}={}) {

  config_template_urls = (typeof config_template_urls !== 'undefined') ? config_template_urls : [
    "https://raw.githubusercontent.com/mbskl2/diagrams.net-templates/main/config/styles.json",
    "https://raw.githubusercontent.com/mbskl2/diagrams.net-templates/main/config/webui.json"
  ]

  custom_lib_urls = (typeof custom_lib_urls !== 'undefined') ? custom_lib_urls : [
    "https://raw.githubusercontent.com/mbskl2/diagrams.net-templates/main/lib/Lasssim%20Primitives.xml",
    "https://raw.githubusercontent.com/mbskl2/diagrams.net-templates/main/lib/Lasssim%20Arrangements.xml"
  ];

  config_requests = config_template_urls.map((url) => $.getJSON(url));

  Promise.all(config_requests).then(function(configs) {

    config = Object.assign(...configs);

    string = JSON.stringify(config);
    url_encoded = encodeURIComponent(string);
    deflated = String.fromCharCode.apply(null, new Uint8Array(pako.deflateRaw(url_encoded)));
    base64 = btoa(deflated);

    // if target_id is a string then it is an id of an element to be used as a
    // button otherwise it is an element itself
    if (typeof target_id === 'string') {
      btn = $(`#${target_id}`);
    } else {
      btn = target_id;
    }

    btn.click(function (e) {
      e.preventDefault();
      clibs = custom_lib_urls.map(function(element) { return "U".concat(element); }).join(";");

      
      if(open_url) {
        open_param = `&open=U${open_url}`;
      } else {
        open_param = "";
      }

      url = `https://app.diagrams.net/?splash=0&libs=general;basic;arrows2&clibs=${clibs}${open_param}#_CONFIG_${base64}`;
      console.log(url);

      encoded_url = url;
      
      window.open(encoded_url, '_blank');

      if (on_click) { on_click(); }
    });


  });
}
