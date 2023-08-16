import "../App.css";
import logo from "../assets/img/logo8.png";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer-item">
          <div className="logo-footer">
            <img src={logo} />

            <h3>LAPLATACOM,LLC</h3>
          </div>
          <div className="Footer-info1">
            <h5>Quick Links</h5>
            <p>
              <i className="fa-solid fa-phone-volume"></i> +92 3121324083
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              waleedishfaq1515@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.
            </p>
          </div>
          <div className="Footer-info2">
            <h5>Quick Links</h5>
            <p>
              <i className="fa-solid fa-phone-volume"></i> +92 3121324083
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              waleedishfaq1515@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
