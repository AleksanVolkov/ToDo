 'use strict';


 const  contener = document.querySelector('.contener'),
        input    = document.querySelector('#input'),
        taskField = document.querySelector('.task_field'),
        alert= document.querySelector('.alert'),
        check=document.querySelector('.check'),
        del=document.querySelectorAll('.del'),
        box = document.querySelectorAll('.task_box');
        
        
        contener.addEventListener('submit', (e)=>{
              e.preventDefault();  
              const inputValue = input.value;
              console.log(inputValue);


              const li = document.createElement('li');
              li.classList.add('task_item');
              li.innerHTML=`
                  <div class="text_block">
                        <div class="task_title" data-action="done">${inputValue}</div>
                        <div class="task_descr" data-action="done">магазин работает до 22.00</div>
                  </div>
                  <div class="task_item_btn">
                    <div class="check">	&#10004</div>
                    <div class="del">&#11198</div>
                  </div>

              `
              taskField.append(li);



        })
        contener.addEventListener('click', done);
        contener.addEventListener('click', delite);

        function done(e){
          const target = e.target;
          
<<<<<<< HEAD
          if(target.classList.contains('check')){
            const checkOk = target.closest('.task_item');
            checkOk.classList.toggle('done')
=======
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
            
>>>>>>> c476400f9b2a85c1c91ea11d6769877105a2436a
          }
        }


        function delite(e){
          const target = e.target;

          if(target.classList.contains('del')){
              const delParrent = target.closest('.task_item');
              delParrent.classList.add('none');
          }
        }

















































    

      


     
   