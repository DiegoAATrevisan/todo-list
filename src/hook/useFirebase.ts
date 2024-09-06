import { useContext } from "react"
import { FirebaseContext } from "../context/contexFirebase"

const useFirebase = () => {
    const contexto = useContext(FirebaseContext)
    if (!contexto) {
        throw new Error("useFirebase só pode ser usado dentro do contexto FirebaseContext")
    }
}

export default useFirebase;