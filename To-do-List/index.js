let enterBtn = document.getElementById("searchbtn");

let valueList = document.getElementById("mainList");

let deleteBtn = document.getElementsByClassName("delete");

let count = 0;
let taskCounter = 0
updateCounter()

enterBtn.addEventListener("click", () => {
  let value = document.getElementById("work").value;

  if (value == "") {
  } else {
    let a = document.createElement("div");
    a.id = count;
    a.classList.add("listItem");
    valueList.append(a);
    let b = document.createElement("input");
    b.type = "checkbox";
    b.classList.add("tick");
    b.id = count
    a.append(b);
    let c = document.createElement("li");
    c.classList.add("listel");
    c.id = count;
    c.textContent = value;
    a.append(c);
    let d = document.createElement("button");
    d.classList.add("delete");
    d.id = count;
    d.textContent = "X";
    a.append(d);

    document.getElementById("work").value = "";
    count++;
    taskCounter++
    updateCounter()
  }
  
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    let value = document.getElementById("work").value;

    if (value == "") {
    } else {
      let a = document.createElement("div");
      a.id = count;
      a.classList.add("listItem");
      valueList.append(a);
      let b = document.createElement("input");
      b.type = "checkbox";
      b.classList.add("tick");
      b.id = count
      a.append(b);
      let c = document.createElement("li");
      c.classList.add("listel");
      c.id = count;
      c.textContent = value;
      a.append(c);
      let d = document.createElement("button");
      d.classList.add("delete");
      d.id = count;
      d.textContent = "X";
      a.append(d);

      document.getElementById("work").value = "";
      count++
      taskCounter++
      updateCounter()
      console.log(taskCounter)
    }
    
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    let elementId = event.target.id;

    let a = valueList.children;

    for (let i = 0; i < a.length; i++) {
      if (a[i].id == elementId){
        if(a[i].firstElementChild.nextElementSibling.classList.contains("crossed")){
          valueList.removeChild(a[i]);
        }else{
          valueList.removeChild(a[i]);
          taskCounter--;
        updateCounter()

        }
        
        
      }
    }
  }

  
  });

  document.addEventListener("click", (event) => {
    if ((event.target.classList.contains("tick") )) {
      let elementIdChecked = event.target.id;
      let a = valueList.children
      for(let i = 0;i<a.length;i++){
        if(a[i].id == elementIdChecked){
            let elemenetCheck = a[i].firstElementChild.nextElementSibling
            console.log(elemenetCheck)
            if(elemenetCheck.classList.contains("crossed") == false){
              elemenetCheck.classList.add("crossed")
              taskCounter--;
              updateCounter()
            }else{
              elemenetCheck.classList.remove("crossed")
              taskCounter++
              updateCounter()
            }
        }
      }
    }})


    function updateCounter(){
        document.getElementById("counter").textContent = taskCounter
    }