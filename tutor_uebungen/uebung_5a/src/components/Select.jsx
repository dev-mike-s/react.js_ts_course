
function Select(props) {

    /* 
    props:
     - produkte (Array)
     - formular (Objekt)
     - aendereKategorie (Funktion)
    */

    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
                <select value={props.formular.hauptkategorie} name="hauptkategorie"
                    onChange={props.aendereKategorie}>
                    <option value="-1">Bitte Bereich wählen</option>
                    {
                        props.produkte.map((ele, index) => {
                            // ele = Objekt
                            return (<option key={index} value={index}>
                                {ele.name}
                            </option>)
                        })
                    }
                </select>
                {
                    props.formular.hauptkategorie > "-1" &&
                    (<select value={props.formular.unterkategorie} name="unterkategorie"
                        onChange={props.aendereKategorie}>
                        <option value="-1">Bitte wählen</option>
                        {
                            props.produkte[props.formular.hauptkategorie].gruppe.map((ele, index) => {
                                // ele = Objekt
                                return (<option key={index} value={index}>
                                    {ele.name}
                                </option>)
                            })
                        }
                    </select>)}
            </form>
        </>
    )
}

export default Select