export function Footer() {
  return (
    <footer className="footer container" id="contact" aria-label="Contact and Site Footer">
      <ul className="footer__links">
        <li>
          <a
            href="mailto:garvd2005@gmail.com"
            className="footer__link"
            id="footer-email"
          >
            garvd2005@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/garvdanwaniofficial"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/GarvD1101"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; 2026 Garv Danwani &middot; AI Systems Engineer &middot; Production Systems
      </p>
    </footer>
  );
}
