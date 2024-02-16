import { useEffect, useState } from "react"
import { getUsers } from '../../api/getusers'


function UserList() {
    let [state, setState] = useState([]);


    useEffect(() => {
        getUsers().then(response => setState(response.res));
    }, []);


    return (
        <div>
            {
                state.length > 0 ?
                    state.map((item) => (
                        <div className="user">
                            {item.username}
                        </div>
                    )) :
                    <div>...loading</div>
            }
        </div>
    )
}

export default UserList
