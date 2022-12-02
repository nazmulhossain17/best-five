
function firstCount(){
    const inputField = document.getElementById('input-field');
    const inputFieldTotalString = inputField.value;
    const inputFieldTotal = parseInt(inputFieldTotalString);

    const totalExpense = document.getElementById('total-expenses');
    const previousTotalExpenseString = totalExpense.innerText;
    const previousTotalExpense = parseInt(previousTotalExpenseString);

    const totalPrice = inputFieldTotal * 5;
    totalExpense.innerText = totalPrice;
}


document.getElementById('calculate-btn').addEventListener('click', function(){
    firstCount();
    
})

document.getElementById('last-count').addEventListener('click', function(){
    const managerField = document.getElementById('manager');
    const managerFieldTotalString = managerField.value;
    const managerFieldTotal = parseInt(managerFieldTotalString);

    const coachField = document.getElementById('coach-field');
    const coachFieldTotalString = coachField.value;
    const coachFieldTotal = parseInt(coachFieldTotalString);

    const finalField = document.getElementById('final');
    
    const totalExpense = document.getElementById('total-expenses');  
    const previousTotalExpenseString = totalExpense.innerText;
    const previousTotalExpense = parseInt(previousTotalExpenseString);

    const totalPeopleCount = managerFieldTotal + coachFieldTotal + previousTotalExpense;
    finalField.innerText = totalPeopleCount;

    
    

})