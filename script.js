let creator = `<div class="container">
                <form name="form1" action="">
                <input type="text" name="uName" id="uName" value="">
                <input type="text" name="uAge" id="uAge" value="">
                <input type="text" name="uAddress" id="uAddress" value="">
                <input type="button" name="ureg" id="ureg" value="add user">`;
document.getElementById("inpt").innerHTML = creator;
let els = document.querySelectorAll("input");
let arr = [];
let caller = () => {
  arr.length = 0;
  for (let i = 0; i < els.length - 1; i++) {
    arr.push(els[i].value);
    els[i].value = "";
  }
  let creator2 = `<div id="content">
                <h2>your name is: ${arr[0]}</h2>
                <p class="">your age is: ${arr[1]}</p>
                <p class="">your country is: ${arr[2]}</p>
                <input type="button" value="remove item" id="remover" onclick="remove()">
                </div>`;
  document.getElementById("outp").innerHTML += creator2;
};
els[3].addEventListener("click", () => {
  for (let i = 0; i < els.length - 1; i++) {
    if (els[i].value !== "") {
      if (!isNaN(els[1].value)) {
          if (els[2].value!==""){
            caller();
        break;  
          }
        
      } else {
        alert("age must be number");
        break;
      }
    } else {
      alert("not allowed empty field");
      break;
    }
  }
});
function remove() {
  let el = document.getElementById("content");
  el.parentNode.removeChild(el);
}
