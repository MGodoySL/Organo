import "./style.css";

export const Footer = () => {
    return (
        <div className="footer">
            <section>
                <ul className="socialMedias">
                    <li>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="./imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank">
                            <img src="./imagens/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank">
                            <img src="./imagens/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="./imagens/logo.png" alt="Logomarca Organo" />
            </section>
            <section>
                <p>Desenvolvido por Matheus Godoy</p>
            </section>
        </div>
    );
};
