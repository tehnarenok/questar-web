import {User} from "../types/User";
import useAuth from "./useAuth";

const useUser = () => {
    const { signIn } = useAuth()
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
            signIn(user.login)
            localStorage.setItem('users', JSON.stringify(users))
        }
    }

    const checkUser = (login: string, password: string): boolean => {
        let users: User[] = getUsers()
        let idx = users.findIndex((el: User) => el.login === login)
        if(idx < 0) {
            return false
        }
        if(users[idx].password === password) {
            signIn(login)
            return true
        }
        return false
    }

    return {
        getUsers,
        currentUser,
        changeUser,
        addUser,
        checkUser
    }
}

export default useUser