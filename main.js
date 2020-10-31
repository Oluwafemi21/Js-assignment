function salary(hours_worked,extra_hours){
    let idealSalary = hours_worked * 1000;
    let overtime = extra_hours * 200;
    let total = idealSalary + overtime;
    return total
}
hours_worked = windows.prompt('How many hours worked: ');
extra_hours = windows.prompt('How many extra hours worked: ');
console.log(salary(hours_worked,extra_hours))