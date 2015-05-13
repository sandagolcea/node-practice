// var casper = require('casperjs').create();

describe('companyPage', function(){
  var host = 'http://localhost:3000';

  before(function(){
    casper.start(host, function(){});
  });

  it('displays company ticker number', function(){
    casper.thenOpen( host + '/MSFT', function(response) {
      expect('body').to.have.text('MSFT');
    });
  });
});
