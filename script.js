 'use strict';





 const  contener = document.querySelector('.contener'),
        inputTitle = document.querySelector('#inputTitle'),
        inputDesc = document.querySelector('#inputDesc'),
        taskField = document.querySelector('.task_field'),
        backAll= document.querySelector('.back_all'),
        alert= document.querySelector('.alert'),
        check=document.querySelector('.check'),
        del=document.querySelectorAll('.del'),
        box = document.querySelectorAll('.task_box'),
        btnOpen=document.querySelector('.btn_open'),
        btnDel=document.querySelector('.btn_del'),
        button=document.querySelector('#button'),
        modalInput=document.querySelector('.modal_input'),
        dots= document.querySelector('#dots'),
        start= document.querySelector('.start');
        
        const tasks = [];
       
        
        
        window.addEventListener('DOMContentLoaded',()=>{
          start.style.opacity= '10';
          start.style.transition= 'all 2.5s';
          
          function close(){
            start.style.opacity= '0';
            start.style.transition= 'all 2.5s';
          }

          const closeStart = setTimeout(close,3000);


          if(localStorage.getItem('tasks')){
            
            taskField.innerHTML = localStorage.getItem('tasks');
           
          
          }
        })

        
        contener.addEventListener('submit', (e)=>{
              e.preventDefault();  
              
               let inputTitleValue = inputTitle.value;
               let inputDescValue = inputDesc.value;

             
              
             
              if(inputTitleValue && inputDescValue ){
                const li = document.createElement('li');
                li.classList.add('task_item');
                li.innerHTML=`
                    <div id="dots">
                      <span class="dots">...</span>
                      
                      <div  class="dots_menu">
                        <div class="btn edit">edit</div>
                        <div class="btn check">done</div>
                        <div class="btn del">del</div>
                      </div>
                   
                    </div>
                    <div class="text_block">
                          <div class="task_title">${inputTitleValue}</div>
                          <div class="task_descr">${inputDescValue}</div>
                    </div>
                    
  
                `
                taskField.append(li);
                tasks.push(li);
                
                
               
                
                const set = document.createElement('div');
                set.classList.add('edit_back');
                set.innerHTML=`

                <div  class="edit_field ">
                  <input id="input_titleedit" class="input_edit" value="${''}"></input>
                  <textarea id="input_descredit" class="input_edit" type="text"  value="">${''}</textarea>
                  <div id="editDone" class="btn editDone">edit</div>
                </div>

                `
               
                li.append(set)
                
           
              }
            

              inputTitle.value = '';
              inputDesc.value ='';
             
              
              

              
              

              

        })


        button.addEventListener('click',()=>{
          modalInput.style.transform='translateX(-875px)';
          document.getElementById('inputTitle').placeholder ='add a title';
          document.getElementById('inputDesc').placeholder ='add a discription';
         
          
        })
       
        contener.addEventListener('click', done);
        contener.addEventListener('click', delite);
        

        contener.addEventListener('click', (e)=>{
          const target = e.target;
          if(target.classList.contains('dots')){
            const dotsMenu = document.querySelectorAll('.dots');
            
            dotsMenu.forEach((item,i)=>{
              if(item==target){
               
                openMenu(i);

              }
            });
          }
        });

       
        btnOpen.addEventListener('click',openInput);
       
       
        function openInput(){
          modalInput.style.transform='translateX(0)';
        };
        function closeAll(){
          const allLi = document.querySelectorAll('li');
          allLi.forEach(item=>{
            item.style.transform='translateX(-875px)';
           
          });
          
        };


        


        function done(e){
          const target = e.target;
          
          if(target.classList.contains('check')){
            const checkOk = target.closest('.task_item');
            checkOk.classList.toggle('done')
          }
          saveHTML();
        }


        function delite(e){
          const target = e.target;

          if(target.classList.contains('del')){
              const delParrent = target.closest('.task_item');
              delParrent.classList.add('none');
          }
          saveHTML();
        }

        let menuArr;

        function openMenu(index){
          
          menuArr = document.querySelectorAll('.dots_menu');

          menuArr.forEach((item,i)=>{
            if(i==index){
              item.classList.toggle('open')
            }
          })
          saveHTML();
          
        }
        


        
        contener.addEventListener('click',(e)=>{
          const target = e.target;

          if(target.classList.contains('edit')){
                menuArr.forEach(item=>{
                 item.classList.remove('open')
               })

               const editBtn= document.querySelectorAll('.edit');
             
               editBtn.forEach((item,i)=>{
                if(item==target){
                  openEdit(i);
                }
               })

               
        
            }
               
         

          if(target.classList.contains('editDone')){
            
            const parrent = target.closest('.edit_back');
            parrent.style.display = 'none';
         
            
            saveHTML();
           
          }
          
        });
       
        
        function openEdit (index){
          const editBox= document.querySelectorAll('.edit_back');
          const editPanel= document.querySelectorAll('.edit_field');
          const editDone= document.querySelectorAll('#editDone');

         

          editDone.forEach(item=>{
            item.addEventListener('click', (e)=>{
              
              editDone.forEach((item,i)=>{
               
                if(e.target == item){
                  
                  editTask(i);
                  
                }
              })
            })
          })
          
          
       

          editBox.forEach((item,i)=>{
            if(i==index){
              item.style.display = "block";
            }
          })
          editPanel.forEach((item,i)=>{
            if(i==index){
              item.style.display = "block";
            }
          })
          saveHTML();
          
        }
 


        function editTask(index){
          
          const inputTitleedit=document.querySelectorAll('#input_titleedit');
        
          const inputDescredit=document.querySelectorAll('#input_descredit');
          
          
           
          inputTitleedit.forEach((item,i)=>{
            if(i==index ){
              const taskTitle = document.querySelectorAll('.task_title');
              taskTitle.forEach((items,i)=>{
                if(i==index ){
                  if(item.value!=''){
                    items.textContent=item.value;}
                  
                  saveHTML();
                }
                  
                
              })
             
              
            }
         
          })
             

          inputDescredit.forEach((item,i)=>{
            
            if(i==index ){
              const taskDesk = document.querySelectorAll('.task_descr');
              taskDesk.forEach((items,i)=>{
                if(i==index ){
                  if(item.value!=''){
                    items.textContent=item.value;}
                  
                  saveHTML();
                }
                  
                
              })
             
              
            }
          })
             
             

          saveHTML();
             
             
           
            
          

    
         
          
        }


        function saveHTML(){
          localStorage.setItem('tasks', taskField.innerHTML);
          
        }
       

        
       














































    

      


     
   