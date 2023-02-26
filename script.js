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
          
          if(target.classList.contains('check')){
            const checkOk = target.closest('.task_item');
            checkOk.classList.toggle('done')
          }
        }


        function delite(e){
          const target = e.target;

          if(target.classList.contains('del')){
              const delParrent = target.closest('.task_item');
              delParrent.classList.add('none');
          }
        }

















































    

      


     
   