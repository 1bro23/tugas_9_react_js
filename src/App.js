import
{
  Button,
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  NavDropdown,
  Form,
  FormControl,
  Breadcrumb,
  Figure,
  Tabs,
  Tab,
  Table,
  ProgressBar,
  Pagination,
  Popover,
  OverlayTrigger,
  Collapse
} from 'react-bootstrap';
import React from 'react'

function App() {
  const popover=(
    <Popover>
      <Popover.Title>Informasi Website</Popover.Title>
      <Popover.Content>Website ini dibuat untuk memudahkan dalam pencarian
      informasi terkini tentang berita olahraga</Popover.Content>
    </Popover>
  );
  const [state,setState]=React.useState({
    data:false
  })
  return (
    <Container fluid>
      <Navbar bg='dark' variant='dark' expand>
        <Container fluid>
          <Nav className='mr-auto'>
            <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
            <Nav.Link href='#'>Berita</Nav.Link>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>Live Scores</Nav.Link>
            <NavDropdown title='Piala & Liga'>
              <NavDropdown.Item href='#'>Cup A</NavDropdown.Item>
              <NavDropdown.Item href='#'>Cup B</NavDropdown.Item>
              <NavDropdown.Item href='#'>Cup C</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'>Transfer Pemain</Nav.Link>
            <Nav.Link href='#'>Tim</Nav.Link>
          </Nav>
          <Form>
            <Nav>
              <FormControl type='text' placeholder="Search"/>
              <Button type='button' variant='outline-info'>Search</Button>
            </Nav>
          </Form>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
          <Navbar bg='light'>
            <Container>
            <Breadcrumb>
              <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
              <Breadcrumb.Item href='#'>Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item href='#' active>Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
            </Container>
          </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Rumor Transfer Pemain</h3>
          </Col>
          <Col></Col>
          <Col lg='1'>
            <Figure>
            <Figure.Image
            src='https://dportek.com/img/design/loading.gif'
            width='40'/>
            </Figure>
            <Figure>
            <Figure.Image
            src='https://i.pinimg.com/originals/21/62/f1/2162f1bcc8dce536546c881fb3697b53.gif'
            width='20'/>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs>
              <Tab eventKey='Semua Transfer' title='Semua Transfer'>
                <Table>
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Nama Pemain</td>
                      <td>Tim</td>
                      <td>Transfer</td>
                      <td>Proses Transfer</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>MAROUANE FELLAINI</td>
                      <td>MANCHESTER UNITED</td>
                      <td>SHANDONG LUNENG</td>
                      <td><ProgressBar now='85' label='85%'/></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>LUIS NANI</td>
                      <td>SPORTING CP</td>
                      <td>ORLANDO CITY</td>
                      <td><ProgressBar now='55' label='55%'/></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>MAREK HAMSIK</td>
                      <td>NAPOLI</td>
                      <td>DALIAN YIFANG</td>
                      <td><ProgressBar now='95' label='95%'/></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>SARDAR AZMOUN</td>
                      <td>RUBIN KAZAN</td>
                      <td>ZENIT ST PETERSBURG</td>
                      <td><ProgressBar now='100' label='100%'/></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>MICHY BATSHUAYI</td>
                      <td>CHELSEA</td>
                      <td>CRYSTAL PALACE</td>
                      <td><ProgressBar now='50' label='50%'/></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>LUCAS PIAZON</td>
                      <td>CHELSEA</td>
                      <td>CHIEVO</td>
                      <td><ProgressBar now='100' label='100%'/></td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey='Liga Primer Inggris' title='Liga Primer Inggris'></Tab>
              <Tab eventKey='Serie A' title='Serie A'></Tab>
              <Tab eventKey='Divisi Primera' title='Divisi Primera'></Tab>
              <Tab eventKey='Bundes Liga' title='Bundes Liga'></Tab>
              <Tab eventKey='Liga 1 Indonesia' title='Liga 1 Indonesia'></Tab>
            </Tabs>
          </Col>
        </Row>
        <Row>
          <Pagination>
            <Pagination.First/>
            <Pagination.Prev/>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis/>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>
            <Pagination.Ellipsis/>
            <Pagination.Next/>
            <Pagination.Last/>
          </Pagination>
        </Row>
        <Row>
          <Col xs={1}>
            <OverlayTrigger trigger='click' placement='right' overlay={popover}>
              <Button variant='primary'>Informasi</Button>
            </OverlayTrigger><a> </a>
          </Col>
          <Col xs={10}>
            <Button variant='primary' onClick={()=>setState({data:!state.data})}>Versi Website</Button>
            <Collapse in={state.data}>
              <p>Akses Sport V1.0</p>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
