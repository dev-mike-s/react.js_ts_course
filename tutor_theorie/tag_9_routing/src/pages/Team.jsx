import { useParams } from 'react-router'

function Team() {

    const PARAMS = useParams()

    return (
        <div>
            <h2>Team</h2>
            {
                PARAMS.department === "Marketing" &&
                <div>Willkommen beim Marketing!</div>
            }
            {
                PARAMS.department === "Vertrieb" &&
                <div>Willkommen beim Vertrieb!</div>
            }
            {
                PARAMS.department === "Personal" &&
                <div>Willkommen beim Personal!</div>
            }
            {
                PARAMS.department === undefined &&
                <div>Keine Abteilung ausgewählt.</div>
            }
            {
                PARAMS.id &&
                <div>ID: {Number(PARAMS.id)+1}</div>
            }
        </div>
    )
}

export default Team