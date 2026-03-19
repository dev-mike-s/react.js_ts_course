// Bilder, die sich im "src"-Verzeichnis befinden, werden als Modul importiert
import reactLogo from '../assets/react.svg'

function Bilder() {
    return (
        <div>
            <h2>Bilder</h2>

            {/* Pfad für ein Bild, das sich im "public"-Verzeichnis befindet. */}
            <img src="images/vite.svg" width="100" />

            {/* Bilder, die sich im "src"-Verzeichnis befinden, werden als Modul importiert. */}
            <img src={reactLogo} width="100" />

            {/*
            In alten Versionen gibt es auch folgenden Pfad:
            <img src={reactLogo.default} width="100" />
            */}

        </div>
    )
}

export default Bilder