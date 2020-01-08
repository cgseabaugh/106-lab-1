function createTodo(){
    var text2 = $("#txtText").val();
    var li = '<li class="taskItem">' + text2 + '<button id="deleteBtn" onclick="taskCompleted()">Completed</button></li>';
    $("#pending").append(li);

    $("#txtText").val("");

    $("#txtText").focus();
}

function init(){
    $("#btnSave").click(createTodo);
    $("#txtText").keypress(function(e){
        // console.log(e);

        if(e.key == "Enter"){
            createTodo();
        }
    });
}

function taskCompleted(){
    $("#pending li").click(function (e) {
        $(this).remove();
    })    
}

window.onload = init;

/* const inputTask = document.getElementById('input-task');
const list = document.getElementById('list-task');
var taskID = 0;

function addtolist(){
    console.log(inputTask.value);
    const newItem = document.createElement('li');
    newItem.innerHTML=`${inputTask.value} <button onclick="removeTask(${taskID});">Delete</button>`;
    newItem.setAttribute('class','list-group=item');
    newItem.setAttribute('id',taskID);
    list.appendChild(newItem);
    clear();
    // var input = document.getElementById("txtTest");
    // document.getElementById("result").innerHTML=`${input.value}`;
}

function clear(){
    inputTask.value="";
}

function removeTask(id){
    var deleted = document.getElementById(id);
    deleted.remove();
} */