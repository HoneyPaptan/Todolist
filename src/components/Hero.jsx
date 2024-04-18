import React from 'react'
import LeftView from './LeftView'
import RightView from './RightView'
import "../project.css"
import { Provider } from 'react-redux';
import store from '../app/store';
const Hero = () => {
  return (
    //this contains the basic structure of the app
    <div className='hero '>
        <LeftView />
        <Provider store={store}>
          <RightView />
        </Provider>
       
    </div>
  )
}

export default Hero