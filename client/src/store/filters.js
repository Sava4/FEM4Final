const SET_IS_SHOWN = "SET_IS_SHOWN";

const togleShown = payload => ({
  type: SET_IS_SHOWN,
  payload
});

const DEL_FILTER = "DEL_FILTER";

const deleteFilter = payload => ({
  type: DEL_FILTER,
  payload
});

const SET_CHECKED_FILTERS = "SET_CHECKED_FILTERS";

const setCheckFilter = payload => ({
  type: SET_CHECKED_FILTERS,
  payload
});

const initialState = {
  selFilters: {
    collection: [],
    metal: [],
    metal_color: [],
    gemstone: [],
    gemstone_color: []
  },
  menuState: {
    collection: false,
    metal: false,
    metal_color: false,
    gemstone: false,
    gemstone_color: false
  },
  lowPriсe: null,
  hightPrice: null
};

export function filtersReduser(store = initialState, { type, payload }) {
  switch (type) {
    case DEL_FILTER: {
      let filtKey = null;

      for (let key in payload) {
        filtKey = key;
      }
      return {
        ...store,
        selFilters: {
          ...store.selFilters,
          [filtKey]: [
            ...store.selFilters[filtKey].filter(
              item => item !== payload[filtKey]
            )
          ]
        }
      };
    }
    case SET_IS_SHOWN: {
      console.log(payload);
      return {
        ...store,
        menuState: { ...store.menuState, [payload]: !store.menuState[payload] }
      };
    }

    case SET_CHECKED_FILTERS: {
      let filtKey = null;

      for (let key in payload) {
        filtKey = key;
      }

      return {
        ...store,
        selFilters: {
          ...store.selFilters,
          [filtKey]: [
            ...store.selFilters[filtKey].filter(
              item => item !== payload[filtKey]
            ),
            payload[filtKey]
          ]
        }
      };
    }

    default:
      return store;
  }
}

export const setTogleShown = filter => dispatch => {
  dispatch(togleShown(filter));
};

export const setDeleteFilter = filterName => dispatch => {
  dispatch(deleteFilter(filterName));
};

export const dispatchSetCheckFilter = FilterType => dispatch => {
  dispatch(setCheckFilter(FilterType));
};
