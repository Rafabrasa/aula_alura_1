import React from 'react';
import './RobinPage.css';
import robinImg from '../../../img/robin.png';
import { Link } from 'react-router-dom';


const RobinPage = () => {
    return (
        <div className="container secundario">
            <img src={robinImg} alt="Robin" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Nico Robin</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Nico Robin</p>
                    <p><strong>Alcunhas:</strong> "Devil Child", "Light of the Revolution"</p>
                    <p><strong>Data de Nascimento:</strong> 6 de fevereiro</p>
                    <p><strong>Origem:</strong> West Blue, Ilha Ohara</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol130.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Nico Robin é uma arqueóloga e membro dos Piratas do Chapéu de Palha em One Piece, criado por Eiichiro Oda. Ela nasceu na Ilha Ohara, no West Blue, e é a única sobrevivente conhecida do século de história dessa ilha. Robin possui o conhecimento dos Poneglyphs, artefatos essenciais na busca pelo One Piece.</p>
                </div>

                <div className="habilidades">
                    <h3>Habilidades e Estilo de Luta:</h3>
                    <p><strong>Floralia:</strong> Uma técnica em que Robin cria mãos gigantes a partir de partes de seu corpo, permitindo vários ataques simultâneos.</p>
                    <p><strong>Hana Hana no Mi:</strong> Robin comeu a Hana Hana no Mi, uma Fruta do Diabo do tipo Paramecia, que concede a habilidade de replicar partes de seu corpo em superfícies, criando membros adicionais.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p>Robin desempenhou um papel crucial em várias sagas, desde sua introdução em Alabasta até seu envolvimento em Water 7 e Enies Lobby. Sua busca por conhecimento e sua importância na busca pelo One Piece a tornam uma peça-chave na tripulação.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Robin é reconhecida como uma das arqueólogas mais talentosas do mundo, e sua participação nos Piratas do Chapéu de Palha a transformou em uma figura valiosa. Seu conhecimento dos Poneglyphs a torna crucial na busca pelo One Piece.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 24-103
                        Anime One Piece, episódios 130-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Nico Robin é uma personagem intrigante e essencial na tripulação dos Piratas do Chapéu de Palha. Sua busca por conhecimento, habilidades arqueológicas e papel na busca pelo One Piece a tornam uma peça fundamental na história da série.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default RobinPage;
