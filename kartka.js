

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka", "tloswiateczne.png")
loadSprite("balwan", "balwan.png")
loadSound("muzyka", "cichanoc.mp3")

add([
    sprite("kartka")
])

const balwan = add([
    sprite("balwan"), 
    pos (0,200)
])

onMouseRelease(()=>play("muzyka"))

let wprawo =  true

balwan.onUpdate(() => {

    if(wprawo && balwan.pos.x < 500)
        balwan.pos.x += 1

    else if(!wprawo && balwan.pos.x > 50)
        balwan.pos.x -= 1
    
    else wprawo ^= true
})