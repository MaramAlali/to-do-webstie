let btn=document.querySelector('button');
let iputTask=document.querySelector('input');
let form=document.querySelector('form');
let sec=document.querySelector('section');



btn.addEventListener('click',function(e){
    e.preventDefault();
    if(iputTask.value==""){
        alert('ادخل المهمة أولاً');
    }
    else{
    let newTask=` 
    <div class="task">
            <span class="icon-star-full icon"></span>
            <p>${iputTask.value}</p>
            <div>
            <span class="icon-heart icon" style=" margin-right: 7px;"></span>
            <span class="icon-cancel-circle icon"></span>
            </div>

    </div>`
    sec.innerHTML+=newTask;
    iputTask.value='';
    }
});

sec.addEventListener('click',function(event){
    if(event.target.className=='icon-cancel-circle icon'){
       event.target.parentElement.parentElement.remove();
    }
    else if(event.target.className=='icon-heart icon'){
        event.target.classList.add('ok');
        event.target.parentElement.parentElement.querySelector('p').classList.add('ok1');

    }
    else if (event.target.className=='icon-heart icon ok'){
        event.target.classList.remove('ok');
        event.target.parentElement.parentElement.querySelector('p').classList.remove('ok1');

    }
    else if (event.target.className=='icon-star-full icon'){
        event.target.classList.add('first');
        sec.prepend(event.target.parentElement);

    }
    else if (event.target.className=='icon-star-full icon first'){
        event.target.classList.remove('first');


    }
    
})

