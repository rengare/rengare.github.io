(function() {
  document.body.innerHTML = "";
  var url = "http://rengare.github.io/";
  // var url = "http://51.254.130.234:8085/";
  // var url = "file:///home/ren/workspace/web/guardian/guardian/dist/";
  // inline.bundle.js
  var scripts = [
    url + "inline.bundle.js",
    url + "polyfills.bundle.js",
    url + "main.bundle.js"
  ];

  var styles = [url + "styles.bundle.css"];

  var angularAppElement = document.createElement("app-root");
  document.body.appendChild(angularAppElement);

  for (var i = 0; i < scripts.length; i++) {
    var s = document.createElement("script");
    s.src = scripts[i];
    document.body.appendChild(s);
  }

  for (var i = 0; i < styles.length; i++) {
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = styles[i];

    head.appendChild(link);
  }
})();
