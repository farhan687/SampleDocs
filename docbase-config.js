var docbaseConfig = {
  "method": "github",
  "generic": {
    "baseurl": "",
    "path": ""
  },
  "file": {
    "path": ""
  },
  "github": {
    "user": "farhan687",
    "repo": "sampleDocs",
    "path": "src",
    "branch": "master",
    "access_token": "MzNlYmQ5NzA3NWQyODAyZGZiZDE2ZjBiZjkzMGViZWI0NmU5MDVjNQ=="
  },
  "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "default_version": "scalr",
  "manual_override": true,
  "versions" : {
  "scalr": [
    {
      "label": "FAQs",
      "name": "FAQs",
      "files": [
        {
          "name": "jsapi",
          "label": "jsapi"
        },
        {
          "label": "index",
          "name": "index"
        }
      ]
    }
  ]
},
  "publish": "github"
}
