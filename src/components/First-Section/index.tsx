import style from "../../styles/Section.module.css";

export default function Section() {
    return (
        <div className={style.background}>
            <div className={style.container}>
                <div>
                    <h1> Olá, eu sou</h1>
                    <h2> Caio Dias Cozendey.</h2>
                    <p> Sou um desenvolvedor Frontend, com experiência em automatização de processos utilizando Javascript.</p>
                    <div className={style.btnContainer}>
                        <button className={style.btn1}> Sobre </button>
                        <button className={style.btn2}> Projetos </button>
                    </div>
                </div>
                <div className={style.me}> </div>
            </div>
        </div>
    )
}