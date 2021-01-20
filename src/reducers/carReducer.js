import { TOGGLE_DRAGON_STATUS } from "../actions/dragonListActions";



{
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

// const initialState = {
//   members: [
//     { name: "Jojo Zhang", dragonStatus: true, id: 1 },
//     { name: "Brandon Harris", dragonStatus: false, id: 2 },
//   ],
//   anotherProp: {},
// };

// export const dragonListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_DRAGON_STATUS:
//       return {
//         ...state,
//         members: state.members.map((member) => {
//           if (member.id === action.payload) {
//             return {
//               ...member,
//               dragonStatus: !member.dragonStatus,
//             };
//           } else {
//             return member;
//           }
//         }),
//       };
//     default:
//       return state;
//   }
// };
