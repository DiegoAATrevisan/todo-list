import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useFirebase } from "../../hook/useFirebase";
import { googleProvider } from "../../firebaseConfig";

const Login = () => {
    const api = useFirebase()
    const [logando, setLogando] = useState<boolean>(true)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const FazerLogin = () => {
        if (email.length <= 0) {
            alert('Digite um email');
            return
        }

        if (password.length <= 0) {
            alert('Digite uma senha');
            return
        }

        if (password !== confirmPassword) {
            alert('As senhas não conferem')
            return
        }

        signInWithEmailAndPassword(api.auth, email, password).then((userCredential) => {
            console.log({ userCredential });
            alert(`Logado com sucesso ${userCredential.user.email}`)
        }).catch((error) => console.error(error))
    }

    const CriarConta = () => {
        if (email.length <= 0) {
            alert('Digite um email');
            return
        }

        if (password.length <= 0) {
            alert('Digite uma senha');
            return
        }

        if (password !== confirmPassword) {
            alert('As senhas não conferem')
            return
        }

        createUserWithEmailAndPassword(api.auth, email, password)
            .then((userCredential) => {
                console.log({ userCredential });
                alert(`Logado com sucesso ${userCredential.user.email}`)
            }).catch((error) => console.error(error))
    }

    const GoogleLogin = async () => {
        try {
            const provider = await signInWithPopup(api.auth, googleProvider);
            alert(`Bem vindo: ${provider.user.displayName !== null ? provider.user.displayName : provider.user.email}`)
        } catch (error) {
            console.error('ocorreu um erro ao fazer login com o google. erro:', error);

        }
    }

    return (
        <div>
            <h1>Login Works</h1>
            {
                api.auth.currentUser === null
                    ? logando
                        ?
                        <div>
                            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
                            <div>
                                <button onClick={() => FazerLogin()}>Login</button>
                                <button onClick={() => setLogando(!logando)}>Cadastre-se</button>
                            </div>
                            <div>
                                <button onClick={() => GoogleLogin()}>Login com Google</button>
                            </div>
                        </div>
                        :
                        <div>
                            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                            <div>
                                <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
                                <input type="password" placeholder="confirmar senha" onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div>
                                <button onClick={() => CriarConta()}>Criar conta</button>
                            </div>
                        </div>
                    : null
            }
           {
            api.auth.currentUser
            ?
            <div>
                <img src={api.auth.currentUser.photoURL||''} alt="Foto de perfil" />
                <p>{api.auth.currentUser.displayName}</p>
                <p>{api.auth.currentUser.email}</p>
                <button onClick={()=>{
                    api.auth.signOut()
                }}>LogOut</button>
            </div>
            : null
           }
        </div>
    )
}


export default Login;