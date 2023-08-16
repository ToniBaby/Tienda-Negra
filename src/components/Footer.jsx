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
            <h5>Contact sales</h5>
            <p>(786) 966-9183</p>
            <p>Wholesale@laplatacom.com</p>
            <p>4696 NW 74th Ave Miami, FL 33166</p>
          </div>
          <div className="Footer-info2">
            <h5>Oder Contacts</h5>

            <p>Luciano@laplatacom.com</p>
            <p>Caterina@laplatacom.com</p>
            <p>Opening Hours 9:00 a.m. to 5:00 p.m./Monday to Friday (PST)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
