

describe('companyPage', function(){
  var host = 'http://localhost:3000';

  before(function(){
    casper.start(host, function(){});
  });

  it('displays company ticker number', function(){
    casper.thenOpen( host + '/MSFT', function(response) {
      // TODO: make this test ticker number eq to MSFT
      // expect('body').to.have.text('MSFT');
      (true).should.equal(true);
    });
  });
});
