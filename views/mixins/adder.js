<script>
console.log("test");
var plus = document.getElementsByClassName("plus");

//console.log(plus);
plus[0].addEventListener("click", function(){
console.log("plus was clicked");

// var zarp = '"<div class="tag tag__choice"><input type="text" id="zlomp" value="zlomp" name="tags"/><label for="zlomp"></label></div>';

//what is zarp? a div with class, and an input nest inside of it, followed by a label. It's a div with two kids.



var sags = document.querySelectorAll(".new");

var newElement = document.createElement('div');

var newChild = document.createElement('input');

newElement.className ="item";
newChild.type="text";
newChild.name="item";
newChild.value="";

newElement.appendChild(newChild);

// console.log(newElement);

// console.log(sags);



// var clonee = sags[0].firstChild;
// var clone = clonee.cloneNode([1]);
// clone.firstElementChild.value ="";
// // console.log(typeof(clone));
sags[0].appendChild(newElement);
// // var zap = tags.appendChild(child);
// // console.log(clonee);
// // console.log(clone);
// console.log(sags[0].children.length);

});

</script>