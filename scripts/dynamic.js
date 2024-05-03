
// 1
let arr_color = ["red", "green", "blue", "black", "grey", "orange", "purple"]

// 2
let list = document.createElement('ul');


// 3
for (i = 0; i < arr_color.length; i++) {
let item = document.createElement("li");
item.innerText = arr_color[i];
item.style.color = arr_color[i];
list.appendChild(item);
}
// 4
document.body.appendChild(list)