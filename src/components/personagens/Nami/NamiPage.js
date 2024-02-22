import React from 'react';
import './NamiPage.css';
import namiImg from '../../../img/nami.png';
import { Link } from 'react-router-dom';


const NamiPage = () => {
    return (
        <div className="container secundario">
            <img src={namiImg} alt="Nami" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Nami</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Nami</p>
                    <p><strong>Alcunhas:</strong> "Navigator", "Cat Burglar"</p>
                    <p><strong>Data de Nascimento:</strong> 3 de julho</p>
                    <p><strong>Origem:</strong> Orange Town, East Blue</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol66.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Nami é a navegadora dos Piratas do Chapéu de Palha em One Piece, criado por Eiichiro Oda. Ela começou sua jornada como uma cartógrafa para os Piratas Arlong antes de se juntar a Luffy e sua tripulação. Nami é excepcional na navegação e meteorologia, sendo uma peça vital na jornada dos Piratas do Chapéu de Palha.</p>
                </div>

                <div className="habilidades">
                    <h3>Habilidades e Estilo de Luta:</h3>
                    <p><strong>Navegação:</strong> Nami é uma navegadora talentosa, capaz de traçar rotas complexas e entender padrões meteorológicos.</p>
                    <p><strong>Clima-Tact:</strong> Um bastão especial criado por Usopp, que Nami utiliza para controlar o clima, criando chuvas, tempestades e ventos.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p>Nami desempenhou um papel crucial em várias sagas, desde sua introdução em Orange Town até suas contribuições em Arlong Park, Alabasta, Water 7 e Enies Lobby. Sua busca por mapear o mundo e proteger seus amigos a tornam uma peça essencial na tripulação.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Nami é reconhecida como uma das melhores navegadoras do mundo, e sua habilidade em controlar o Clima-Tact a torna uma força poderosa. Ela também é conhecida por sua lealdade aos Piratas do Chapéu de Palha.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 1-103
                        Anime One Piece, episódios 1-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Nami é uma personagem indispensável na tripulação dos Piratas do Chapéu de Palha, desempenhando um papel crucial na navegação e no desenvolvimento da história. Sua busca por mapear o mundo e proteger seus amigos a torna uma peça essencial na jornada rumo ao One Piece.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default NamiPage;
