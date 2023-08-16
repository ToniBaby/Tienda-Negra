import {
  Col,
  Container,
  Nav,
  Row,
  Tab,
  TabContainer,
  TabContent,
} from "react-bootstrap";
import { BrandsCards } from "./BrandsCards";
import marca1 from "../assets/img/marca1.png";
import marca2 from "../assets/img/marca2.png";
import marca3 from "../assets/img/marca3.png";
import marca4 from "../assets/img/marca4.png";
import marca5 from "../assets/img/marca5.png";
import marca6 from "../assets/img/marca6.png";
import empresa from "../assets/img/empresa.jpg";

const Brands = () => {
  const brands = [
    {
      title: "a",
      description: "a",
      imgUrl: marca1,
    },
    {
      title: "a",
      description: "a",
      imgUrl: marca2,
    },
    {
      title: "a",
      description: "a",
      imgUrl: marca3,
    },
    {
      title: "a",
      description: "a",
      imgUrl: marca4,
    },
    {
      title: "a",
      description: "a",
      imgUrl: marca5,
    },
    {
      title: "a",
      description: "a",
      imgUrl: marca6,
    },
  ];
  return (
    <section className="brands" id="brands">
      <div className="brands-menu">
        <h2>Brands</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti
          reprehenderit quibusdam distinctio voluptas delectus nobis optio,
          accusamus eaque quaerat totam omnis minus hic repellat neque
          accusantium sit debitis fugiat?
        </p>
      </div>
      <TabContainer id="brands-tabs" defaultActiveKey="first">
        <Nav
          variant="pills"
          className="nav-pills mb-5 justify-content-center align-items-center"
          id="pills-tab"
        >
          <Nav.Item>
            <Nav.Link eventKey="first">BRANDS </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">ABOUT US</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">FUTURE</Nav.Link>
          </Nav.Item>
        </Nav>
        <br></br>

        <TabContent>
          <Tab.Pane eventKey="first">
            {/*   <Row className="row-brand">
                    {brands.map((brand, index) => {
                      return <BrandsCards key={index} {...brand} />;
                    })}
                  </Row> */}
            <section className="tab1">
              <div className="tab1-fila1">
                <img src={marca1}></img>
                <img src={marca2}></img>
                <img src={marca4}></img>
              </div>
              <div className="tab1-fila2">
                <img src={marca3}></img>
                <img src={marca5}></img>
                <img src={marca6}></img>
              </div>
            </section>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="tab2">
              <h2>Our History</h2>
              <div className="tab2-2">
                <img src={empresa}></img>

                <p>
                  Founded in October 2021, LaPlataCom emerges as a vision turned
                  into reality. Inspired by passion and the desire to make a
                  difference, we have established ourselves as a cornerstone in
                  the cosmetics and skincare industry in a relatively short
                  time. From our humble beginnings, we have paved a path of
                  growth and excellence that mirrors our commitment to quality
                  and customer satisfaction. As LaPlataCom solidifies its
                  presence in the market, we take pride in looking back and
                  seeing how we have evolved since the moment we opened our
                  doors. Our dedication to providing effective and reliable
                  solutions has borne fruit, and today, we are recognized for
                  our work ethic, constant innovation, and the positive impact
                  we create in the spaces of our customers.
                </p>
              </div>
            </div>
          </Tab.Pane>{" "}
          <Tab.Pane eventKey="third">
            <div className="tab3">
              <h2>Our Mission</h2>
              <div className="tab3-3">
                <img src={empresa}></img>

                <p>
                  At LaPlataCom, our mission is transparent and bold: to be the
                  link that connects your business with new perspectives and
                  outstanding achievements. Similar to how a bridge connects two
                  shores, we assume the role of connecting our clients with home
                  cleaning and care solutions that drive their prosperity. We
                  collaborate closely with a diverse range of clients, spanning
                  from retailers to wholesalers and vendors across various
                  international regions. Our expertise in the fields of Health
                  and Beauty grants us a unique perspective on the needs and
                  desires of consumers. This insight allows us to serve as a
                  reliable business partner, fostering lasting connections that
                  yield solid results. We recognize that by comprehending our
                  clients and their own customers, we have the power to make a
                  significant difference. We strive to link consumers with
                  appropriate brands and suppliers in their respective regions,
                  creating synergies that fuel shared success. At LaPlataCom,
                  our mission transcends mere product offerings; we are
                  committed to building robust relationships and delivering
                  solutions that stand the test of time. With every step
                  forward, we carry the inspiration of our shared stories and a
                  vision of a future where LaPlataCom embodies quality, trust,
                  and transformation. Together, we are paving the path towards
                  shared success and a brighter, cleaner future.
                </p>
              </div>
            </div>
          </Tab.Pane>
        </TabContent>
      </TabContainer>
      ;
    </section>
  );
};

export default Brands;
