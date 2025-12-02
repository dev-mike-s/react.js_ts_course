import React, { Fragment } from 'react'

function FragmentBeispiel() {
  return ( // <></> = JSX-Fragment-Kurzschreibweise
    <>
      {/* JSX-Kommentar */}
      <h4>Fragment</h4>
      <React.Fragment>
        Text...<br />
        <Fragment>
          Weiterer Text...
        </Fragment>
      </React.Fragment>
    </>
  )
}

export default FragmentBeispiel