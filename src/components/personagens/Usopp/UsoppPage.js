import React from 'react';
import './UsoppPage.css';
import usoppImg from '../../../img/usopp.png';
import { Link } from 'react-router-dom';


const UsoppPage = () => {
    return (
        <div className="container secundario">
            <img src={usoppImg} alt="Usopp" />
            <div className="container__descricao">
                <h2 className="descricao__titulo">Usopp</h2>
                <div className="informacoes">
                    <h3>Informações Pessoais:</h3>
                    <p><strong>Nome Completo:</strong> Usopp</p>
                    <p><strong>Alcunhas:</strong> "God Usopp", "Sniper King"</p>
                    <p><strong>Data de Nascimento:</strong> 1º de abril</p>
                    <p><strong>Origem:</strong> East Blue, Vila Syrup</p>
                    <p><strong>Recompensa Atual:</strong> Bsymbol200.000.000</p>
                </div>

                <div className="biografia">
                    <h3>Biografia:</h3>
                    <p>Usopp é um membro dos Piratas do Chapéu de Palha em One Piece, criado por Eiichiro Oda. Originário da Vila Syrup, East Blue, Usopp é um atirador habilidoso e contador de histórias. Ele se juntou à tripulação de Monkey D. Luffy durante a saga de Syrup Village, onde se tornou amigo de Luffy e seus companheiros.</p>
                </div>

                <div className="habilidades">
                    <h3>Habilidades e Funções:</h3>
                    <p><strong>Atirador Exímio:</strong> Usopp é conhecido por sua habilidade excepcional como atirador, usando seu estilingue para realizar ataques precisos e estratégicos.</p>
                    <p><strong>Inventor Talentoso:</strong> Ele possui uma habilidade única para criar engenhocas e dispositivos, incluindo munições especiais para seu estilingue.</p>
                    <p><strong>Contador de Histórias:</strong> Usopp é um contador de histórias talentoso, muitas vezes exagerando sobre suas próprias aventuras.</p>
                </div>

                <div className="jornada">
                    <h3>Jornada e Realizações:</h3>
                    <p>Usopp desempenhou papéis cruciais em várias sagas, incluindo suas contribuições na luta contra os Piratas do Arlong e seu papel na busca pelo One Piece.</p>
                </div>

                <div className="reconhecimento">
                    <h3>Reconhecimento e Legado:</h3>
                    <p>Embora inicialmente tenha se autodenominado como o "homem mais corajoso dos mares", Usopp ganhou respeito real de seus companheiros e se tornou um membro valioso da tripulação dos Piratas do Chapéu de Palha.</p>
                </div>

                <div className="referencias">
                    <h3>Referências:</h3>
                    <p>Mangá One Piece, volumes 1-103
                        Anime One Piece, episódios 1-1000+
                        Material adicional: entrevistas com Eiichiro Oda, guias oficiais, filmes e especiais relacionados a One Piece.</p>
                </div>

                <div className="notas-finais">
                    <h3>Notas Finais:</h3>
                    <p>Usopp é um personagem único e colorido em One Piece, contribuindo para a tripulação com suas habilidades de atirador, criatividade inventiva e personalidade cativante. Sua jornada de autodescoberta e coragem destaca o crescimento do personagem ao longo da série.</p>
                </div>

                <Link to="/" className="container__botao secundario__botao">Voltar</Link>
            </div>
        </div>
    );
}

export default UsoppPage;
