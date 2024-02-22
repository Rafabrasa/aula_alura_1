import React from 'react';
import './ZoroPage.css';
import zoroImg from '../../../img/zoro.png';
import { Link } from 'react-router-dom';


const ZoroPage = () => {
    return (
        <div className="container secundario">
            <img src={zoroImg} alt="Zoro" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Roronoa Zoro</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Roronoa Zoro</p>
                    <p><strong>Alcunhas:</strong> "Caçador de Piratas Zoro", "Zoro de Três Espadas"</p>
                    <p><strong>Data de Nascimento:</strong> 11 de novembro</p>
                    <p><strong>Origem:</strong> East Blue, Vila Shimotsuki</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol320.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Roronoa Zoro é um personagem central na série de mangá e anime One Piece, criada por Eiichiro Oda. Nascido na Vila Shimotsuki, East Blue, ele é o primeiro membro a se juntar à tripulação de Monkey D. Luffy. Desde jovem, Zoro aspirava se tornar o maior espadachim do mundo e aceitou a responsabilidade de proteger seu vilarejo após a morte de sua amiga, Kuina.</p>
                </div>

                <div className="atributos">
                    <h3>Atributos e Habilidades:</h3>
                    <p><strong>Estilo de Luta:</strong> Zoro é um mestre no estilo de luta com três espadas, empunhando uma em cada mão e uma em sua boca.</p>
                    <p><strong>Técnicas Notáveis:</strong> Santoryu (Três Espadas), Asura, Rengoku Onigiri, entre outras.</p>
                    <p><strong>Haki do Armamento e Observação:</strong> Desenvolveu habilidades de Haki para aprimorar suas técnicas de espada e percepção em combate.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p><strong>Sonho e Objetivo:</strong> Tornar-se o maior espadachim do mundo.</p>
                    <p><strong>Conquistas Notáveis:</strong> Derrotou vários adversários poderosos, incluindo samurais e outros espadachins renomados.</p>
                    <p><strong>Desenvolvimento Pessoal:</strong> Superou desafios significativos, incluindo sacrifícios pessoais e treinamentos intensivos.</p>
                </div>

                <div className="contribuicoes">
                    <h3>Contribuições para a Trama:</h3>
                    <p>Zoro desempenhou um papel crucial em muitas sagas, incluindo sua ajuda na luta contra Baroque Works em Alabasta e sua determinação em Enies Lobby para resgatar Nico Robin.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Zoro é conhecido como o "Caçador de Piratas Zoro" e é respeitado como um espadachim excepcional em todo o mundo. Ele é considerado o braço direito de Luffy, liderando a equipe em momentos críticos.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 1-103
                        Anime One Piece, episódios 1-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Roronoa Zoro é uma figura icônica em One Piece, conhecida por sua habilidade incomparável com a espada, sua lealdade à tripulação e sua busca incessante pela excelência como espadachim. Sua jornada inspira fãs em todo o mundo e destaca sua importância na tripulação dos Piratas do Chapéu de Palha.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default ZoroPage;

