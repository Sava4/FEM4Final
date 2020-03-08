import { keys } from "@material-ui/core/styles/createBreakpoints";

const SET_FILTERS = "SET_FILTERS";

const setFilters = payload => ({
  type: SET_FILTERS,
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
  selFilters:{
    collection: [],
    metal:[], 
    metal_color:[],
    gemstone:[],
    gemstone_color:[],  
    
  },
  lowPriсe:null,
  hightPrice:null
 };

export function filtersReduser(store = initialState, { type, payload }) {
  switch (type) {
    case DEL_FILTER: {
      let filtKey = null;

      for (let key in payload) {
        filtKey = key;
       
      }
      console.log(payload[filtKey])
      return   {
        ...store,
        selFilters:{...store.selFilters, 
            [filtKey]:[...store.selFilters[filtKey].filter(item=> item !==payload[filtKey])]
        }
     };
    
     }
     //   case SET_IS_SHOWN:
    //   return  Object.assign({}, store, {
    //           filters:store.filters.map(item=>{
    //              if (item.filterType === payload) {
    //               return  Object.assign({}, item,
    //                 {isShown: !item.isShow })
    //               }
    //               return item
    //             } 
    //             )

    //         }
    //         )
      case SET_CHECKED_FILTERS:{
        let filtKey = null;

        for (let key in payload) {
          filtKey = key;
         
        }
         
        return { 
          ...store,
              selFilters : {...store.selFilters,
                [filtKey] : [...store.selFilters[filtKey].filter(item=>item !== payload[filtKey]), payload[filtKey]]
                 
                }
                     }
     
            }
      // [payload.key]: {...store.filters.selFilters[payload.key], ...[payload.val] }  


           
    default:
      return store;
  }
}

export const setfilterList = filter => dispatch => {
  dispatch(setFilters(filter));
};

export const setDeleteFilter = (filterName)  => dispatch => {

  dispatch(deleteFilter(filterName));
};

export const dispatchSetCheckFilter = (FilterType)  => dispatch => {

  dispatch(setCheckFilter(FilterType));
};

