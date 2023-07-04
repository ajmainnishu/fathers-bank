document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');

    const withdrawFieldString = withdrawField.value;
    withdrawField.value = '';
    if (isNaN(withdrawFieldString)) {
        alert('Please provide a valid number');
        return;
    }
    const newWithdrawField = parseFloat(withdrawFieldString);
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotalString);
    const totalWithdrawAmount = newWithdrawField + newWithdrawTotal;
    withdrawTotal.innerText = totalWithdrawAmount;


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalString);
    if (newBalanceTotal == 0) {
        alert('Your balance 0, please deposit first')
        return
    }
    else if (newBalanceTotal < newWithdrawField) {
        alert('Please provide a less then total balance');
        return;
    }
    const totalBalanceAmount = newBalanceTotal - newWithdrawField;
    balanceTotal.innerText = totalBalanceAmount;
})