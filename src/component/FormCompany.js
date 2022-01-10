import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  ToggleButton,
  Card,
  ButtonGroup,
  ButtonToolbar,
  CardImg,
} from "react-bootstrap";

function FormCompany() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <Card
                style={{
                  marginTop: "8%",
                  borderRadius: "3%",
                  width: "80%",
                  marginLeft: "12%",
                }}
              >
                <div
                  style={{ position: "absolute", left: "45%", marginTop: "8%" }}
                >
                  <svg
                    width="52"
                    height="48"
                    viewBox="0 0 52 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="11.0477"
                      height="27.8427"
                      rx="5.52383"
                      transform="matrix(0.854439 -0.519552 0.510535 0.859857 0.499878 24.0586)"
                      fill="#3766E8"
                    ></rect>
                    <rect
                      width="11.0477"
                      height="42.3694"
                      rx="5.52383"
                      transform="matrix(0.854439 -0.519552 0.510535 0.859857 12.3904 8.65234)"
                      fill="#3766E8"
                    ></rect>
                    <rect
                      width="11.0477"
                      height="21.5479"
                      rx="5.52383"
                      transform="matrix(0.854439 -0.519552 0.510535 0.859857 31.0594 5.73828)"
                      fill="#3766E8"
                    ></rect>
                  </svg>
                </div>
                <br />
                <br />
                <br />

                <Card.Title
                  style={{
                    textAlign: "center",
                    marginTop: "11%",
                    fontSize: "185%",
                  }}
                >
                  It's a delight to have you onboard
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted text-center"
                  style={{ textAlign: "center", marginTop: "2%" }}
                >
                  Help us know you better
                </Card.Subtitle>
                <Card.Subtitle
                  className="mb-2 text-muted text-center"
                  style={{ textAlign: "center" }}
                >
                  (This is how we optimize Wobot as per your business needs)
                </Card.Subtitle>
                <Card.Body style={{ marginLeft: "10%", marginRight: "10%" }}>
                  <Form style={{ marginBottom: "5%" }}>
                    <br />
                    <Form.Group controlId="company_name">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="e.g. Example etc"
                      ></Form.Control>
                    </Form.Group>

                    <br />
                    <Form.Group>
                      <Form.Label>Industry</Form.Label>
                      <Form.Select>
                        <option>Select</option>
                      </Form.Select>
                    </Form.Group>
                    <br />
                    <Form.Group>
                      <Form.Label>Company Size</Form.Label>
                      <div>
                        <button
                          class="btn btn-outline-primary mr-1"
                          href="#"
                          size="sm"
                          style={{ marginRight: "1%" }}
                        >
                          1-20
                        </button>
                        <button
                          class="btn btn-outline-primary"
                          href="#"
                          size="sm"
                          style={{ marginRight: "1%" }}
                        >
                          21-50
                        </button>

                        <button
                          class="btn btn-outline-primary mr-1"
                          href="#"
                          size="sm"
                          style={{ marginRight: "1%" }}
                        >
                          51-200
                        </button>
                        <button
                          class="btn btn-outline-primary"
                          href="#"
                          size="sm"
                          style={{ marginRight: "1%" }}
                        >
                          201-500
                        </button>
                        <button
                          class="btn btn-outline-primary"
                          href="#"
                          size="sm"
                        >
                          500+
                        </button>
                      
                      </div>
                    </Form.Group>

                    <br />
                    <div className="d-grid">
                      <Button type="submit" variant="primary" size="lg">
                        Get Started
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div id="footer" style={{ marginTop:"60px" }}>
       <Container>
          <Row>
            <Col className="text-center py-3">
              Terms of Use | Privacy Policy
            </Col>
          </Row>
        </Container>
      </div>
      </div>
     
    </div>
  );
}
export default FormCompany;
