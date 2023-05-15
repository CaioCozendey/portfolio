import style from "../../styles/Header.module.css";

export default function Header() {
    return (
        <div className={style.background}>
            <div className={style.container}>
                <a href="#"><h1> Caio Dias </h1></a>
                <ul>
                    <li><a href="#" className={style.homeBtn}> Início </a></li>
                    <li><a href="#" className={style.otherBtn}> Sobre </a></li>
                    <li><a href="#" className={style.otherBtn}> Projetos </a></li>
                    <li><a href="#" className={style.otherBtn}> Contatos </a></li>
                </ul>
            </div>
        </div>
    )
}