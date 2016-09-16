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
    "repo": "SampleDocs",
    "path": "docs",
    "branch": "master",
    "access_token": "OTAwNDU5MTk4M2NlYzViYzQxNzFlN2E3Yjk1MWQ2ZjhkODRjMTg5Yg=="
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
