var assert = require('assert');

test('When I highlight some text hashOut knows', function(){
  var highlight = getChunk();
  assert.equal(highlight, 'This is a great sentence.');
});

test('I choose the [awesome] label for my highlight', function(){
  var label = assignLabel();
  assert.equal(label, 'awesome');
});

function getChunk() {
  return 'This is a great sentence.';
};

function assignLabel(){
  return 'awesome'
};