const buttons=document.querySelectorAll('.button');
const display=document.getElementById('display');
const query=document.getElementById('query');
const result=document.getElementById('result');

buttons.forEach(button=> {
    button.addEventListener('click',(e)=>{
        
        if(e.target.id==='equal'){
            displayres(query);
        }
        else if(e.target.id==='remove'){
            query.textContent = query.textContent.slice(0, -1);
    
        }
        else if(e.target.id==='clear-display'){
            query.textContent='';
            result.textContent=0;
        }
       else{
        query.textContent+=e.target.innerHTML;
       }
        
      
   
    });
});

function displayres(query){
    const content=query.textContent;
    try{
        const computeValue=eval(content);
         result.textContent=computeValue;
         query.textContent=computeValue;
    }
    catch(error){
        result.textContent="error";
    }
}
