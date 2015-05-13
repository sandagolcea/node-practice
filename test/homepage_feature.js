describe('companyPage', function(){
  var host = 'http://localhost:3000';

  before(function(){
    casper.start(host);
  });

  it('displays company ticker number', function(){
    casper.thenOpen( host + '/MMG', function(response) {
      expect('body').to.have.text('MMG');
    });
  });
});