'use strict';


const btnTask = document.querySelector('.btn'),
      inputTask = document.getElementById('input');


    let tasks = [];


    function Task(input){

        this.input=input;
        this.condition = false;
    }

    btnTask.addEventListener('click', ()=>{

       
        
            tasks.push(new Task(inputTask.value));
            let clean =document.getElementById('input').value = '';

            let card = document.createElement('div')
               card.innerHTML = `
               <div>
               ${task.input}
               </div>
               <div>
               ${task.input}
               </div>
               
               `       
               
               card.append('back_all');
        
        console.log(tasks);
        
    });



    


        
         

   


      