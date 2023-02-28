 'use strict';


 const  contener = document.querySelector('.contener'),
        inputTitle = document.querySelector('#inputTitle'),
        inputDesc = document.querySelector('#inputDesc'),
        taskField = document.querySelector('.task_field'),
        alert= document.querySelector('.alert'),
        check=document.querySelector('.check'),
        del=document.querySelectorAll('.del'),
        box = document.querySelectorAll('.task_box'),
        btnOpen=document.querySelector('.btn_open'),
        btnDel=document.querySelector('.btn_del'),
        button=document.querySelector('button'),
        modalInput=document.querySelector('.modal_input');
        
        
        contener.addEventListener('submit', (e)=>{
              e.preventDefault();  
              
              const inputTitleValue = inputTitle.value;
              let inputDescValue = inputDesc.value;
              // if(inputDescValue.length>40){
              //   // inputDescValue=inputDescValue.slice(0,35);
                
              // }

              if(inputTitleValue && inputDescValue ){
                const li = document.createElement('li');
                li.classList.add('task_item');
                li.innerHTML=`
                    <div class="text_block">
                          <div class="task_title">${inputTitleValue}</div>
                          <div class="task_descr">${inputDescValue}</div>
                    </div>
                    <div class="task_item_btn">
                      <div class="check">	&#10004</div>
                      <div class="del">&#11198</div>
                    </div>
  
                `
                taskField.append(li);
              }
              

              inputTitle.value = '';
              inputDesc.value ='';
              button.addEventListener('click',()=>{
                document.getElementById('inputTitle').placeholder ='название задачи';
                document.getElementById('inputDesc').placeholder ='комментарии';

              })
             

              
              



        })
        contener.addEventListener('click', done);
        contener.addEventListener('click', delite);
        btnOpen.addEventListener('click',openInput);
        btnDel.addEventListener('click',closeAll);
       
        function openInput(){
          modalInput.style.display='flex';
        };
        function closeAll(){
          const allLi = document.querySelectorAll('li');
          allLi.forEach(item=>{
            item.style.display='none'
          });
          
        };
        

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

















































    

      


     
   