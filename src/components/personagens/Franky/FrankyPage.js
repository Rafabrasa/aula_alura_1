import React from 'react';
import './FrankyPage.css';
import frankyImg from '../../../img/franky.png';
import { Link } from 'react-router-dom';


const FrankyPage = () => {
    return (
        <div className="container secundario">
            <img src={frankyImg} alt="Franky" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Franky</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Franky</p>
                    <p><strong>Alcunhas:</strong> "Iron Man Franky", "Cyborg"</p>
                    <p><strong>Data de Nascimento:</strong> Desconhecida</p>
                    <p><strong>Origem:</strong> Water 7, Grand Line</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol94.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Franky é um membro dos Piratas do Chapéu de Palha em One Piece, criado por Eiichiro Oda. Ele é um cyborg e ex-líder da Franky Family, uma gangue de Water 7. Franky é um habilidoso construtor de navios e engenheiro, responsável pela construção do Thousand Sunny, o navio atual dos Piratas do Chapéu de Palha.</p>
                </div>

                <div className="habilidades">
                    <h3>Habilidades e Estilo de Luta:</h3>
                    <p><strong>Corpo Cyborg:</strong> Franky é um cyborg com diversas habilidades, incluindo a capacidade de se modificar e disparar projéteis.</p>
                    <p><strong>Suplex:</strong> Franky é especialista em ataques de luta livre, usando sua força física e corpo cyborg para executar poderosos golpes de suplex.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p>Franky desempenhou um papel crucial em várias sagas, desde sua introdução em Water 7 até suas contribuições em Enies Lobby, Thriller Bark, Sabaody Archipelago e Dressrosa. Sua habilidade em construir e reparar navios foi vital para os Piratas do Chapéu de Palha.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Franky é reconhecido como um engenheiro e construtor de navios talentoso, sendo responsável pela criação do Thousand Sunny. Sua lealdade aos Piratas do Chapéu de Palha e suas habilidades em combate o tornam uma peça valiosa na tripulação.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 35-103
                        Anime One Piece, episódios 230-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Franky é um membro valioso e versátil da tripulação dos Piratas do Chapéu de Palha, contribuindo tanto com suas habilidades técnicas quanto com suas habilidades de combate. Sua jornada desde líder da Franky Family até se juntar aos Chapéus de Palha é marcada por momentos de coragem e dedicação.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default FrankyPage;
