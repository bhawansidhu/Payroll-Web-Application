let salPerHour;
let flatFixedSalary;
let fixedSalary;
let salaryHourlyRate;
let overTimeHours;
let totalSalary;
let grossSalary;
let deductions;
let deductedSalary;
let netPay;
const masterTeachingAllowance = 1500;
const bachelorTeachingAllowance = 600;
let calculate = document.getElementById(`buttonPaySlip`);

/* Functions */
function CalculateSalary() {
    let employeeId = document.getElementById('empNum').value;
    let employeeName = document.getElementById('empName').value;
    let employeeDepartment = document.getElementById('dept').value;
    let employeeHours = document.getElementById('hours').value;
    let employeeCode = document.getElementById('empCode').value;
    let qualificationCode = document.getElementById('quaCode').value;
    console.log("Employee Number:" + employeeId);
    console.log("Employee Name:" + employeeName);
    console.log("Employee Department:" + employeeDepartment);
    console.log("Number of hours worked:" + employeeHours);


    if (employeeCode == "F" || employeeCode == "f") {
        console.log("Employee Type:" + " Faculty");
        if (qualification_code == "M" || qualification_code == "m") {
            salPerHour = 175;
            fixedSalary = salPerHour * employeeHours + masterTeachingAllowance;
            console.log("Gross Salary:" + fixedSalary);
            if (fixedSalary > 3000) {
                deductions = (fixedSalary * 0.25) - 33;
                netPay = fixedSalary + 2500 - deductions;
                console.log("Deductions:" + deductions);
                console.log("Net Pay:" + netPay);
            }
            else if (fixedSalary <= 3000) {
                deductions = (fixedSalary * 0.25) - 19.20;
                netPay = fixedSalary + 2500 - deductions;
                console.log("Deductions:" + deductions);
                console.log("Net Pay:" + netPay);
            }
            //console.log(fixedSalary);

        }
        else if (qualificationCode == "B" || qualificationCode == "b") {
            salPerHour = 100;
            fixedSalary = salPerHour * employeeHours + bachelorTeachingAllowance;
            console.log("Gross Salary:" + fixedSalary);
            if (fixedSalary > 3000) {
                deductions = (fixedSalary * 0.25) - 33;
                netPay = fixedSalary + 2500 - deductions;
                console.log("deductions:" + deductions);
                console.log("Net Pay:" + netPay);
            }
            else if (fixedSalary <= 3000) {
                deductions = (fixedSalary * 0.25) - 19.20;
                netPay = fixedSalary + 2500 - deductions;
                console.log("deductions:" + deductions);
                console.log("Net Pay:" + netPay);
            }
        }
    }
    else if (employeeCode == "R" || employeeCode == "r") {
        console.log("Employee Type:" + " Regular");

        fixedSalary = prompt("Enter Employee's Salary");
        if (employeeHours == 160 && fixedSalary > 3000) {
            flatFixedSalary = fixedSalary;

            deductions = (fixedSalary * 0.25) - 33;
            netPay = parseInt(fixedSalary) + 2500 - deductions;
            console.log("Gross Salary:" + fixedSalary);
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);

        }
        else if (employeeHours == 160 && fixedSalary <= 3000) {
            flatFixedSalary = fixedSalary;
            console.log("Gross Salary:" + fixedSalary);
            deductions = (fixedSalary * 0.25) - 19.20;
            netPay = parseInt(fixedSalary) + parseFloat(2500 - deductions);
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }

        else if (employeeHours < 160 && fixedSalary > 3000) {
            salaryHourlyRate = fixedSalary / employeeHours;
            totalSalary = (salaryHourlyRate * employeeHours).toFixed(2);
            console.log("Gross Salary:" + totalSalary);
            deductions = ((totalSalary * 0.25) - 33).toFixed(2);
            netPay = (totalSalary + 2500 - deductions).toFixed(2);
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }
        else if (employeeHours < 160 && fixedSalary <= 3000) {
            salaryHourlyRate = fixedSalary / employeeHours;
            totalSalary = (salaryHourlyRate * employeeHours).toFixed(2);
            console.log("Gross Salary:" + totalSalary);
            deductions = ((totalSalary * 0.25) - 19.20).toFixed(2);
            netPay = (totalSalary + 2500 - deductions).toFixed(2);
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }
        else if (employeeHours > 160 && fixedSalary > 3000) {
            overTimeHours = employeeHours - 160;
            salaryHourlyRate = fixedSalary / 160;
            totalSalary = (160 * salaryHourlyRate + overTimeHours * salaryHourlyRate * 2).toFixed(2);
            console.log("Gross Salary:" + totalSalary);
            deductions = ((totalSalary * 0.25) - 33).toFixed(2);
            netPay = (totalSalary + 2500 - deductions).toFixed(2);
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }
        else if (employeeHours > 160 && totalSalary <= 3000) {
            overTimeHours = employeeHours - 160;
            salaryHourlyRate = fixedSalary / 160;
            totalSalary = (160 * salaryHourlyRate + overTimeHours * salaryHourlyRate * 2).toFixed(2);
            console.log("Gross Salary:" + totalSalary);
            deductions = ((totalSalary * 0.25) - 19.20).toFixed(2);
            netPay = (totalSalary + 2500 - deductions).toFixed(2);
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }
    }




    document.getElementById(`empNumOutput`).innerText = employeeId.value;
    document.getElementById(`empNameOutput`).innerText = employeeName.value;
    document.getElementById(`empDeptOutput`).innerText = employeeDepartment.value;
    document.getElementById(`empCodeOutput`).innerText = employeeCode.value;
    document.getElementById(`hoursOutput`).innerText = employeeHours.value;
    document.getElementById(`grossSalaryOutput`).innerHTML = grossSalary;
    document.getElementById(`DeductionOutput`).innerHTML = deductions;
    document.getElementById(`empNetPayOutput`).innerHTML = netPay;
}

// Event Listener Click
calculate.addEventListener("click", CalculateSalary);

