import { useRef } from 'react'

function RefFunktion() {

    const headerRef = useRef() // H2
    const inputRef = useRef() // INPUT

    const inputHandler = () => {
        /* 
        Die eigentliche Elementreferenz befindet
        sich in der Eigenschaft "current".
        */
        headerRef.current.innerHTML =
        inputRef.current.value
    }

    return (
        <div>
            <h2 ref={headerRef}>Ref / Funktion</h2>
            <input ref={inputRef} type="text"
            onChange={inputHandler} />
        </div>
    )
}

export default RefFunktion