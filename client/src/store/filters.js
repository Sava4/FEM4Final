const AVAIL_FILT = "AVAIL_FILT";

const avaliFilters = payload => ({
  type: AVAIL_FILT,
  payload
});

const SET_IS_SHOWN = "SET_IS_SHOWN";

const toggleShown = payload => ({
  type: SET_IS_SHOWN,
  payload
});

const DEL_FILTER = "DEL_FILTER";

const deleteFilter = payload => ({
  type: DEL_FILTER,
  payload
});

const CLEAR_FILTERS = "CLEAR_FILTERS";

const clearFilters = () => ({
  type: CLEAR_FILTERS
});

const SET_CHECKED_FILTERS = "SET_CHECKED_FILTERS";

const setCheckFilter = payload => ({
  type: SET_CHECKED_FILTERS,
  payload
});

const PRICE_RANGE = "PRICE_RANGE";
const priceRange = payload => ({
  type: PRICE_RANGE,
  payload
});

const initialState = {
  availFilters: [],
  selFilters: {
    collection: [],
    metal: [],
    metal_color: [],
    gemstone: [],
    gemstone_color: []
  },
  menuState: {
    price: true,
    collection: false,
    metal: false,
    metal_color: false,
    gemstone: false,
    gemstone_color: false
  },
  priceRange: {
    lowPriсe: 0,
    hightPrice: 200000
  }
};

export function filtersReduser(store = initialState, { type, payload }) {
  switch (type) {
    case AVAIL_FILT: {
      return {
        ...store,
        availFilters: payload
      };
    }
    case PRICE_RANGE: {
      console.log(payload)
      return {
        ...store,
        priceRange: {
          ...store.priceRange,
          lowPriсe: payload.min,
          hightPrice: payload.max
        }
      };
    }

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
    case CLEAR_FILTERS: {      
      return {
        ...store,
        selFilters: {
          ...store.selFilters,
          collection: [],
          metal: [],
          metal_color: [],
          gemstone: [],
          gemstone_color: []
        }
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

    case SET_IS_SHOWN: {
      return {
        ...store,
        menuState: { ...store.menuState, [payload]: !store.menuState[payload] }
      };
    }

    default:
      return store;
  }
}

export const setAvaliFilters = allFilters => dispatch => {
  dispatch(avaliFilters(allFilters));
};

export const setTogleShown = filter => dispatch => {
  dispatch(toggleShown(filter));
};

export const setDeleteFilter = filterName => dispatch => {
  dispatch(deleteFilter(filterName));
};

export const setClearFilters = () => dispatch => {
  dispatch(clearFilters());
};

export const dispatchSetCheckFilter = FilterType => dispatch => {
  dispatch(setCheckFilter(FilterType));
};

export const setPriceRange = priceRangeVAl => dispatch => {
  dispatch(priceRange(priceRangeVAl));
};
