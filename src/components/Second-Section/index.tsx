import style from "../../styles/Section2.module.css";

export default function Section2() {
    return (
        <div className={style.background}>
            <div className={style.container}>
                <h1> Tecnologias </h1>
                <div className={style.devIcons}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <i className="devicon-nextjs-original-wordmark"></i>
                </div>
            </div>
            <div className={style.container2}>
                <div>
                    <h1> Fale comigo: </h1>
                    <form>
                        <input type="text" placeholder="Nome:" />
                        <br />
                        <input type="email" placeholder="Email:" />
                        <br />
                        <input type="text" placeholder="Mensagem:" />
                        <br />
                        <button type="submit"> Enviar </button>
                    </form>
                </div>
            </div>
            <div className={style.container3}>
                <a href="https://github.com/CaioCozendey" target="_blank">
                    <i className="devicon-github-original"></i>
                </a>
                <a href="https://www.linkedin.com/in/caio-dias-cozendey-502a1418a/" target="_blank">
                    <i className="devicon-linkedin-plain colored"></i>
                </a>
                <a href="mailto:caiocozendey@hotmail.com">
                    <p> caiocozendey@hotmail.com </p>
                </a>
            </div>
        </div>
    )
}

