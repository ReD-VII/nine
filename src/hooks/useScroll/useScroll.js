import React, { useEffect, useState } from 'react'

export const useScroll = (targetElement) => {

    const [divElements, setDivElements] = useState(null)
    const [elemetY, setElementY] = useState(0)
    const [ currentElement, setCurrentElement] = useState(null)


    useEffect(() => {
        setDivElements(document.getElementById(targetElement))
        setCurrentElement(divElements)

        if (divElements) {
            console.log(divElements.offsetTop)
            setElementY(divElements.offsetTop)
        }
        console.log(`
            ELEMENTO: ${divElements}
            Y: ${elemetY}

        `)
    }, [targetElement])





    return {elemetY}


}
