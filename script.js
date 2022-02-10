let start_btn = document.getElementById("start-btn")
let timer = document.getElementById("timer")
let p1_shoot_btn = document.getElementById("p1-shoot-btn")
let p2_shoot_btn = document.getElementById("p2-shoot-btn")
let p1_won_count = document.getElementById("p1-won-count")
let p2_won_count = document.getElementById("p2-won-count")
let p1_health = document.getElementById("p1-health")
let p2_health = document.getElementById("p2-health")
let p1_progress = document.getElementById("p1-progress")
let p2_progress = document.getElementById("p2-progress")
let round = document.getElementById("round")
let res_title = document.getElementById("round-title")
let restart_btn = document.getElementById("restart-btn")
let result = document.getElementById("result")
p1_shoot_btn.disabled = true
p2_shoot_btn.disabled = true
restart_btn.disabled = true

let count = 1;

// Start Game Button Functionality
start_btn.addEventListener("click",start)
function start(){
    start_btn.style.opacity = "0"
    timer.style.opacity= "1"
    start_btn.disabled = true
    let interval = setInterval(function(){
        let val = timer.innerText
        if(val==0){
            timer.style.opacity = "0"
            p1_shoot_btn.disabled = false
            p2_shoot_btn.disabled = false
            p1_shoot_btn.style.opacity = "1"
            p2_shoot_btn.style.opacity = "1"
            clearInterval(interval)
        }
        else{
            timer.innerText = --val
        }
    },1000)
}

function won(){
    p1_shoot_btn.disabled = true
    p2_shoot_btn.disabled = true
    p1_shoot_btn.style.opacity = "0.2"
    p2_shoot_btn.style.opacity = "0.2"
    timer.innerText = 3
}

// Player 1 Shoot Button Functionality
p1_shoot_btn.addEventListener("click",function(){
    let power = Math.floor(Math.random() * 6)
    let p2_health_val = p2_health.innerText
    final_power_p2 = p2_health_val-power
    if(final_power_p2 <= 0)
    {  
        won()
        let p1_count = p1_won_count.innerText
        p1_won_count.innerText = ++p1_count
        p1_won_count.classList.add('won')
        if(p1_count>=3)
        {
            result.style.display = "block"
            res_title.style.display = "none"
            result.innerText = "Player 1 won the match!"
        }
        setTimeout(function(){
            //p1_won_count.classList.remove("won")
            if(p1_count<3)
            {
                start_btn.style.opacity = "1"
                start_btn.disabled = false
            }
            else if(p1_count == 3)
            {
                restart_btn.style.opacity = "1"
                restart_btn.disabled = false
            }
            round.innerText = count
            start_btn.disabled = false
        },2000)
        final_power_p2=100
        $("#p2-progress").width(final_power_p2+"%")
        p2_progress.style.backgroundColor = "rgb(0, 199, 17)"
        p1_progress.style.backgroundColor = "rgb(0, 199, 17)"
        $("#p1-progress").width(final_power_p2+"%")
        p1_health.innerText = 100
        ++count
    }
    p2_health.innerText = final_power_p2
    $("#p2-progress").width(final_power_p2+"%")
    if(final_power_p2>75)
    {
        p2_progress.style.backgroundColor = "rgb(0, 199, 17)"
    }
    else if(final_power_p2<=75 && final_power_p2>50)
    {
        p2_progress.style.backgroundColor = "yellow"
    }
    else if(final_power_p2<=50 && final_power_p2>25)
    {
        p2_progress.style.backgroundColor = "orange"
    }
    else
    {
        p2_progress.style.backgroundColor = "red"
    }

})

// Player 2 Shoot Button Functionality
p2_shoot_btn.addEventListener("click",function(){
    let power = Math.floor(Math.random() * 6)
    let p1_health_val = p1_health.innerText
    final_power_p1 = p1_health_val-power
    if(final_power_p1 <= 0)
    {
        won()
        let p2_count = p2_won_count.innerText
        p2_won_count.innerText = ++p2_count
        if(p2_count>=3)
        {
            result.style.display = "block"
            res_title.style.display = "none"
            result.innerText = "Player 2 won the match!"
        }
        p2_won_count.classList.add('won')
        setTimeout(function(){
            p2_won_count.classList.remove("won")
            if(p2_count<3)
            {
                start_btn.style.opacity = "1"
                start_btn.disabled = false
            }
            else if(p2_count == 3)
            {
                restart_btn.style.opacity = "1"
                restart_btn.disabled = false
            }
            round.innerText = count
        },2000)
        final_power_p1=100
        $("#p1-progress").width(final_power_p1+"%")
        $("#p2-progress").width(final_power_p1+"%")
        p1_progress.style.backgroundColor = "rgb(0, 199, 17)"
        p2_progress.style.backgroundColor = "rgb(0, 199, 17)"
        p2_health.innerText = 100
        final_power_p1=100
        ++count
    }
    p1_health.innerText =final_power_p1
    $("#p1-progress").width(final_power_p1+"%")
    if(final_power_p1>75)
    {
        p1_progress.style.backgroundColor = "rgb(0, 199, 17)"
    }
    else if(final_power_p1<=75 && final_power_p1>50)
    {
        p1_progress.style.backgroundColor = "yellow"
    }
    else if(final_power_p1<=50 && final_power_p1>25)
    {
        p1_progress.style.backgroundColor = "orange"
    }
    else
    {
        p1_progress.style.backgroundColor = "red"
    }
})

restart_btn.addEventListener("click",reset)
function reset(){
    restart_btn.style.opacity = "0"
    restart_btn.disabled = true
    start_btn.style.opacity = "1"
    start_btn.disabled = false
    count = 1
    round.innerText = 1
    p1_won_count.innerText = 0
    p2_won_count.innerText = 0
    p1_health.innerText = 100
    p2_health.innerText = 100
    result.style.display = "none"
    res_title.style.display = "block"

}
