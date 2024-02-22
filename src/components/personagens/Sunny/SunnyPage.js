import React from 'react';
import './SunnyPage.css';
import sunnyImg from '../../../img/sunny.png';
import { Link } from 'react-router-dom';


const SunnyPage = () => {
    return (
        <div className="container secundario">
            <img src={sunnyImg} alt="Thousand Sunny" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Thousand Sunny</h2>
                <div className="informacoes">
                    <h3>Descrição:</h3>
                    <p>O Thousand Sunny é o navio dos Piratas do Chapéu de Palha, substituindo o antigo navio, o Going Merry. Foi construído pelo carpinteiro Franky após os eventos de Enies Lobby. O navio é uma embarcação de última geração, conhecida por sua velocidade, resistência e design peculiar.</p>
                </div>

                <div className="caracteristicas">
                    <h3>Características Notáveis:</h3>
                    <p><strong>Velas Solares:</strong> O Sunny é equipado com velas solares que captam a energia do sol para impulsionar o navio.</p>
                    <p><strong>Mini-Merry:</strong> Uma versão menor da antiga Going Merry, incorporada no Sunny como lembrança e homenagem.</p>
                    <p><strong>Escritório de Inventos:</strong> Possui um escritório de inventos onde Usopp e Franky trabalham em melhorias e novas funcionalidades.</p>
                </div>

                <div className="tripulacao">
                    <h3>Relação com a Tripulação:</h3>
                    <p>O Thousand Sunny é mais do que apenas um navio para a tripulação. É considerado um membro essencial, participando ativamente das aventuras e sendo um lar para todos os Piratas do Chapéu de Palha.</p>
                </div>

                <div className="contribuicoes">
                    <h3>Contribuições para a Trama:</h3>
                    <p>O Sunny foi fundamental em várias sagas, transportando a tripulação para diferentes ilhas e participando ativamente em batalhas navais.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>O Thousand Sunny é reconhecido como um dos navios mais avançados e notáveis, e seu legado está intrinsecamente ligado às aventuras épicas dos Piratas do Chapéu de Palha.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 44-103
                        Anime One Piece, episódios 312-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>O Thousand Sunny é mais do que um meio de transporte para os Piratas do Chapéu de Palha; é uma extensão da tripulação e um símbolo de sua jornada. Com suas características únicas e contribuições para a trama, o navio se tornou uma parte inseparável da história de One Piece.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default SunnyPage;

