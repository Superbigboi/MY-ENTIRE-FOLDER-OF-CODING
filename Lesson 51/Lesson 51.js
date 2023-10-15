let text = '{"employees":['
    +'{"firstName":"John", "lastName":"Doe"},'
    +'{"firstName":"Anna", "lastName":"Smith"},'
    +'{"firstName":"Peter", "lastName":"Jones"}]}'
  
 const staff = JSON.parse(text);
 console.log(staff.employees[0].lastName)