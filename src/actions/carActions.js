export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

// action creator
export const addFeature = (feature) => {
  return ({ type: ADD_FEATURE, payload: feature}); // action object
};

export const removeFeature = (feature) => {
    return { type: REMOVE_FEATURE, payload: feature }; // action object
};