import React, { Component } from 'react';
import Header from './containers/Header'

class App extends Component {
    render() {
        return (
            <div>

                <Header />

                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor..</p>
                            <p>Ut enim ad..</p>
                            <button>Pizza</button>
                        </div>
                        <div className='col-sm-4'>
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor..</p>
                            <p>Ut enim ad..</p>
                        </div>
                        <div className='col-sm-4'>
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor..</p>
                            <p>Ut enim ad..</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
