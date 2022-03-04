import { Component } from 'react';
import { Link } from 'react-router-dom';

class EloBoost extends Component {
    render(){
        return(
            <div>
                Eloboost Pag
                <nav>
                    <Link to="/"> Home </Link>
                </nav>
            </div>
        )
    }
}

export default EloBoost;