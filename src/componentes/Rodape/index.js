import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="rodape">
            <section className="container__social">
                <ul className="social">
                    <li>
                        <a href="facebook.com" target="_blank">
                            <span className="icon-social fb"></span>
                            <img className="icon-social" src="/imagens/fb.png" alt="Organo" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img className="icon-social" src="/imagens/tw.png" alt="Organo" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img className="icon-social" src="/imagens/ig.png" alt="Organo" />
                        </a>
                    </li>
                </ul>

            </section>

            <section className="container__logo">
                <img className="logo" src="/imagens/logo.png" alt="Organo" />
            </section>

            <section className="container__credito">
                <p className="credito">Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape;