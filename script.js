// Store the original order of elements in firstContainer
const firstContainer = document.getElementById('container-1');

//image
const bg1= document.getElementById('bg-1');

const bg2= document.getElementById('bg-2');
const bg3= document.getElementById('bg-3');
const bg4= document.getElementById('bg-4');
const bg5= document.getElementById('bg-5');
const bg6= document.getElementById('bg-6');

//text-1
const text1= document.getElementById('text-container-1');

const text2= document.getElementById('text-container-2');
const text3= document.getElementById('text-container-3');
const text4= document.getElementById('text-container-4');


const bg1Order = Array.from(bg1.children);

const bg2Order = Array.from(bg2.children);
const bg3Order = Array.from(bg3.children);
const bg4Order = Array.from(bg4.children);
const bg5Order = Array.from(bg5.children);
const bg6Order = Array.from(bg6.children);

const text1Order = Array.from(text1.children);

const text2Order = Array.from(text2.children);
const text3Order = Array.from(text3.children);
const text4Order = Array.from(text4.children);


const originalOrder = Array.from(firstContainer.children);
const secondContainer = document.getElementById('container-2');
const originalOrder2 = Array.from(secondContainer.children);



//Function for dropping elements and allowing drop

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var target = event.target;
    var isDraggedImage = draggedElement.tagName.toLowerCase() === "img";
    var isTargetImage = target.tagName.toLowerCase() === "img" ;
    var isDraggedText = draggedElement.id.toLowerCase() ===  "text-1" ||  draggedElement.id.toLowerCase() === "text-2" || draggedElement.id.toLowerCase() ===  "text-3"|| draggedElement.id.toLowerCase() === "text-4" || draggedElement.id.toLowerCase() ===  '';
    var isTargetText = target.id.toLowerCase() === "text-1" || target.id.toLowerCase() === "text-2" || target.id.toLowerCase() === "text-3"|| target.id.toLowerCase() === "text-4" || target.id.toLowerCase() === '';
    if( (isDraggedImage && isTargetImage) || (target.children.length>0) || (isDraggedImage && isTargetText) || ((isDraggedText && isTargetImage) || (isDraggedText && isTargetText))){
        event.stopPropagation();
        return false;
    }
    else{
        event.target.appendChild(document.getElementById(data))
        
    }
    document.getElementById("status").innerHTML=`Droped element`
}

//Allows to the containers to drag
function allowDrop(event){
    event.preventDefault();

    document.getElementById("status").innerHTML=`Dragging element`
}

//Select the element with are draggable
function drag(event){
    event.dataTransfer.setData("text",event.target.id); 

    document.getElementById("status").innerHTML=`Drag`
}
// Reset the containers to their initial state
function resetContainers() {
    typeof(originalOrder2)
    originalOrder2.forEach(item =>{
        let classs = item.children;
        
        for (const num of classs) {

            let childItem =  document.getElementById(num.id);
            if(childItem){
                childItem.innerHTML="";
            }
          }

    
    } )

    bg1Order.forEach(item =>{
        bg1.appendChild(item)
    } 
    );
    bg2Order.forEach(item => bg2.appendChild(item));
    bg3Order.forEach(item => bg3.appendChild(item));
    bg4Order.forEach(item => bg4.appendChild(item));
    bg5Order.forEach(item => bg5.appendChild(item));
    bg6Order.forEach(item => bg6.appendChild(item));

    text1Order.forEach(item => {
        text1.appendChild(item)
    }
        );
    text2Order.forEach(item => text2.appendChild(item));
    text3Order.forEach(item => text3.appendChild(item));
    text4Order.forEach(item => text4.appendChild(item));

    
}



