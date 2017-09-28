module.exports={
  transfere: (data)=>{
    let account1={
      money: 200,
      name: "Andrei",
      log: []
    }
    let account2={
      money: 1000,
      name: "Karen",
      log: []
    }

    let value = data[2];

    if((account1.money>=value || account2.money>=value) && value > 0){
      if(data[0]===account1.name){
        account2.money+=value;
        account1.money-=value;
        account1.log+=account1.name+" transfered: "+value+" to "+account2.name
        account2.log+=account2.name+" received: "+value+" from "+account1.name
        console.log(account1.log);
        console.log(account2.log);

      }else if(data[0]===account2.name){
        account1.money+=value;
        account2.money-=value;
        account2.log+=account2.name+" transfered: "+value+" to "+account1.name
        account1.log+=account1.name+" received: "+value+" from "+account2.name
        console.log(account2.log);
        console.log(account1.log);
      }else{
        console.log("Account doesn't exist");
      }
      console.log('Transação concluída');
    }else{
      console.log('Saldo insuficiente');
    }
    return 'sucesso';
  }
}
