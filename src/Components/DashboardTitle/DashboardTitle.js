import { USER_MAIN_DATA } from '../../Data/DataMocked'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './dashboardTitle.css'
import { useParams } from 'react-router-dom'

export default function DashboardTitle(props) {
    const [users, setUsers] = useState()
    const { id } = useParams()

    useEffect(() => {
        const getUsers = async () => {
            const result = (USER_MAIN_DATA, id)
            setUsers(result)
        }
        getUsers()
    }, [id])
    console.log(users)

    if (props.firstName !== 'Karl' && props.firstName !== 'Cecilia') {
        return (
            <div className="dashboardTitle">
                <h1 className="user">Erreur dans l'importation des données</h1>
                <h2 className="userText">
                    Il semblerait que quelque chose ne fonctionne pas avec le
                    serveur de données 😕
                </h2>
                <h2>Vérifiez que vous utilisez le bon User ID ! 🧐</h2>
            </div>
        )
    } else {
        return (
            <div className="dashboardTitle">
                <h1>
                    Bonjour <span>{props.firstName}</span>
                </h1>
                <h2 className="userText">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </h2>
            </div>
        )
    }
}

DashboardTitle.propTypes = {
    firstName: PropTypes.string,
}
