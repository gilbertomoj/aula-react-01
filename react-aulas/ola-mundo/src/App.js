import logo from './coruja.jpeg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width={160}/>
        <h2>Aprendendo React</h2>
        <pre>{`
        Você já se perguntou o por quê da coruja ser um dos símbolo da Pedagogia?! Ao refletirmos a esse respeito, podemos encontrar respostas sob diversas perspectivas: metafórica, filosófica, filológica, entre outras. Considerando as muitas veredas nas quais a Pedagogia e a simbologia com a coruja podem transitar, escolho apresentar hoje uma analogia elaborada pela professora paulista, Natalia Cardenuto, pois, sua visão além de apresentar-nos semelhanças entre  a coruja e o professor, aponta ainda, a profunda e inegável influência do educador na vida de todos que passam por ele.
        Isto posto:
        
        “A coruja é o símbolo da sabedoria, imagem que representa o professor. É um animal sábio que possui muitas habilidades admiráveis. Que lindo perceber quantas semelhanças existem entre a coruja e o bom professor.

        A coruja é um animal pequeno, assim como o professor, que é visto pequenamente pela sociedade e muitas vezes não é notado.

        A coruja possui olhos atentos e capazes de enxergar no escuro. O bom professor também possui olhos atentos capazes de enxergar o que quase ninguém enxerga, é capaz de ver a escuridão que existe dentro de cada aluno, suas dificuldades, medos e inseguranças.

        A coruja não voa alto, mas ensina seu filhote a voar longe. O bom professor ajuda seus alunos a alçar grandes voos, que farão diferença por toda sua vida.

        A coruja protege seus filhotes com toda sua força, assim como ela, existem bons professores corujas, que defendem seus alunos como se fossem seus filhos
`}
        </pre>
      </header>
    </div>
  );
}

export default App;
