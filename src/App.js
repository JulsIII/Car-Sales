import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { carReducer } from './reducers/carReducer';
import { connect } from 'react-redux';

const App = (props) => {
  
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car
    // car: {
    //   price: state.price,
    //   name: state.name,
    //   image: state.image,
    //   features: state.features
    // }
    ,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {carReducer})(App);

// const state = /