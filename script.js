// Navigation between sections
const navNew=document.getElementById('nav-new');
const navExpences=document.getElementById('nav-expense');
const navStatistics=document.getElementById('nav-statistics');
const newSection=document.getElementById('new');
const expenseSection=document.getElementById('expense');
const statisticsSection=document.getElementById('statistics');
// Initial load
function firstLoad(){
  newSection.hidden=false;
  expenseSection.hidden=true;
  statisticsSection.hidden=true;
}

firstLoad();
// New section
navNew.addEventListener('click',()=>{  
 if( newSection.hidden===true){    
  newSection.hidden= !newSection.hidden;
  expenseSection.hidden=true;
  statisticsSection.hidden=true;
    }else{ 
    }
});
// Expense section
navExpences.addEventListener('click',()=>{ 
 if( expenseSection.hidden===true){    
  expenseSection.hidden= !expenseSection.hidden;
  newSection.hidden=true;
  statisticsSection.hidden=true;
    }else{
    } 
});  
 
// Statistics section
navStatistics.addEventListener('click',()=>{
    if( statisticsSection.hidden===true){    
  statisticsSection.hidden= !statisticsSection.hidden;
  newSection.hidden=true;
  expenseSection.hidden=true;
    }else{
    }    
});
// End of navigation between sections
//Adding new expense
const addExpenseBtn = document.getElementById('submit-expense');
const expenseForm = document.getElementById('expense-form')
let expenses = [];
 expenses = JSON.parse(localStorage.getItem('expenses') || '[]');    


addExpenseBtn.addEventListener('click', (e) => {  
  e.preventDefault();  
  
  

  
  const newExpense = new FormData (expenseForm)
  const newexpenseData =Object.fromEntries(newExpense.entries());
  
  expenses.push(newexpenseData);   
  
  localStorage.setItem('expenses', JSON.stringify(expenses));
  
  expenseForm.reset()
  renderExpenses()
});

const renderExpenseDiv = document.getElementById('renderlistoutput');
renderExpenses()

function renderExpenses() {
  let html = '';  
  
  expenses.forEach(exp => {
    html += `<li class="expense-item">${exp.description}: ${exp.amount}€ (${exp.category}, ${exp.date})</li>`;
  });
  
  if (expenses.length === 0) {
    html = '<p class="no-entries">Noch keine Einträge</p>';
  }
 
  renderExpenseDiv.innerHTML =html;
  renderStatistics()
}
//statistics section
const renderStatsSection = document.getElementById('render-stats-section')
console.log(renderStatsSection)

function renderStatistics() {
  let amountStat = 0;  // Declare + init here!

  for (let i = 0; i < expenses.length; i++) {
    amountStat += Number(expenses[i].amount);
  }

  const statstring = `Tracked expenses: ${amountStat}`;
  console.log(statstring);
  statisticsSection.innerHTML = statstring;
}
