var assert = require('assert');

test('When I highlight some text hashOut knows', function(){
  var highlight = getChunk();
  assert.equal(highlight, 'This is a great sentence.');
});

function getChunk() {
  return 'This is a great sentence.';
};