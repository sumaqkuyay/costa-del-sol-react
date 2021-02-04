import React , { Component }from 'react';
import {getSocios} from '../controller/firestore';
import { ListGroup } from 'react-bootstrap';

export class Entry extends Component{

  constructor(props) {
    super(props);
    this.state = {
      socioList:[],
      changeState: true,
    };
  }

  componentDidMount() {
    this.loadSocio();
  }

  loadSocio =()=>{
    getSocios().then((preferences)=>{
      let socioList=[];
      preferences.map((item)=>{ 
        socioList.push(item);
      });
      this.setState({socioList: [...socioList]});
    }).catch(()=>{
      console.log('fallo');
    });
  }

  render(){
    return(
      <div className="section-entry"> 
        <div className="search-socios">
          <input placeholder="Buscar " required />
        </div>
       
        <div className="list-socios overflow-auto">
          <ListGroup >
            <input type="checkbox" required />
            <ListGroup.Item>NameSocio</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
};
export default Entry;
