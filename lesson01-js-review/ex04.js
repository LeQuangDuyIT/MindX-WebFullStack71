const employeesInfo = [
  { name: 'David', workingTime: 98, salary: 10 },
  { name: 'Luiz', workingTime: 78, salary: 20 },
  { name: 'Silva', workingTime: 165, salary: 25 },
  { name: 'Santos', workingTime: 215, salary: 30 },
  { name: 'Alex', workingTime: 143, salary: 28 }
];

const bonusInfo = [
  { point: 150, bonus: 200 },
  { point: 100, bonus: 150 },
  { point: 50, bonus: 100 },
  { point: 0, bonus: 50 }
];

const getTotalSalaryOfCompany = dataArr => {
  const result = dataArr.reduce((sum, item) => sum + item.workingTime * item.salary, 0);
  return `Tổng tiền lương công ty trả là: ${result}$`;
};

const getTotalSalaryOfEmployee = name => {
  let result = '';
  const personData = employeesInfo.find(item => item.name === name);
  if (!!personData) {
    const salary = personData.workingTime * personData.salary;
    const bonus = getBonus(personData.workingTime);
    result = `Lương của nhân viên ${name} là: ${salary + bonus}$`;
  } else {
    result = 'Nhân viên không tồn tại';
  }

  return result;
};

const getBonus = workingTime => {
  let result = 0;
  for (bonusPoint of bonusInfo) {
    if (workingTime >= bonusPoint.point) {
      result = bonusPoint.bonus;
      break;
    }
  }
  return result;
};

console.log(getTotalSalaryOfCompany(employeesInfo));
console.log(getTotalSalaryOfEmployee('Santos'));
console.log(getTotalSalaryOfEmployee('Luiz'));
console.log(getTotalSalaryOfEmployee('Duy'));
