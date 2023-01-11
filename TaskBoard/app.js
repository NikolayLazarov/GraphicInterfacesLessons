document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    console.log(form);

    const title = form.querySelector('input');
    const body = form.querySelector('textarea');

    const h3_TODO = document.createElement('h3');
    h3_TODO.innerHTML = title.value;

    const body_TODO = document.createElement('p');
    body_TODO.innerHTML = body.value;

    const li = document.createElement('li');

    li.appendChild(h3_TODO);
    li.appendChild(body_TODO);

    li.classList.add("tasks");
    const ul = document.querySelector('ul');

    ul.appendChild(li);


});

document.querySelector('.in_progress').addEventListener("click", (event)=>{
    event.preventDefault();

    let label = event.target;
    console.log(label.nodeName );
    if (label.nodeName === "H3" || label.nodeName === "P"){
        label = label.parentElement;
    }
    if (label.nodeName === "LI"){
        console.log("here");
        label.style.backgroundColor = "yellow";
    }

    console.log(label.nodeName );
    document.querySelector('.button2').addEventListener("click", (event)=>{
        
        console.log(label.children);
        console.log(label.children[0]);
        console.log(label.children[0]);
        label.style.backgroundColor = "white";
        const li = label;
        console.log("lichild");
        console.log(li.children);

        const ul = document.querySelector(".finished");
        console.log(ul.nodeName );
        
        ul.appendChild(li);
        
        
    });
});


document.querySelector('.finished').addEventListener("click", (event)=>{
    event.preventDefault();

    let label = event.target;
    console.log(label.nodeName );
    if (label.nodeName === "H3" || label.nodeName === "P"){
        label = label.parentElement;
    }
    if (label.nodeName === "LI"){
        console.log("here");
        label.style.backgroundColor = "green";
    }});


function setupMoveTaskListeners(columnEl, transferButtonEl, selectedBackgroundColour, nextColomnEl){
    columnEl.addEventListener("click", (event)=>{
        event.preventDefault();
    
        let label = event.target;
        console.log(label.nodeName );
        if (label.nodeName === "H3" || label.nodeName === "P"){
            label = label.parentElement;
        }
        if (label.nodeName === "LI"){
            console.log("here");
            label.style.backgroundColor = selectedBackgroundColour;
        }
    
        console.log(label.nodeName );
        transferButtonEl.addEventListener("click", (event)=>{
            
            console.log(label.children);
            console.log(label.children[0]);
            console.log(label.children[0]);
            label.style.backgroundColor = "white";
            const li = label;
            console.log("lichild");
            console.log(li.children);
    
            const ul = nextColomnEl;
            console.log(ul.nodeName );
            
            ul.appendChild(li);
            
            
        });
    });
    
}

setupMoveTaskListeners(
    document.querySelector(".todo_tasks") , 
    document.querySelector("#moveTaskToInProgressButton"),
     "blueviolet", 
     document.querySelector(".in_progress"));

setupMoveTaskListeners(document.querySelector(".in_progress") , document.querySelector("#moveTaskToDoneButton"), "red", document.querySelector(".finished"));

document.querySelector('button').addEventListener('submit',event=>{

});
