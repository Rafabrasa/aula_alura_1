import React from 'react';
import './JinbePage.css';
import jinbeImg from '../../../img/jinbe.png';
import { Link } from 'react-router-dom';


const JinbePage = () => {
    return (
        <div className="container secundario">
            <img src={jinbeImg} alt="Jinbe" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Jinbe</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Jinbe</p>
                    <p><strong>Alcunhas:</strong> "Knight of the Sea", "Jinbe the First"</p>
                    <p><strong>Data de Nascimento:</strong> 2 de abril</p>
                    <p><strong>Origem:</strong> Fish-Man Island, Grand Line</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol438.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Jinbe, também conhecido como "Cavaleiro do Mar," é um membro dos Piratas do Chapéu de Palha em One Piece, criado por Eiichiro Oda. Ele é um homem-peixe oriundo da Ilha dos Homens-Peixe e é especialista em artes marciais e no uso de Karatê dos Homens-Peixe.</p>
                </div>

                <div className="habilidades">
                    <h3>Habilidades e Estilo de Luta:</h3>
                    <p><strong>Karatê dos Homens-Peixe:</strong> Jinbe é mestre em Karatê dos Homens-Peixe, uma forma de luta que utiliza a força da água.</p>
                    <p><strong>Manipulação da Água:</strong> Como homem-peixe, Jinbe pode manipular a água ao seu redor, seja para criar jatos d'água poderosos ou controlar correntes marítimas.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p>Jinbe desempenhou um papel crucial em várias sagas, desde sua introdução em Impel Down até suas contribuições em Marineford, Fish-Man Island, Whole Cake Island e Wano. Ele é conhecido por sua lealdade e habilidades de liderança.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Jinbe é reconhecido como um dos guerreiros mais respeitados dos mares, sendo chamado de "Cavaleiro do Mar." Sua contribuição para a tripulação dos Piratas do Chapéu de Palha é inestimável.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 53-103
                        Anime One Piece, episódios 450-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Jinbe é uma adição valiosa à tripulação dos Piratas do Chapéu de Palha, trazendo sua sabedoria, habilidades de combate excepcionais e lealdade inabalável. Sua jornada e contribuições destacam seu papel como um "Cavaleiro do Mar" e aliado confiável.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default JinbePage;
