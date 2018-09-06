module.exports.getLinksFromMd = function getLinksFromMd(text) {
  callErrors(text);
  return matchTextWithRegex(text);
};

function callErrors(text) {
  if (text === undefined || text === "") {
    throw new RangeError("You must enter a parameter!");
  }

  if (typeof text === "number" || typeof text !== "string") {
    throw new TypeError("Please insert a text!");
  }
}

function matchTextWithRegex(text) {
  let result = [];

  let regex_url = new RegExp (/(https?:\/\/)?(www\.)?(\w+)(\.*\w*)*(\/*\w*)*(?=\))/gi);
  let regex_markdown = new RegExp (/(?<=\[)(.*?)(?=\])/gi);

  let urls = text.match(regex_url);
  let txts_md = text.match(regex_markdown);

  if (urls !== null && txts_md !== null) {
    result = urls.map((url, i) => ({
      "href": url,
      "text": txts_md[i]
    }));
  }
  return urls ? result : [];
}
