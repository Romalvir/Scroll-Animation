const boxes = document.querySelectorAll(".box")
//fires off when scrolling
window.addEventListener("scroll", checkBoxes)

checkBoxes()

//big ass function
function checkBoxes(){

	const triggeBottom = window.innerHeight / 5 * 4

	//bring in a node list 

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top

		if(boxTop < triggeBottom){
			box.classList.add("show")
		} else{
			box.classList.remove("show")
		}
	})
}