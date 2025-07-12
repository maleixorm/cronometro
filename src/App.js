import React, { Component } from 'react';
import './style.css';

class App extends Component {
    render() {
        return(
            <div className='container'>
                <img src={require('./assets/cronometro.png')} className='img' alt='cronômetro' />
                <a className='timer'>0.0</a>
                <div className='areaBtn'>
                    <a className='botao'>Iniciar</a>
                    <a className='botao'>Zerar</a>
                </div>
            </div>
        );
    }
}

export default App;