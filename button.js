/*
const loadScript = async (url) => {
  const response = await fetch(url)
  const script = await response.text()
  eval(script)
}

const scriptUrl = "https://cdnjs.cloudflare.com/ajax/libs/pako/1.0.6/pako.min.js";
loadScript(scriptUrl)
*/

<script src="https://cdnjs.cloudflare.com/ajax/libs/pako/1.0.6/pako.min.js"></script>

var css = "body > div.geMenubarContainer { background-image: URL(https://www.lasssim.com/wp-content/uploads/2021/11/lass-Logo-4c-architecture-primitives-styles-by.svg?); background-size: contain; background-repeat: no-repeat; background-position: calc(100% - 140px) center; } body > div.geMenubarContainer > div.geMenubar { background-color: none !important; } "

var config = {
  "customColorSchemes": [
    [
      {
        "title": "Lasssim.com Black",
        "fill": "#212f37",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Blue",
        "fill": "#00a6e2",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Grey",
        "fill": "#b7bbbd",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Dark Grey",
        "fill": "#969a9c",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Turquoise",
        "fill": "#39bc9d",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Turquoise Dark",
        "fill": "#319f86",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Green",
        "fill": "#48c977",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Dark Green",
        "fill": "#3dad65",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Purple",
        "fill": "#965fb3",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Dark Purple",
        "fill": "#8b4bab",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Yellow",
        "fill": "#efc13a",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Dark Yellow",
        "fill": "#f09a33",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Orange",
        "fill": "#e17c34",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Dark Orange",
        "fill": "#cf531d",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Red",
        "fill": "#e14d43",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Dark Red",
        "fill": "#bb3b32",
        "stroke": "#ffffff",
        "font": "#ffffff"
      },
      {
        "title": "Lasssim.com Secure Connection",
        "stroke": "#bb3b32",
        "font": "#bb3b32"
      },
      {
        "title": "Lasssim.com Black Connection",
        "stroke": "#212f37"
      }
    ]
  ],
  "customFonts": [
    {
      "fontFamily": "Titillium Web",
      "fontUrl": "https://fonts.googleapis.com/css?family=Titillium+Web"
    }
  ],
  "colorNames": {
    "212F37": "Lasssim.com Black",
    "00A6E2": "Lasssim.com Blue",
    "B7BBBD": "Lasssim.com Grey",
    "969A9C": "Lasssim.com Dark Grey",
    "39BC9D": "Lasssim.com Turquoise",
    "319F86": "Lasssim.com Dark Turquoise",
    "48C977": "Lasssim.com Green",
    "3DAD65": "Lasssim.com Dark Green",
    "965FB3": "Lasssim.com Purple",
    "8B4BAB": "Lasssim.com Dark Purple",
    "EFC13A": "Lasssim.com Yellow",
    "F09A33": "Lasssim.com Dark Yellow",
    "E17C34": "Lasssim.com Orange",
    "CF531D": "Lasssim.com Dark Orange",
    "E14D43": "Lasssim.com Red",
    "BB3B32": "Lasssim.com Dark Red"
  },
  "presetColors": [
    "212f37",
    "00a6e2",
    "b7bbbd",
    "969a9c",
    "39bc9d",
    "319f86",
    "48c977",
    "3dad65",
    "965fb3",
    "8b4bab",
    "efc13a",
    "f09a33",
    "e17c34",
    "cf531d",
    "e14d43",
    "bb3b32"
  ],
  "defaultVertexStyle": {
    "fontColor": "#212f37",
    "fontFamily": "Titillium Web",
    "fontSize": 18,
    "strokeWidth": 2,
    "strokeColor": "#212f37"
  },
  "defaultEdgeStyle": {
    "fontColor": "#212f37",
    "fontFamily": "Titillium Web",
    "fontSize": 18,
    "strokeWidth": 2,
    "strokeColor": "#212f37",
    "endArrow": "none",
    "startArrow": "none",
    "edgeStyle": "orthogonalEdgeStyle",
    "orthogonal": 1,
    "elbow": "vertical"
  },
  "styles": [
    {},
    {
      "vertexStyle": {
        "fontColor": "#ffffff",
        "strokeColor": "#ffffff",
        "fillColor": "#b7bbbd"
      },
      "edgeStyle": {
        "strokeColor": "#b7bbbd",
        "fontColor": "#b8bbbd"
      }
    }
  ]
};


console.log(config);

string = JSON.stringify(config);

console.log(string);

url_encoded = encodeURIComponent(string);
console.log(url_encoded);

deflated = url_encoded; //String.fromCharCode.apply(null, new Uint8Array(pako.deflateRaw(url_encoded)));
console.log(deflated);

base64 = btoa(deflated);
console.log(base64);

