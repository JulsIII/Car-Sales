export const ADD_FEATURE = "ADD_FEATURE";

export const REMOVE_FEATURE = "REMOVE_FEATURE";

// action creator

export const addFeature = (featureId) => {
  return { type: ADD_FEATURE, payload: featureId }; // action object
};

export const removeFeature = (featureId) => {
    return { type: REMOVE_FEATURE, payload: featureId }; // action object
  };