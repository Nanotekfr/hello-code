import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>

                </header>
                <p>
                    {process.env.REACT_APP_BASE_URL}
                </p>
            </div>
        )
    }
}

export default App;