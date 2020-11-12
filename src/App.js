import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer'

const App = () => {
    return (
        <Provider store={store}>
        <div>
            <CakeContainer />
        </div>
        </Provider>
    )
}

export default App
