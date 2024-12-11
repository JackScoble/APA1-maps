// This is a sample solution. It has been 'obfuscated'. (Harder to read and copy), but is perfectly valid JS.
// If you copy and paste the line below into: https://obf-io.deobfuscate.io/
// then it will 'deobfuscate' it and you can see the solution.

const catalogue = new Map();
function addBook(_0x336416, _0x24661e, _0xf6ea1d) {
  catalogue.set(_0x336416, {
    'title': _0x24661e,
    'author': _0xf6ea1d
  });
}
function findBook(_0x279415) {
  return catalogue.get(_0x279415);
}
function removeBook(_0x5b6d04) {
  catalogue["delete"](_0x5b6d04);
}
function listAllBooks() {
  for (const [_0x3d3fc9, _0x16ec81] of catalogue) {
    console.log(_0x3d3fc9 + ": " + _0x16ec81.title + " by " + _0x16ec81.author);
  }
}
function numberOfBooks() {
  return catalogue.size;
}
addBook("12345", "The Lord of the Rings", "J.R.R. Tolkien");
addBook("67890", "Pride and Prejudice", "Jane Austen");
console.log(catalogue.get('12345'));
removeBook("12345");
listAllBooks();
console.log(catalogue.size);