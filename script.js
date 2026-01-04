const navNew=document.getElementById('nav-new');
const navExpences=document.getElementById('nav-expense');
const navStatistics=document.getElementById('nav-statistics');
const newSection=document.getElementById('new');
const expenseSection=document.getElementById('expense');
const statisticsSection=document.getElementById('statistics');

function firstLoad(){
  newSection.hidden=false;
  expenseSection.hidden=true;
  statisticsSection.hidden=true;
}

firstLoad();

navNew.addEventListener('click',()=>{  
 if( newSection.hidden===true){    
  newSection.hidden= !newSection.hidden;
  expenseSection.hidden=true;
  statisticsSection.hidden=true;
    }else{ 
    }
});

navExpences.addEventListener('click',()=>{ 
 if( expenseSection.hidden===true){    
  expenseSection.hidden= !expenseSection.hidden;
  newSection.hidden=true;
  statisticsSection.hidden=true;
    }else{
    } 
});  
 

navStatistics.addEventListener('click',()=>{
    if( statisticsSection.hidden===true){    
  statisticsSection.hidden= !statisticsSection.hidden;
  newSection.hidden=true;
  expenseSection.hidden=true;
    }else{
    }    
});
  