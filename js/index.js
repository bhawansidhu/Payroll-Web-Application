let buttonPaySlip = document.getElementById("buttonPaySlip");

 // Function for gross salary

function calcuGrossSal() {
    let empCode = document.getElementById("empCode");
    let qCode = document.getElementById("quaCode");
    let hours = document.getElementById("hours");
    let empFixSalary = document.getElementById("empFixSalary");
    let empGrossSalary;

   
    if (empCode.selectedIndex == 0) {
        
    if (qCode.selectedIndex == 0) {
            empGrossSalary = ((175 * parseFloat(hours.value)) + 1500).toFixed(2);
        } else {
            empGrossSalary = ((100 * parseFloat(hours.value)) + 600).toFixed(2);
        }
    } else {
        
        
    
        if (hours.value < 160) {
            hoursRate = (parseFloat(empFixSalary.value) / 160).toFixed(2);
            empGrossSalary = parseFloat(hoursRate * hours.value).toFixed(2);
        } else {
            overTimeHours = parseFloat(hours.value) - 160;
            hoursRate = (parseFloat(empFixSalary.value) / 160).toFixed(2);
            empGrossSalary = ((parseFloat(hoursRate) * 160) + (overTimeHours * (hoursRate) * 2)).toFixed(2);
        }
    }
    return empGrossSalary;
}

function calcuDeductionAmount(empGrossSalary) {

    const incomeTaxPercentage = 25;
    const incomeTax = (parseFloat(empGrossSalary * incomeTaxPercentage) / 100).toFixed(2);
    let totalDeduction;
    if (empGrossSalary> 3000) {
        totalDeduction = parseFloat(incomeTax) + 33;
    } else if (empGrossSalary < 2500) {
        totalDeduction = 19.20;
    } else {
        totalDeduction = parseFloat(incomeTax) + 19.20;
    }
    return totalDeduction;
}

function calcuNetPay() {
    let empNum = document.getElementById("empNum");
    let empName = document.getElementById("empName");
    let empDept = document.getElementById("empDept");

    
    const empGrossSalary = calcuGrossSal(); // gross salary

    const totalDeduction = calcuDeductionAmount(empGrossSalary); // deduction amount (CIT & health Surcharge)

    netPay = (empGrossSalary - totalDeduction).toFixed(2); // net pay 

    //output (Pay slip)
    document.getElementById(`empNumOutput`).innerText = empNum.value;
    document.getElementById(`empNameOutput`).innerText = empName.value;
    document.getElementById(`empDeptOutput`).innerText = empDept.value;
    document.getElementById(`empCodeOutput`).innerText = empCode.value;
    document.getElementById(`hoursOutput`).innerText = hours.value;
    document.getElementById(`grossSalaryOutput`).innerHTML = '$' + empGrossSalary;
    document.getElementById(`deductionOutput`).innerHTML = '$' + totalDeduction;
    document.getElementById(`empNetPayOutput`).innerHTML = '$' + netPay;
}

buttonPaySlip.addEventListener("click", calcuNetPay);