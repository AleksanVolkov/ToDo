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
             <div class="task_descrp" >${inputData}</div>
             
                <div class="check" data-action ='done'>	&#10004</div>
                <div class="del">&#11198</div>
                
               
                
                
            
            
            `
            contener.append(div)
              
            
            const del = document.querySelectorAll('.del');
             
           

         
        
            contener.addEventListener('click', done);
           

            function done(e){
              const target = e.target;

             if(target.dataset.action==='done'){
              const parrent = target.closest('.task_box');
              parrent.classList.toggle('done')
             
             
             }
            
              
            }
  
              
         
            contener.addEventListener('click', (e)=>{
                const target = e.target;
                

               
              

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




















































    

      


     
   