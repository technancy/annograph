should = chai.should()

describe 'hashOut', ->
  beforeEach ->
      @hashOut = new hashOut
  it 'should have 0 selections', ->
    @hashOut.selections.should.equal 0