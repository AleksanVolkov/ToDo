 'use strict';


 const  contener = document.querySelector('.contener'),
        input    = document.querySelector('#input'),
        btn_task = document.querySelector('.btn_task'),
        check= document.querySelector('.check'),
        
        task_descrp =document.querySelector('.task_descrp');



        let inputData='введите задание!!!';


        
        input.addEventListener('input',()=>{
            
            inputData = input.value;
           
        })

        btn_task.addEventListener('click', ()=>{

          
            const div = document.createElement('div');
            div.classList.add('task_box')


          
            div.innerHTML=`
             <div class="task_descrp">${inputData}</div>
             
                <div class="check">	&#10004</div>
                <div class="del">&#11198</div>
                
                
            
            
            `
            contener.append(div)
              
            
            const del = document.querySelectorAll('.del'),
             check = document.querySelectorAll('.check'),
            box = document.querySelectorAll('.task_box');

            contener.addEventListener('click', (e)=>{
                const target = e.target;
               
                if(target && target.classList.contains('check')){
                    check.forEach((item)=>{
                     if(item=target){
                         item.parentElement.style.boxShadow="0px 0px 9px 1px #558978";
                     }
                    })
                    
                   }

              

                if(target && target.classList.contains('del')){
                   del.forEach((item)=>{
                    if(item=target){
                        item.parentElement.remove();
                    }
                   })
                   
                  }
                

            })
           
             

        })







       

















































// const btnTask = document.querySelector('.btn'),
//       inputTask = document.getElementById('input'),
//       wrapperTask = document.querySelector('.wrapper');
      


//     let tasks;


//     function Task(input){

//         this.input=input;
//         this.condition = false;
//     }



//     !localStorage.tasks? tasks = []: tasks=JSON.parse(localStorage.getItem('tasks'));

  
    

//     function createTemplate (task,i){
//         return `
//         <div class="task_box">
//         <div class="task_descrp">${task.input}</div>
//         <div class="del_block">
//              <input id ="task_input" type="checkbox">
//              <div class="task_del">
//                  <p  class="del_p">удалить</p> </div>
//         </div>
        
//         </div>
//         `


        
//     }

//     const fillTaskList = ()=>{
//         wrapperTask.innerHTML = "";
//         if(tasks.lenght > 0){
//             tasks.forEach((item, i)=>{
//                 wrapperTask.innerHTML += createTemplate(item, i);
//             });
//         }
//     }


//     function upLocalStorage(){
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
//     btnTask.addEventListener('click', ()=>{

       
        
//             tasks.push(new Task(inputTask.value));
//             upLocalStorage();
//             fillTaskList();
//             //let clean = document.getElementById('input').value = "";
            
            
        
//         console.log(tasks);
        
//     });


//     const options = {
//         name:'1',
//         width:'1070px',
//         height:'650px',
//         color:{
//             fonts:'white',
//             background:'red'
//         }
//     }

  
     
//      function newObject (object){
//          const nextObject={};
//          let key;

//          for(key in object){
//              if(object[key] == typeof(Object)){
//                  for(let i in object[key]){
//                     nextObject[key]=object[key][key];
//                  }
//              }else{nextObject[key]= object[key]}
             
//          }
//          return nextObject;
//      }

//      const newOptions = newObject(options);
      

//      console.log(newOptions);
    

      


     
   