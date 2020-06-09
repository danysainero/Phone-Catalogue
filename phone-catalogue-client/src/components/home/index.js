import axios from "axios";
import React from "react";
import "./styles.css";

class Home extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3002/items`).then((res) => {
      const items = res.data;
      this.setState({ items });
    });
  }

  render() {
    return (
      <div className="home-wrapper">
      <h1>PHONES</h1>
      <div className="card-wrapper">
        {this.state.items.map((item) => {
          return (
            <div
              key={item.id}
              className="card-container"
              onClick={() => this.props.history.push(`/phones/${item.id}`)}
            >
              <p className="card-header">{item.name}</p>
              <p className="card-subheader">Price: <span> {item.price} €</span></p>
              <p className="card-body"> {item.description} </p>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}
export default Home;
