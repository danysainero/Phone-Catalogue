import axios from "axios";
import React from "react";
import "./styles.css";

class Detail extends React.Component {
  state = {
    items: [],
  };
  id = this.props.match.params.id;

  componentDidMount() {
    axios.get(`http://localhost:3003/api/V1/phones/${this.id}`).then((res) => {
      const items = res.data;
      this.setState({ items });
    });
  }

  render() {
    const item = this.state.items[0];

    return (
      <div className="details-page">
        <div className="details-wrapper">
          <div>
          { this.state.items.map((item, i) => {
          return ( <img key={i}
            alt="mobile"
            className="item-image"
            src={`http://localhost:3003/images/${item?.imageFileName}`}
          />)})}
          </div>
          <div className="details-info">
            <p>{item?.name}</p>
            <p><span>Price:</span> {item?.price}€</p>
            <p><span>Manufacturer:</span>{item?.manufacturer}</p>
            <p> <span>Color: </span>
              <span
                className="color-square"
                style={{ background: item?.color }}
              ></span>
            </p>
            <p><span>Screen:</span>{item?.screen} </p>
            <p><span>Processor:</span>{item?.processor}</p>
            <p><span>Ram:</span>{item?.ram}</p>
            <p><span>Description:</span>{item?.description}</p>
            <div className="container-btn">
            <button className="btn" onClick={() => this.props.history.push(`/phones`)}>Back to home</button>
            </div>
          </div>
        </div>
     
      </div>
    );
  }
}

export default Detail;
