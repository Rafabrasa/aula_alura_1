import React from 'react';
import { Link } from 'react-router-dom';
import './MainSection.css';  // Importe seu arquivo de estilos
import logo from '../img/logo.png';
import luffyImg from '../img/luffy.png';
import zoroImg from '../img/zoro.png';
import namiImg from '../img/nami.png';
import usoppImg from '../img/usopp.png';
import robinImg from '../img/robin.png';
import frankyImg from '../img/franky.png';
import chopperImg from '../img/chopper.png';
import brookImg from '../img/brook.png';
import jinbeImg from '../img/jinbe.png';
import sanjiImg from '../img/sanji.png';
import sunnyImg from '../img/sunny.png';
import tvImg from '../img/tv.png';
import computerImg from '../img/computador.png';
import celularImg from '../img/celular.png';
import bandeira from '../img/bandeira.png';

const MainSection = () => {
    return (
        <div>
            <section className="container principal">
                <div className="container__caixa">
                    <img src={logo} alt="Logo" className="container__imagem" />
                    <a href="https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece" className="container__botao">Assista agora</a>
                </div>
            </section>

            <section className="container secundario">
                <img src={luffyImg} alt="Luffy" />
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Monkey D. Luffy</h2>
                    <p className="descricao__texto">Monkey D. Luffy, também conhecido como "Luffy do Chapéu de Palha", é o destemido capitão dos Piratas do Chapéu de Palha em One Piece. Nascido na Vila Foosha, sua jornada começou quando, aos 7 anos, acidentalmente comeu a Gomu Gomu no Mi, tornando seu corpo elástico. Seu objetivo audacioso é se tornar o Rei dos Piratas, encontrando o tesouro lendário de Gol D. Roger. Com uma recompensa atual de Bsymbol3.000.000.000, Luffy é conhecido por desafiar poderosas forças globais, liderar a Grande Frota do Chapéu de Palha e, após derrotar Kaidou, foi oficialmente declarado Imperador pelo Governo Mundial. Seu carisma, habilidades elásticas e determinação implacável o tornam uma figura icônica no mundo de One Piece.</p>
                    <Link to="/luffy" className="container__botao secundario__botao">Saiba mais sobre Luffy</Link>
                </div>

            </section>

            <section className="container secundario">
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Roronoa Zoro</h2>
                    <p className="descricao__texto">Roronoa Zoro, o espadachim indomável, é o primeiro membro e o espadachim principal dos Piratas do Chapéu de Palha. Com sua ambição de se tornar o maior espadachim do mundo, Zoro é reconhecido por sua habilidade excepcional com três espadas e sua devoção ao código de honra samurai. Nascido na Vila Shimotsuki, Zoro cruzou caminhos com Monkey D. Luffy durante a busca de seu próprio sonho. Ao longo da jornada, ele enfrentou desafios notáveis, como derrotar poderosos adversários, participar da Batalha de Marineford e se tornar o Mestre das Espadas após o treinamento com o lendário Dracule Mihawk. Com uma recompensa crescente e sua lealdade inabalável à tripulação, Zoro continua a ser uma força formidável nos mares de One Piece.</p>
                    <Link to="/zoro" className="container__botao secundario__botao">Saiba mais sobre Roronoa Zoro</Link>
                </div>
                <img src={zoroImg} alt="" className="secundario__imagem" />

            </section>

            <section className="container secundario">
                <img src={namiImg} alt="Luffy" />
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Nami</h2>
                    <p className="descricao__texto">Nami, a navegadora astuta, é uma membra vital dos Piratas do Chapéu de Palha. Inicialmente introduzida como uma cartógrafa talentosa e navegadora, Nami se junta à tripulação para realizar seu sonho de desenhar um mapa completo do mundo. Nascida na Vila Cocoyasi, ela sofreu as consequências da Arlong Park Arc, onde teve que lidar com o infame Arlong e sua tripulação. Após eventos emocionantes e a promessa cumprida por Luffy de ajudá-la a realizar seu sonho, Nami se torna essencial para a tripulação, sendo a responsável pela navegação e meteorologia. Sua habilidade excepcional em navegação, inteligência estratégica e um passado marcante a tornam uma personagem notável e valiosa na jornada em busca do One Piece.</p>
                    <Link to="/nami" className="container__botao secundario__botao">Saiba mais sobre Nami</Link>

                </div>
            </section>

            <section className="container secundario">
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Usopp</h2>
                    <p className="descricao__texto">Usopp, o atirador talentoso e contador de histórias, é o atirador dos Piratas do Chapéu de Palha. Nascido na Vila Syrup, Usopp é conhecido por suas histórias exageradas e sua habilidade como atirador de elite. Seu sonho é se tornar um bravo guerreiro dos mares e alcançar a verdadeira coragem. Após os eventos do Arco de Syrup Village, ele se junta à tripulação de Luffy. Apesar de suas mentiras e inseguranças iniciais, Usopp é um membro leal e corajoso, contribuindo com seu talento no manuseio do estilingue e criando dispositivos engenhosos. Sua criatividade, habilidades de tiro precisas e evolução ao longo da jornada fazem de Usopp um membro valioso e querido da tripulação Piratas do Chapéu de Palha.</p>
                    <Link to="/usopp" className="container__botao secundario__botao">Saiba mais sobre Usopp</Link>
                </div>
                <img src={usoppImg} alt="" className="secundario__imagem" />

            </section>

            <section className="container secundario">
                <img src={robinImg} />
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Nico Robin</h2>
                    <p className="descricao__texto">Nico Robin, a arqueóloga misteriosa, é uma membra valiosa e intelectual dos Piratas do Chapéu de Palha. Originalmente introduzida como inimiga durante o Arco de Alabasta, Robin se junta à tripulação após os eventos desse arco. Nascida em Ohara, uma ilha de estudiosos, Robin possui o conhecimento da história mundial e é movida pelo desejo de decifrar os Poneglyphs, pedras antigas que contêm informações cruciais sobre o século perdido. Sua habilidade única, o Hana Hana no Mi, permite que ela cultive mãos em qualquer superfície, facilitando sua pesquisa arqueológica. Com uma aura calma e um passado marcado por tragédia, Robin contribui não apenas com sua perícia acadêmica, mas também com uma perspectiva única sobre a história e os mistérios do mundo de One Piece.</p>
                    <Link to="/robin" className="container__botao secundario__botao">Saiba mais sobre Nico Robin</Link>


                </div>
            </section>
            <section className="container secundario">
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Franky</h2>
                    <p className="descricao__texto">Franky, o construtor de sonhos, é o carpinteiro e engenheiro naval dos Piratas do Chapéu de Palha. Anteriormente conhecido como Cutty Flam, Franky teve uma vida de rebeldia e habilidades mecânicas excepcionais. Nascido no Water 7, ele é o fundador da Franky Family e o criador do Thousand Sunny, o navio dos Piratas do Chapéu de Palha. Após eventos emocionantes durante o Arco de Enies Lobby, Franky se junta à tripulação, trazendo sua genialidade para a construção e reparo de navios. Seu corpo foi modificado com a energia do cola cola no mi (Pluton), dando-lhe força sobre-humana. Com sua personalidade extravagante, paixão por automanutenção e o lema "SUUUUUPER", Franky adiciona um toque único e poderoso à tripulação enquanto navegam em busca do One Piece.</p>
                    <Link to="/Franky" className="container__botao secundario__botao">Saiba mais sobre Franky</Link>
                </div>
                <img src={frankyImg} alt="" className="secundario__imagem" />

            </section>

            <section className="container secundario">
                <img src={chopperImg} />
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Tony Tony Chopper</h2>
                    <p className="descricao__texto">Tony Tony Chopper, o médico feroz e adorável, é o médico da tripulação Piratas do Chapéu de Palha. Nascido na Ilha Drum, Chopper é uma rena que comeu a Hito Hito no Mi, tornando-se um humano com características de rena. Após a morte do Dr. Hiluluk e a influência do Dr. Kureha, Chopper desenvolveu uma paixão pela medicina e se tornou um médico habilidoso. Seu sonho é criar uma cura para todas as doenças e se tornar um médico renomado. Com a habilidade de se transformar em diferentes formas graças ao Hito Hito no Mi, Chopper contribui não apenas com suas habilidades médicas, mas também com sua astúcia e coragem. Seu caráter carismático e sua personalidade adorável fazem dele um membro querido da tripulação.</p>
                    <Link to="/chopper" className="container__botao secundario__botao">Saiba mais sobre Tony Tony Chopper</Link>

                </div>
            </section>
            <section className="container secundario">
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Brook</h2>
                    <p className="descricao__texto">Brook, o esqueleto músico, é o músico e espadachim dos Piratas do Chapéu de Palha. Nascido como Humano em West Blue, Brook comeu a Yomi Yomi no Mi, permitindo que sua alma voltasse ao seu corpo após a morte. Após 50 anos de solidão como esqueleto vivo, Brook se junta à tripulação com o sonho de se reunir com sua amada Laboon e se tornar o maior músico do mundo. Com habilidades de esgrima excepcionais e poderes espirituais, ele é uma adição única à tripulação. Além de suas habilidades de combate, Brook é conhecido por sua paixão pela música, tocando seu violino e trazendo alegria para a tripulação. Seu senso de humor, sua lealdade e sua capacidade de superar desafios difíceis o tornam um membro estimado e peculiar dos Piratas do Chapéu de Palha.</p>
                    <Link to="/brook" className="container__botao secundario__botao">Saiba mais sobre Brook</Link>
                </div>
                <img src={brookImg} alt="" className="secundario__imagem" />

            </section>

            <section className="container secundario">
                <img src={jinbeImg} />
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Jinbe</h2>
                    <p className="descricao__texto">Jinbe, o leal e habilidoso mestre do karatê peixe, é o timoneiro e lemeiro dos Piratas do Chapéu de Palha. Nascido na Ilha dos Tritões, Jinbe é um ex-Shichibukai e um renomado mestre no estilo de luta do karatê peixe, conhecido por sua força e habilidades em combate aquático. Sua história inclui uma longa relação com o ex-Pirata do Chapéu de Palha, Portgas D. Ace, e uma amizade com Monkey D. Luffy. Após os eventos na Ilha dos Tritões, Jinbe oficialmente se torna um membro da tripulação, trazendo sua sabedoria, calma e habilidades excepcionais para a equipe. Seu compromisso com a justiça e sua experiência em navegação o tornam um membro valioso enquanto os Piratas do Chapéu de Palha continuam sua jornada em busca do One Piece.</p>
                    <Link to="/jinbe" className="container__botao secundario__botao">Saiba mais sobre Jinbe</Link>

                </div>
            </section>

            <section className="container secundario">
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Sanji</h2>
                    <p className="descricao__texto">Sanji, o cozinheiro e especialista em técnicas de pernas, é um membro vital e carismático dos Piratas do Chapéu de Palha. Nascido no Reino Germa, Sanji cresceu no Baratie, um restaurante flutuante no mar. Com uma paixão pela culinária e um código de honra que proíbe o uso de suas mãos em combate, Sanji é conhecido por seu estilo de luta único, baseado em técnicas de chutes poderosos. Sua jornada se entrelaça com a busca do One Piece, enquanto ele busca a All Blue, um mar lendário que une os quatro mares e contém uma variedade única de peixes. A lealdade de Sanji à tripulação, seu refinamento culinário e sua destreza em combate fazem dele um membro inestimável da equipe de Luffy.</p>
                    <Link to="/sanji" className="container__botao secundario__botao">Saiba mais sobre Sanji</Link>
                </div>
                <img src={sanjiImg} alt="" className="secundario__imagem" />

            </section>

            <section className="container secundario">
                <img src={sunnyImg} />
                <div className="container__descricao">
                    <h2 className="descricao__titulo">Thousand Sunny</h2>
                    <p className="descricao__texto">"Sunny" é o Thousand Sunny, o navio dos Piratas do Chapéu de Palha em One Piece. Ele é a segunda embarcação principal da tripulação, sucedendo o Going Merry. Projetado e construído por Franky, o Thousand Sunny é um navio movido a cola cola no mi, o que permite navegar pelas águas da Grande Rota com facilidade. Além de sua funcionalidade como meio de transporte, o Sunny também serve como base móvel para a tripulação, contendo instalações como o Laboratório de Vegapunk, o Jardim de Inverno e o Salão do Tesouro. O Thousand Sunny é um símbolo da progressão e crescimento dos Piratas do Chapéu de Palha, refletindo sua resiliência e determinação durante suas aventuras pelos mares tumultuados do mundo de One Piece.</p>
                    <Link to="/sunny" className="container__botao secundario__botao">Saiba mais sobre Thousand Sunny</Link>

                </div>
            </section>


            <section className="dispositivos">
                <h2 className="dispositivos__titulo">Disponivel nos dispositivos</h2>
                <ul className="dispositivos__lista">
                    <li>
                        <img src={tvImg} />
                        <h3 className="lista__item">TV</h3>
                    </li>
                    <li>
                        <img src={computerImg} />
                        <h3 className="lista__item">Computador</h3>
                    </li>
                    <li>
                        <img src={celularImg} />
                        <h3 className="lista__item">Celular</h3>
                    </li>
                </ul>
            </section>

            <footer className="rodape">
                <img src={bandeira} alt="Logo" className="rodape__logo" />
                <ul className="rodape__lista">
                    <li className="lista__link">
                        <a href="#">Idioma</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Dispositivos Compatíveis</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Contrato de Assinatura</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Política de Privacidade</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Proteção de Dados no Brasil</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Anúncios Personalizados</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Ajuda</a>
                    </li>
                </ul>
                <div className="rodape__textos">
                    <p className="rodape__texto">© 2024 SeuBlog.com. Todos os direitos reservados.</p>
                    <p className="rodape__texto">Desenvolvido por Rafael brandão.</p>
                </div>
            </footer>
        </div>
    );
}

export default MainSection;
