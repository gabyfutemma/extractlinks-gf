const mocha = require("mocha");
const chai = require("chai");
const index = require("../index");
const expect = chai.expect;

describe("index", function() {
  describe("#getLinksFromMd", function() {

    describe("When haven't parameter", function() {
      it("should throw an error", () => {
        expect(() => index.getLinksFromMd()).to.throw("You must enter a parameter!");
        expect(() => index.getLinksFromMd("")).to.throw("You must enter a parameter!");
      });
    });

    describe("When text is a number", function() {
      it("should throw an error", () => {
        expect(() => index.getLinksFromMd(123)).to.throw("Please insert a text!");
      });
    });

    describe("When text is a string without url", function() {
      it("should return a empty array", () => {
        expect(index.getLinksFromMd("hi, hello")).to.be.an("array");
        expect(index.getLinksFromMd("hello")).to.be.empty;
      });
    });

    describe("When text is a string with one url", function() {
      it("should return an array with object having url and text from markdown", () => {
        expect(index.getLinksFromMd("Oi você quer entrar no site [google](www.google.com) ?")).to.equal(JSON.stringify([{href: "www.google.com", text: "google"}]));
      });
    });

    describe("When text is a string with three urls", function() {
      it("should return an array with objects", () => {
        expect(index.getLinksFromMd("[labore](https://en.wiktionary.org/wiki/labore), et [dolore](https://en.wiktionary.org/wiki/dolore), henlow [foo](http://foo.com)"))
          .to.equal(JSON.stringify([
            {href: "https://en.wiktionary.org/wiki/labore", text: "labore"},
            {href: "https://en.wiktionary.org/wiki/dolore", text: "dolore"},
            {href: "http://foo.com", text: "foo"},
          ]));
      });
    });

  });
});
