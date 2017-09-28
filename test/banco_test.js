const expect = require('chai').expect
const transferencia = require('../transferencia')

describe('transferencia', function(){

  it('#transferencia() deve retornar sucesso', function(){
    expect(transferencia.transfere(['Andrei','Karen',200])).to.equal('sucesso')
  })

})
