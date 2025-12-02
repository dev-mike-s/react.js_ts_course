import styles from './beispiel.module.css'

function Beispiel() {

    let gross = false

    return (
        <div>
            <h2>CSS Modules</h2>
            <p className={styles.gross}>Großer Text</p>
            <p className={gross && styles.gross}>Bedingt großer Text</p>
            <p className="roter-text">Roter Text (Global)</p>
        </div>
    )
}

export default Beispiel