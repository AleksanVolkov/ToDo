 'use strict';


 const  contener = document.querySelector('.contener'),
        input    = document.querySelector('#input'),
        btn_task = document.querySelector('.btn_task'),
        alert= document.querySelector('.alert'),
        del = document.querySelectorAll('.del'),
        box = document.querySelectorAll('.task_box');
        
        


    
        let inputData;

      

        
        input.addEventListener('input',()=>{
            
            inputData = input.value;
           

            alert.style.visibility = 'hidden';
            alert.style.opacity = 0;
           
           
        })


     
   
       
        btn_task.addEventListener('click', (e)=>{
e.preventDefault();
          if(inputData){}
        });

          function done (event){
           
            if(event.target.dataset.action==='done'){

            }
             
          }
           

           contener.addEventListener('click', done);
              
         
            contener.addEventListener('click', (e)=>{
                const target = e.target;

                if(target && target.classList.contains('del')){
                 
                        del.forEach((item)=>{
                      if(item==target){
                            item.parentElement.remove();
                        }
                      })
                      
                      }else{
            
                        alert.style.visibility = 'visible';
                        alert.style.opacity = 1;

                        setTimeout(()=>{
                          alert.style.visibility = 'hidden';
                          alert.style.opacity = 0;
                        },2000)
                      }
                    })
                

               




















































    

      


     
   