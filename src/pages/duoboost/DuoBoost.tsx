import { Component } from 'react';
import { Link } from 'react-router-dom';

class Duoboost extends Component {
    render(){
        return(
            <div>
                DuoBoost Pag
                <nav>
                    <Link to="/"> Home </Link>
                </nav>
            </div>
        )
    }
}

export default Duoboost;