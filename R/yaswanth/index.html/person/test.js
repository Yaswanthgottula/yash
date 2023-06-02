function ( intraduce){
 console.log('I am '+this.name +'I am from'+ this.country+'I am warking ant+this.company')
}


function person(name, country, company){
    this.name = name;
    this.country = country;
    this.company = company
}

function devolper(){
    this.domain = domain;
    this.technology = technology;
}

vae devoleper = new decoleper();
person.call(devoleper, yash, ind, bosh);

console.log(devoleper);