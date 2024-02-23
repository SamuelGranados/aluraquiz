"use client";
import { useRouter } from "next/navigation";

import pageStyles from "./page.module.css";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { LogoPosicao } from "./components/LogoPosicao";
// JSL == HTML do React 

export default function Page() {
    const router = useRouter();

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
        <form
         onSubmit={(event) => {
            event.preventDefault();
            const name = "Mario";
            router.push(`/game?player=${name}`)
         }}
        >
            <div style={{ marginBottom: "24px" }}>
             <input 
             type="text"
             placeholder="Diz aí seu nome pra jogar :)" 
             name="playerName" 
             />
            </div>
            <button>
                Jogar
            </button>
        </form>
    </Card>
    <Footer />
    </section>
</main>
    )
  }
