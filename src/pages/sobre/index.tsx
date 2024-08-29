import perfil from "./perfil.jpg";

const Sobre = () => {
    return (
        <div className="All">
            <h3>SOBRE</h3>
            <img src={perfil} alt="Foto de perfil" />
            <p className="name">Diego Augusto</p>
            <p className="work">Estagiário de T.I. no HUOP</p>
            <p className="biography">Diego Augusto é uma jovem arquiteto de 28 anos, nascido e criado em São Paulo.
                Desde criança, sempre teve um fascínio por estruturas e construções, o que a levou a seguir a carreira de arquitetura.
                Formado pela Universidade de São Paulo (USP), Diego rapidamente se destacou por sua criatividade e habilidade em projetar espaços inovadores e sustentáveis.
                Apaixonado por design ecológico, ele fundou seu próprio estúdio de arquitetura, onde lidera projetos que buscam harmonizar estética moderna com práticas ambientalmente responsáveis.
                Além de seu trabalho, Diego é um entusiasta de fotografia e adora explorar paisagens urbanas em suas viagens pelo mundo.</p>
            <a href="https://github.com/DiegoAATrevisan">GitHub</a>
        </div>
    )
}


export default Sobre;