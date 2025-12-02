
function JavascriptAndXML() {

    // JSX = JavaScript & XML

    // ohne JSX
    /* return React.createElement(
        'div',
        {id: 'dieID', className: 'eineKlasse'},
        React.createElement(
            'h4',
            null,
            'Hallo'
        )
    ) */

    // mit JSX
    return (
        <div id='dieID' className='eineKlasse'>
            <h4>Hallo</h4>
        </div>
    )
}

export default JavascriptAndXML