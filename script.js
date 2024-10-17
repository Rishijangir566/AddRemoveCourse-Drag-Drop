let drag = document.querySelectorAll("#addList li")
let drop = document.querySelector("#deleteList")

drag.forEach((course)=>{
    course.ondragstart = (e)=>{
        const courseId=e.target.id 
        const courseText = e.target.innerText;  // Capture the text
        e.dataTransfer.setData("id", courseId);
        e.dataTransfer.setData("text", courseText); 
        // console.log(courseId)
        
    }

    
})

drop.ondrop = (e)=>{
    const courseId = e.dataTransfer.getData('id');
    const courseText = e.dataTransfer.getData('text');  // Retrieve the text content
    const newLI = document.createElement('li');
    newLI.id = courseId;
    newLI.innerText = courseText;  // Set the text content
    drop.appendChild(newLI);
    const dragItem=document.getElementById(courseId)
    dragItem.style.display="none"
} 

drop.ondragover = (e)=>{
   console.log("ondragover")
   e.preventDefault()
   
}

