module.exports.getLinksFromMd = function getLinksFromMd(text) {
  if (text === undefined || text === "") {
    throw new RangeError("You must enter a parameter!");
  }

  if (typeof text === "number") {
    throw new TypeError("Please insert a text!");
  } else {
    var result = [];
    let regex_url = new RegExp (/(https?:\/\/)?(www\.)?[a-z0-9]*(\.\w{2,})(\.[a-z0-9]*)?(\/.[a-z0-9]*)?(\/.[a-z0-9]*)?/gi);
    let regex_markdown = new RegExp (/(?<=\[)([a-z0-9]*)(?=\])/gi);
    let urls = text.match(regex_url);
    let txts_md = text.match(regex_markdown);
    if (urls !== null && txts_md !== null) {
      result = urls.map((url, i) => ({
        href: url,
        text: txts_md[i]
      }));
    }
    return urls ? JSON.stringify(result) : [];
  }
};
