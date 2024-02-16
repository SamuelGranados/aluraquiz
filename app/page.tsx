import pageStyle from "./page.module.css";
import { AluraQuizLogo } from "./components/AluraquizLogo";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
// JSL == HTML do React 

export default function Page() {
    return (
        
<main className={pageStyle.screen} style={{flex: 1 }}>
    <section className={pageStyle.container}>
    <div style={{ 
        display: "flex", 
        justifyContent: "center",
        marginBottom: "24px" 
        }}>
    <AluraQuizLogo />
    </div>
    <Card
     headerTitle="Teste suas habilidades"
    >
        <p style={ {marginBottom: "32px" }}>
        Teste os seus conhecimentos sobre o universo Marvel e divirta-se criando o seu AluraQuiz
        </p>
        <p>
            FÓRMULARIO / BOTÃOooo
        </p>
        <a href="/game">
            Jogar
        </a>
    </Card>
    <Footer />
    </section>
</main>
    )
  }
