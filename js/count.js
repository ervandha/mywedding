//create a javascript timer function
function timerCountDOwn(date, id) {
    const el = document.getElementById(id)

    if (!el) return
    let countDownDate = new Date(date).getTime()
    const timer = setInterval(function () {
        const now = new Date().getTime(),
            distance = countDownDate - now,
            days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((distance % (1000 * 60)) / 1000),
            //Format your output here
            output = `<span class="days">${days}D</span> <span class="hours">${hours}H</span> <span class="minutes">${minutes}M</span> <span class="seconds">${seconds}S</span>`

        el.innerHTML = output

        if (distance < 0) {
            clearInterval(timer)
            el.innerHTML = 'EXPIRED'
        }
    }, 1000)
}

// then you can use it on multiple element in a single page
timerCountDOwn('Jan 5, 2023 00:00:00', 'timer1')
