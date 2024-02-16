import { AluraLogo } from "../AluraLogo";
import footerStyle from "./footer.module.css";

export function Footer() {
    return (
        <footer className={footerStyle.footer}>
        <AluraLogo />
        <p>
            Orgulhosamento criado com o <br /> DevSoutinho e a Alura
        </p>
    </footer>
    )
}