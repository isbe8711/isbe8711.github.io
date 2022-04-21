let sam ={
  name:'sam',
  department:'tech',
  designation:'manager',
  salary: 40000,
  raise:true,
};



let mary ={
  name:'mary',
  department:'fiance',
  designation:'trainee',
  salary: 18500,
  raise:true,
};


let bill ={
  name:'bill',
  department:'HR',
  designation:'executive',
  salary: 21200,
  raise:false,
};
console.log('Problem 1', sam, mary, bill);


const company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: [sam, mary, bill],
}
console.log('Problem 2', company);


let anna ={
  name:'anna',
  department:'Tech',
  designation:'executive',
  salary: 25600,
  raise:false,
};
company.employees.push(anna);
console.log('Poblem 3', company);


let sum = 0
for(var i = 0; i<company.employees.length; i++){
sum+= company.employees[i].salary;
}
console.log('Problem 4', sum);


function increaseBy10(sum){
  return num * 1.1;

}

for (var i=0; i<company.employees.length; i++){
  if (company.employees[i].raise){
    company.employees[i].salary *= 1.1;
    company.employees[i].raise = false;
  }
}
console.log('Problem 5',company);


const peopleWFH = ['anna','sam'];
for (var i = 0; i < company.employees.length; i++){
if(peopleWFH.includes(company.employees[i].name)){
  company.employees[i].wfh = true;
  
}
}
console.log('Problem 6', company);
