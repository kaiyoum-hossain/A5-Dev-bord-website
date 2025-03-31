
document.getElementById('disabled-btn').addEventListener('click', function(event){
    event.preventDefault();
alert('thik ase')
    const Tasknumber =document.getElementById('task-number').innerText;
   const convartedTask = parseInt(Tasknumber);
   const Eventnumber=document.getElementById('event-number').innerText ;
   const convartedNmuber =parseInt(Eventnumber);
    const btn =document.getElementById('disabled-btn');
    
    // const commentTextBox=document.getElementById('comment');
    // const newText =commentTextBox.value;

    // const cardBtn =document.getElementById('card-btn');
    
    // const commentElement =document.createElement('p');
    //  commentElement.innerText =newText;


   if(convartedTask !== convartedNmuber){
    const sum=convartedTask - 1 ;
    document.getElementById('task-number').innerText = sum ;
    const num=convartedNmuber + 1 ;
    document.getElementById('event-number').innerText = num;
    btn.disabled = true;
    // cardBtn.appendChild(commentElement);
    
   }
})
// 2...................


document.getElementById('disabled-btnn').addEventListener('click', function(event){
    event.preventDefault();
    alert('thik ase')
    const Tasknumber =document.getElementById('task-number').innerText;
   const convartedTask = parseInt(Tasknumber);
   const Eventnumber=document.getElementById('event-number').innerText ;
   const convartedNmuber =parseInt(Eventnumber);

   const btn =document.getElementById('disabled-btnn')
 
   if(convartedTask !== convartedNmuber){
    const sum=convartedTask - 1 ;
    document.getElementById('task-number').innerText = sum ;
    const num=convartedNmuber + 1 ;
    document.getElementById('event-number').innerText = num;
  btn.disabled = true;

   }
})

// 3...........................

document.getElementById('disabled-btn3').addEventListener('click', function(event){
    event.preventDefault();
    alert('thik ase')
    const Tasknumber =document.getElementById('task-number').innerText;
   const convartedTask = parseInt(Tasknumber);
   const Eventnumber=document.getElementById('event-number').innerText ;
   const convartedNmuber =parseInt(Eventnumber);

   const btn =document.getElementById('disabled-btn3')

   if(convartedTask !== convartedNmuber){
    const sum=convartedTask - 1 ;
    document.getElementById('task-number').innerText = sum ;
    const num=convartedNmuber + 1 ;
    document.getElementById('event-number').innerText = num;
    btn.disabled = true;

   }
})

// 4...............................
document.getElementById('disabled-btn4').addEventListener('click', function(event){
    event.preventDefault();
    alert('thik ase')
    const Tasknumber =document.getElementById('task-number').innerText;
   const convartedTask = parseInt(Tasknumber);
   const Eventnumber=document.getElementById('event-number').innerText ;
   const convartedNmuber =parseInt(Eventnumber);

   const btn =document.getElementById('disabled-btn4')
 

   if(convartedTask !== convartedNmuber){
    const sum=convartedTask - 1 ;
    document.getElementById('task-number').innerText = sum ;
    const num=convartedNmuber + 1 ;
    document.getElementById('event-number').innerText = num;
    btn.disabled = true;
   }
})
// 5-----------------------------------
document.getElementById('disabled-btn5').addEventListener('click', function(event){
    event.preventDefault();
    alert('thik ase')
    const Tasknumber =document.getElementById('task-number').innerText;
   const convartedTask = parseInt(Tasknumber);
   const Eventnumber=document.getElementById('event-number').innerText ;
   const convartedNmuber =parseInt(Eventnumber);

   const btn =document.getElementById('disabled-btn5')
 
   if(convartedTask !== convartedNmuber){
    const sum=convartedTask - 1 ;
    document.getElementById('task-number').innerText = sum ;
    const num=convartedNmuber + 1 ;
    document.getElementById('event-number').innerText = num;
    btn.disabled = true;
   }
})

// 6-------------------------------------
document.getElementById('disabled-btn6').addEventListener('click', function(event){
    event.preventDefault();
    alert('thik ase');
    alert('sob kisu valo ase')
    const Tasknumber =document.getElementById('task-number').innerText;
   const convartedTask = parseInt(Tasknumber);
   const Eventnumber=document.getElementById('event-number').innerText ;
   const convartedNmuber =parseInt(Eventnumber);

  
   const btn =document.getElementById('disabled-btn6')

   if(convartedTask !== convartedNmuber){
    const sum=convartedTask - 1 ;
    document.getElementById('task-number').innerText = sum ;
    const num=convartedNmuber + 1 ;
    document.getElementById('event-number').innerText = num;
    btn.disabled = true;

   


   }
})