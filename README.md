# Extract Links From Markdown
**This library intended is extract links from markdown.**

In current version returns an array with url and text.

## The methods of this library are:
#### **getLinksFromMd(text);**

Example:

```
$node
> let extractLib = require("gf-extract-links-lib")
> extractLib.getLinksFromMd( "Oi você quer entrar no site [google](www.google.com) ?"); //[{href: "www.google.com", text: "google"}]
```

## Version 1.0.2 (released)
- Add devDependencies;

## Version 1.0.1
- Functions refactored;

## Version 1.0.0
- Functionalities: extract links and text from markdown;
- Return an array with objects having url and text;


## Installation
- You must have node + npm installed.
- Installation Guide, visit the [official site](https://www.npmjs.com/get-npm).
- Proceed installation `$npm install gf-extract-links-lib`


## Roadmap of project
**version 2.0.0**
- README in pt_br;

**version 1.0.0 (released)**
- Functionalities: extract links and text from markdown.
