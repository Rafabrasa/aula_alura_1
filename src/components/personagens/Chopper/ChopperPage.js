import React from 'react';
import './ChopperPage.css';
import chopperImg from '../../../img/chopper.png';
import { Link } from 'react-router-dom';


const ChopperPage = () => {
    return (
        <div className="container secundario">
            <img src={chopperImg} alt="Chopper" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Tony Tony Chopper</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Tony Tony Chopper</p>
                    <p><strong>Alcunhas:</strong> "Cotton Candy Lover", "Monster Point Chopper"</p>
                    <p><strong>Data de Nascimento:</strong> 24 de dezembro</p>
                    <p><strong>Origem:</strong> Drum Island, Grand Line</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol100</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Tony Tony Chopper é o médico dos Piratas do Chapéu de Palha em One Piece, criado por Eiichiro Oda. Ele é uma rena que consumiu a Hito Hito no Mi, concedendo-lhe a capacidade de se transformar em diferentes formas humanas. Chopper é também um mestre em medicina, graças ao Dr. Hiluluk e sua busca por aprimorar suas habilidades.</p>
                </div>

                <div className="habilidades">
                    <h3>Habilidades e Estilo de Luta:</h3>
                    <p><strong>Fruta Hito Hito no Mi, Modelo: Daibutsu:</strong> Chopper pode se transformar em várias formas, incluindo uma forma humanoide e Monster Point, uma forma gigantesca e poderosa.</p>
                    <p><strong>Médico Habilidoso:</strong> Chopper é um médico talentoso, capaz de tratar uma variedade de doenças e ferimentos.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p>Chopper desempenhou um papel crucial em várias sagas, desde sua introdução em Drum Island até suas contribuições em Alabasta, Enies Lobby, Thriller Bark e Whole Cake Island. Sua busca por aprimorar suas habilidades médicas e proteger seus amigos é uma parte vital da história.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Chopper é reconhecido como um médico excepcional e membro valioso dos Piratas do Chapéu de Palha. Sua habilidade de se transformar em formas diversas e suas contribuições médicas o tornam uma peça vital na tripulação.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 15-103
                        Anime One Piece, episódios 90-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Tony Tony Chopper é um membro adorável e essencial dos Piratas do Chapéu de Palha, contribuindo tanto com suas habilidades médicas quanto com suas formas únicas. Sua jornada de autodescoberta e aprimoramento contínuo o tornam um personagem cativante na história de One Piece.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default ChopperPage;
