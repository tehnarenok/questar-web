import {User} from "../types/User";

const useUser = () => {
    const getUsers = (): User[] => {
        return JSON.parse(localStorage.getItem('users') || '[]') || []
    }

    const getUser = (login: string): User | undefined => {
        return (getUsers()).filter((el: User) => el.login === login)[0]
    }

    const currentUser = (): User | undefined => {
      let username = localStorage.getItem("currentUser")
      return getUser( username == null ? "" : username)
    }

    const changeUser = (user: User) => {
        let users: User[] = getUsers()
        let idx = users.findIndex((el: User) => el.login === user.login)
        if(idx >= 0) {
            users.splice(idx, 1)
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
        }
    }

    const addUser = (user: User) => {
        let users: User[] = getUsers()
        let idx = users.findIndex((el: User) => el.login === user.login)
        if(idx < 0) {
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
        }
    }

    return {
        getUsers,
        currentUser
    }
}

export default useUser