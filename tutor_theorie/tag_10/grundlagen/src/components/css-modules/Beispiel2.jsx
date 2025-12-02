import styles from './beispiel.module.css'

function Beispiel2() {

    let rot = false
    let unterstrich = false

    return (
        <div>
            <h4>Beispiel 2</h4>
            <p className={styles.gross}>Großer Text</p>
            <p className={styles["roter-text"]}>Roter Text (Modul)</p>
            <p className={`roter-text ${styles["roter-text"]}`}>Roter Text (Global + Modul)</p>
            <p className={`${rot ? "roter-text" : ""} ${unterstrich ? styles["roter-text"] : ""}`}>Roter Text (Global + Modul (Bedingung))</p>
            <p className={(rot ? "roter-text " : "") + (unterstrich ? styles["roter-text"] : "")}>Roter Text (Global + Modul (Bedingung))</p>
        </div>
    )
}

export default Beispiel2