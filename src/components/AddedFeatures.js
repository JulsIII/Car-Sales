import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;



// const mapStateToProps = (state) => {
//   return {
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//     // car: {
//     //   price: state.price,
//     //   name: state.name,
//     //   image: state.image,
//     //   features: state.features
//     // },
//     additionalFeatures: state.additionalFeatures,
//   };
// };