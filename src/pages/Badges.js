import React from 'react';
import Navbar from '../components/Navbar';
import './css/Badges.css';

import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component{

    state = {
        data : [
            {
              id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
              firstName: "Freda",
              lastName: "Grady",
              email: "Leann_Berge@gmail.com",
              jobTitle: "Legacy Brand Director",
              twitter: "FredaGrady22221-7573",
              avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
            },
            {
              id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
              firstName: "Major",
              lastName: "Rodriguez",
              email: "Ilene66@hotmail.com",
              jobTitle: "Human Research Architect",
              twitter: "ajorRodriguez61545",
              avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
            },
            {
              id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
              firstName: "Daphney",
              lastName: "Torphy",
              email: "Ron61@hotmail.com",
              jobTitle: "National Markets Officer",
              twitter: "DaphneyTorphy96105",
              avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
            }
          ]
    }

    render(){
        return (
            <div>
                <Navbar />

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="Conf Logo" className="Badges_conf-logo"/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new" className="btn btn-primary">
                            New Badge
                        </a>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <ul className="list-unstyled">
                                {this.state.data.map(badge => {
                                    return <BadgesList 
                                                key={badge.id} 
                                                firstName={badge.firstName}
                                                lastName={badge.lastName}
                                            />;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Badges;