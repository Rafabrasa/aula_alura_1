import React from 'react';
import './LuffyPage.css';
import luffyImg from '../../../img/luffy.png';
import { Link } from 'react-router-dom';


const LuffyPage = () => {
    return (
        <div className="container secundario">
            <img src={luffyImg} alt="Logo" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Monkey D. Luffy</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Monkey D. Luffy</p>
                    <p><strong>Apelidos:</strong> Luffy do Chapéu de Palha, Chapéu de Palha, Quinto Imperador do Mar</p>
                    <p><strong>Data de Nascimento:</strong> 5 de maio</p>
                    <p><strong>Origem:</strong> East Blue, Vila Foosha</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol3.000.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Monkey D. Luffy é o protagonista principal da série de mangá e anime One Piece, criada por Eiichiro Oda. Ele nasceu na Vila Foosha, no East Blue, filho do líder dos Revolucionários, Monkey D. Dragon, e neto do lendário herói da Marinha, Monkey D. Garp. Desde jovem, Luffy sonhava em se tornar um grande pirata e encontrar o One Piece, o lendário tesouro deixado pelo falecido Rei dos Piratas, Gol D. Roger.

                        Luffy ganhou notoriedade como o capitão dos Piratas do Chapéu de Palha, uma tripulação formada por indivíduos com sonhos e objetivos variados. Ao longo de sua jornada, Luffy e sua tripulação enfrentaram inúmeros desafios, desde piratas rivais até agentes do Governo Mundial e Yonkou poderosos.</p>

                </div>

                <div className="atributos">
                    <h3>Atributos e Habilidades:</h3>
                    <p>Atributos e Habilidades:
                        Fruta do Diabo: Luffy comeu a Gomu Gomu no Mi, uma Fruta do Diabo do tipo Paramecia, que concedeu a ele um corpo elástico.
                        Força sobre-humana: Luffy possui uma força incrível, capaz de derrotar inimigos poderosos com seus punhos.
                        Habilidade em Luta: Ele é um mestre na arte do Haki, uma habilidade que permite que ele sinta e controle a energia espiritual.
                        Determinação: Luffy é conhecido por sua determinação inabalável e sua vontade de proteger seus amigos e realizar seus sonhos, não importa o quão difícil seja o desafio.</p>
                </div>

                <div className="contribuicoes">
                    <h3>Contribuições para a Trama:</h3>
                    <p>Luffy desempenha um papel fundamental em muitos eventos importantes na série, incluindo a invasão de Enies Lobby para salvar Nico Robin, a participação na Guerra de Marineford para salvar seu irmão adotivo, Portgas D. Ace, e a busca atual pelo One Piece.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Ao longo de sua jornada, Luffy ganhou uma reputação mundial como um pirata poderoso e um líder carismático. Sua tripulação, os Piratas do Chapéu de Palha, tornou-se uma das mais infames e influentes dos mares. Além disso, Luffy foi reconhecido como o Quinto Imperador do Mar após seus feitos notáveis no Arco do País de Wano.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 1-103
                        Anime One Piece, episódios 1-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>

                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Monkey D. Luffy é um personagem icônico e amado que cativou fãs em todo o mundo com sua personalidade corajosa, sua determinação inabalável e seu desejo de liberdade. Sua jornada em busca do One Piece continua a inspirar e emocionar espectadores e leitores, solidificando seu lugar como um dos maiores heróis da cultura pop japonesa.

                    </p>

                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default LuffyPage;
