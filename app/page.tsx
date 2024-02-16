import pageStyles from "./page.module.css";
import Link from "next/link";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { LogoPosicao } from "./components/LogoPosicao";
// JSL == HTML do React 

export default function Page() {
    return (
        
<main className={pageStyles.screen} style={{flex: 1 }}>
    <section className={pageStyles.container}>
    <LogoPosicao />
    <Card
     headerTitle="Teste suas habilidades"
    >
        <p style={ {marginBottom: "32px" }}>
        Teste os seus conhecimentos sobre o universo Marvel e divirta-se criando o seu AluraQuiz
        </p>
        <p>
            FÓRMULARIO / BOTÃOooo
        </p>
        <Link href="/game">
            Jogar
        </Link>
    </Card>
    <Footer />
    </section>
</main>
    )
  }
