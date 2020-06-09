import axios from "axios";
import React from "react";
import './styles.css';

class Detail extends React.Component {
  state = {
    items: [],
  };
  id = this.props.match.params.id;

  componentDidMount() {
    axios.get(`http://localhost:3002/items/${this.id}`).then((res) => {
      const items = res.data;
      this.setState({ items });
    });
  }

  render() {
    const item = this.state.items[0];

    return (
      <div className="details-page">
          <div className="details-wrapper">
        <div>  <img alt="mobile" className="item-image" src={`/images/${item?.imageFileName}`}/></div>  
        <div>
        <p>Name: {item?.name}</p>
       
        <h3>Price: {item?.price}€</h3>
        <p>
          <b>Manufacturer:</b> {item?.manufacturer}
        </p>
        <p>
          <b>Color:</b> {item?.color}
        </p>
        <p>
          <b>Screen:</b> {item?.screen}  
        </p>
        <p>
          <b>Processor:</b> {item?.processor}
        </p>
        <p>
          <b>Ram:</b> {item?.ram}
        </p>
        <p>
          <b>Description:</b> {item?.description}
        </p>
        </div> 
        </div> 
        <button onClick={() => this.props.history.push(`/phones`)}>Back</button>
      </div>
    );
  }
}

export default Detail;
