 'use strict';


 const  contener = document.querySelector('.contener'),
        input    = document.querySelector('#input'),
        btn_task = document.querySelector('.btn_task'),
        
        alert= document.querySelector('.alert'),
        line= document.querySelector('.line');
        
        


    
        let inputData;

      

        
        input.addEventListener('input',()=>{
            
            inputData = input.value;
           

            alert.style.visibility = 'hidden';
            alert.style.opacity = 0;
           
           
        })


       
        btn_task.addEventListener('click', ()=>{

          if(inputData){
            const div = document.createElement('div');
            div.classList.add('task_box')
           

          
            div.innerHTML=`
             <div class="task_descrp">${inputData}</div>
             
                <div class="check">	&#10004</div>
                <div class="del">&#11198</div>
                
               
                
                
            
            
            `
            contener.append(div)
              
            
            const del = document.querySelectorAll('.del'),
             
            box = document.querySelectorAll('.task_box');

         
            let check = document.querySelectorAll('.check');

            
           function done (target){
           
                  check.forEach(ch=>{
                    if(ch==target){
                      ch.classList.toggle('done');
                  }
                  })
                  
           }

           
  
              
         
            contener.addEventListener('click', (e)=>{
                const target = e.target;
                

                if(target && target.classList.contains('check')){
                  done(target);
                  
    
                }
               
              

                if(target && target.classList.contains('del')){
                 
                   del.forEach((item)=>{
                    if(item==target){
                        item.parentElement.remove();
                    }
                   })
                   
                  }
                

            })
           
            input.placeholder="введите задние для записи";
            inputData='';
            input.value='';

          }else{
            
            alert.style.visibility = 'visible';
            alert.style.opacity = 1;

            setTimeout(()=>{
              alert.style.visibility = 'hidden';
              alert.style.opacity = 0;
            },2000)
            
          }

        })




















































    

      


     
   