var assert = require('assert');

test('storing the chunk of highlighted text', function(){
  var highlight = getChunk();
  assert.equal(highlight, 'This is a great sentence.');
});

test('assigning the [awesome] label for my highlighted chunk', function(){
  var label = assignLabel();
  assert.equal(label, 'awesome');
});

function getChunk() {
  return 'This is a great sentence.';
};

function assignLabel(){
  return 'awesome'
};