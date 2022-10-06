$w.onReady(() => {
    typeAndErase($w("#textIdentifierHere")) //Just the function call
})

function typeAndErase(textElement) {
    let interval
    let timeInterval = 230
    let typeStrings = ["Adoption      ", "Strategy      ", "Technology      ", "Security      ", "Marketing      ", "Finance      ", "Growth      ", "Success. "]
    let wordIdx = 0
    let typeIdx = 0
    let displayStr = ""
    let endingString = "|"

    textElement.text = ""
    interval = setInterval(() => {
        displayStr = displayStr + typeStrings[wordIdx][typeIdx]
        typeIdx++

        textElement.text = displayStr + endingString

        if (typeIdx === typeStrings[wordIdx].length) {
            wordIdx++
            displayStr = ""
            typeIdx = 0
            wordIdx === typeStrings.length && clearInterval(interval)
        }
    }, timeInterval)
}
