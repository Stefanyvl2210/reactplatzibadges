import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      //al momento de renderizar varios elementos estos deben tener una
      //key unica que los identifique para saber cuando se cambian
      
        <li>
          <p>
            {this.props.firstName} {this.props.lastName}
          </p>
        </li>
      
    );
  }
}

export default BadgesList;
