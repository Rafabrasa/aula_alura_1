import './BrookPage.css';
import brookImg from '../../../img/brook.png';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

    

const BrookPage = () => {
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    };

    const pauseAudio = () => {
        audioRef.current.pause();
    };
    return (
        <div className="container secundario">
            <img
                src={brookImg}
                alt="Brook"
                onMouseEnter={playAudio}
                onMouseLeave={pauseAudio}
            />
            <audio ref={audioRef} src="caminho/do/seu/arquivo/de/audio.mp3" />            
            <div className="container__descricao">
                <h2 className="descricao__titulo">Brook</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Brook</p>
                    <p><strong>Alcunhas:</strong> "Soul King", "Humming Brook"</p>
                    <p><strong>Data de Nascimento:</strong> 3 de abril</p>
                    <p><strong>Origem:</strong> Florian Triangle, Grand Line</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol33.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Brook é o músico dos Piratas do Chapéu de Palha em One Piece, criado por Eiichiro Oda. Ele é um esqueleto vivo que consumiu a Yomi Yomi no Mi, permitindo-lhe ressuscitar após a morte. Brook é também um habilidoso espadachim e músico, sendo o Soul King da banda pirata.</p>
                </div>

                <div className="habilidades">
                    <h3>Habilidades e Estilo de Luta:</h3>
                    <p><strong>Fruta Yomi Yomi no Mi:</strong> Brook ressuscitou após consumir esta Fruta do Diabo, o que lhe deu uma segunda chance na vida.</p>
                    <p><strong>Esgrima Habilidosa:</strong> Brook é um espadachim experiente, utilizando sua espada "Soul Solid" em combate.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p>Brook desempenhou um papel crucial em várias sagas, desde sua introdução em Thriller Bark até suas contribuições em Sabaody Archipelago, Fish-Man Island, Punk Hazard e Whole Cake Island. Sua música e habilidades em combate foram vitais em diversas situações.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Brook é reconhecido como o Soul King, trazendo música e animação para os Piratas do Chapéu de Palha. Sua presença única e habilidades únicas o tornam uma peça valiosa na tripulação.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 46-103
                        Anime One Piece, episódios 384-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Brook é um membro animado e musical dos Piratas do Chapéu de Palha, trazendo suas habilidades musicais e espadachim para a tripulação. Sua jornada desde sua ressurreição até se tornar o Soul King é marcada por momentos de humor e coragem.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default BrookPage;
