import { USER_MAIN_DATA } from '../Data/DataMocked'
import React, { useEffect, useState } from 'react'

function Mocked() {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const getUsers = async () => {
            const result = await USER_MAIN_DATA
            setUsers(result)
        }

        getUsers()
    }, [])

    console.log(users)

    return <div></div>
}

export default Mocked
