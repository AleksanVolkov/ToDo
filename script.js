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
        button=document.querySelector('#button'),
        modalInput=document.querySelector('.modal_input'),
        dots= document.querySelector('#dots'),
        editDone= document.querySelector('#editDone');
        
        
        
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
                
                const set = document.createElement('div');
                set.classList.add('edit_back');
                set.innerHTML=`

                <div  class="edit_field ">
                <input id="input_titleedit" class="input_edit" value="${inputTitleValue}"></input>
                <textarea id="input_descredit" class="input_edit" type="text"  value="">${inputDescValue}</textarea>
                <div id="editDone" class="btn editDone">edit</div>
                  </div>

                `

                contener.append(set)
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

        // contener.addEventListener('click', edit);
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


        // function edit(e){
        //   const target = e.target;
         
        //   if(target.classList.contains('edit')){
        //     menuArr.forEach(item=>{
        //       item.classList.remove('open')
        //     })


            
        //   }
        // }


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

        let menuArr;

        function openMenu(index){
          
          menuArr = document.querySelectorAll('.dots_menu');

          menuArr.forEach((item,i)=>{
            if(i==index){
              item.classList.toggle('open')
            }
          })
          
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
            parrent.style.display = 'none'
          }
        });
       
        
        function openEdit (index){
          const editBox= document.querySelectorAll('.edit_back');
          const editPanel= document.querySelectorAll('.edit_field');
          

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
        }
 















































    

      


     
   