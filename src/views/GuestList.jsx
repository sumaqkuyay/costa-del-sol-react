import React from 'react';
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom';
import { Table , Button} from 'react-bootstrap';
import avatarinvitados from '../images/account_circle.png';

const GuestList = () =>{
  // const listGuest = [
  //   {name: 'James Abad', DNI:'09754326'},
  //   {name: 'Vito Monopoli', DNI:'10236574'},
  //   {name: 'Sandra Isabel Azabache', DNI:'07645333'},
  // ]
  return(
    <>
      <div className="sub-navbar">
        <Link to="/materials">
          <span>Lista de Invitados</span>
        </Link>
      </div>
      <SideBar/>
      <div className="textoRegreso">
        <Link to="/guestEntrance" className="nav__link act">
          <i class='bx bxs-chevron-left'></i>
          <span className="nav__name">Regresar</span>
        </Link>
      </div>
      <div className="contenedorLista">
        <div className="contenedorHeader">
          <div className="nameInvitado">
            <img src={avatarinvitados} alt="" />
            <p>JAVIER GOMEZ</p>
          </div>
          <div className="datosDerecha">
            <div className="datoI">
              <p>Estacionamiento</p>
              <p>Nro .18</p>
            </div>
            <div className="datoD">
              <p>Nro de Placa</p>
              <p>AJK - 185</p>
            </div>
          </div>
        </div>
        <div className="section-list overflow-auto">
          <Table className="table-list" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Nombre Invitado</th>
                <th>Nro. DNI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dante</td>
                <td>75444865</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>08999421</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>45000428</td>
              </tr>
              <tr>
                <td>Esteban</td>
                <td>07455832</td>
              </tr>
              <tr>
                <td>Maria</td>
                <td>05666421</td>
              </tr>
              <tr>
                <td>Esteban</td>
                <td>56000485</td>
              </tr>
              <tr>
                <td>Mariano</td>
                <td>58666959</td>
              </tr>
              <tr>
                <td>Pierina</td>
                <td>80055421</td>
              </tr>
              <tr>
                <td>Elizabeth</td>
                <td>05888425</td>
              </tr>
              <tr>
                <td>Tomas</td>
                <td>01000456</td>
              </tr>
            </tbody>
          </Table>
          <Table className="table-date" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Fecha Solicitud</th>
                <th>Fecha Ingreso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15/05/20</td>
                <td>06/06/20</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="section-button"> <Button variant="primary">Descargar PDF</Button></div>
      </div>
    </>
  );
};
export default GuestList;