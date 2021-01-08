function VanillaCounter() {
    let elements = document.querySelectorAll('[data-vanilla-counter]')
    elements.forEach(i => {
        let data = {
            startAt: parseInt(i.getAttribute('data-start-at')) || 0,
            endAt: parseInt(i.getAttribute('data-end-at')) || 100,
            delay: parseInt(i.getAttribute('data-delay')) || 0,
            format: i.getAttribute('data-format') || '{}',
            time: parseInt(i.getAttribute('data-time')) || 500
        }
        var counter = data.startAt
        i.innerHTML = data.format.replace('{}', counter)
        var intervalTime = Math.ceil(data.time / (data.endAt - data.startAt))
        setTimeout(() => {
            var interval = setInterval(intervalHandler, data.time / (data.endAt - data.startAt))
            function intervalHandler() {
                counter++
                i.innerHTML = data.format.replace('{}', counter)
                if (counter == data.endAt) {
                    clearInterval(interval)
                }
            }
        }, data.delay)
    })
}

window.VanillaCounter = VanillaCounter