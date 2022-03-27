const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
const texte = "Petite animation de texte !"
let idx = 1
let speed = 200/speedEl.value

AnimTexte()
function AnimTexte(){
	textEl.innerText=texte.slice(0,idx)
	
	idx++
	
	if (idx > texte.length){
		idx=1
	}
	setTimeout(AnimTexte,speed)
	
}

speedEl.addEventListener('input',(e) => speed=200/e.target.value)
