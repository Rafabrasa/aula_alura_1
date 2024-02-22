import React from 'react';
import './SanjiPage.css';
import sanjiImg from '../../../img/sanji.png';
import { Link } from 'react-router-dom';


const SanjiPage = () => {
    return (
        <div className="container secundario">
            <img src={sanjiImg} alt="Sanji" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Sanji</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Vinsmoke Sanji</p>
                    <p><strong>Alcunhas:</strong> "Black Leg", "Mr. Prince", "Sobrancelha Encaracolada"</p>
                    <p><strong>Data de Nascimento:</strong> 2 de março</p>
                    <p><strong>Origem:</strong> North Blue, Reino Germa</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol330.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Sanji é um membro-chave dos Piratas do Chapéu de Palha em One Piece, criado por Eiichiro Oda. Ele nasceu no Reino Germa no North Blue, uma família conhecida por suas habilidades de combate genéticas. Sanji abandonou sua família aos 8 anos e se tornou um cozinheiro autodidata e um habilidoso lutador.</p>
                </div>

                <div className="habilidades">
                    <h3>Habilidades e Estilo de Luta:</h3>
                    <p><strong>Kickboxing:</strong> Sanji é especializado em kickboxing, usando principalmente as pernas em combate.</p>
                    <p><strong>Diabo Jambe:</strong> Uma técnica que inflama suas pernas, tornando seus chutes ainda mais poderosos.</p>
                    <p><strong>Habilidade Culinária:</strong> Sanji é um cozinheiro excepcional e o responsável pela preparação das refeições na tripulação.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p>Sanji desempenhou um papel crucial em várias sagas, incluindo a luta contra Baroque Works, sua contribuição para a sobrevivência em Water 7 e sua dedicação em resgatar Nico Robin em Enies Lobby.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Sanji é reconhecido por sua habilidade culinária excepcional, habilidades de combate únicas e sua lealdade à tripulação. Ele é uma peça fundamental nos desafios enfrentados pelos Piratas do Chapéu de Palha.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 5-103
                        Anime One Piece, episódios 20-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Sanji é um membro valioso e multifacetado dos Piratas do Chapéu de Palha, contribuindo tanto para as habilidades de combate quanto para as habilidades culinárias da tripulação. Sua jornada continua a ser marcada por momentos de coragem e dedicação aos seus companheiros de tripulação.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default SanjiPage;
