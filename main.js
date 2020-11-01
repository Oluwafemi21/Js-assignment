function salary(hours_worked){
    if (hours_worked <= 4){
      var newSalary = 1000 * hours_worked;
    }
  
    let extra_hours = hours_worked - 4;
  
  
    if(hours_worked > 4){
    var newSalary = 200 * (extra_hours) + (1000 * hours_worked)
    }
  
    let total = newSalary;
    return total
}
hours_worked = prompt('How many hours worked: ');
//display salary

console.log(salary(hours_worked))
