const SET_POPUPBARSTATE = "SET_POPUPBARSTATE";

const setPopupBarState = payload => ({
  type: SET_POPUPBARSTATE,
  payload
});

const initialState = {
  state: [
    {
      name: "collection",
      active: true
    },
    {
      name: "metal",
      active: true
    },
    {
      name: "metal_color",
      active: true
    },
    {
      name: "gemstone",
      active: true
    },
    {
      name: "gemstone_color",
      active: true
    }
  ]
};

export function popUpFiltersReduser(store = initialState, { type, payload }) {
  switch (type) {
    case SET_POPUPBARSTATE:
      return {
        ...store,
        state: [...payload]
      };

    default:
      return store;
  }
}

export const popupBarState = poppUpBarState => dispatch => {
  dispatch(setPopupBarState(poppUpBarState));
};
