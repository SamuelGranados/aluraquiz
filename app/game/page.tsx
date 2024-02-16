import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { LogoPosicao } from "../components/LogoPosicao";
import pageStyles from "../page.module.css";
import config from "../../config.json";

const questions = config.questions;

export default function GameScreen() {
  const currentQuestion = 0;
  const questionNumber = currentQuestion + 1;
  const question = questions[currentQuestion]; 

    return (
        <main 
             className={pageStyles.screen} 
             style={{ 
              flex: 1, 
              backgroundImage: `url(${question.image})`,
            }}>
            <section className={pageStyles.container}>
             <LogoPosicao />   
             <Card
              headerTitle={`Pergunta ${questionNumber} de ${questions.length}`}
            >
                <h1>
                  {question.title}
                </h1>
                <p>
                  {question.descripcao}
                </p>
             </Card>
             <Footer />
             </section>
        </main>
    );
}