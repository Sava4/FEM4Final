const SET_FILTERS = "SET_FILTERS";

const setFilters = payload => ({
  type: SET_FILTERS,
  payload
});


const SET_IS_SHOWN = "SET_IS_SHOWN";

const IsShown = payload => ({
  type: SET_IS_SHOWN,
  payload
});

const SET_CHECKED_FILTERS = "SET_CHECKED_FILTERS";

const checkFilter = payload => ({
  type: SET_CHECKED_FILTERS,
  payload
});

const initialState = { 
  filters:[],
  lowPriсe:null,
  hightPrice:null
 };

export function filtersReduser(store = initialState, { type, payload }) {
  switch (type) {
    case SET_FILTERS:
      return {
        ...store,
        filters:[...store.filters, payload],
        // names:[...store.names, ...payload]
      };
      case SET_IS_SHOWN:
      return  Object.assign({}, store, {
              filters:store.filters.map(item=>{
                 if (item.filterType === payload) {
                  return  Object.assign({}, item,
                    {isShown: !item.isShow })
                  }
                  return item
                } 
                )

            })
      case SET_CHECKED_FILTERS:
        return   Object.assign({},store.filters,{
           filters: store.filters.map(item=> {
             if (item.filterType === payload.filterType){
                return Object.assign({}, item,
                  {name:[...item.name,...payload.checkFilter]})
             }
           })
          })


        
        
        Object.assign({}, store, {
                filters:store.filters.map(item=>{
                    if (item.filterType === payload.filterName) {
                    return  Object.assign({}, item,
                      {names: [...item.names, ...payload.checkFilter] })
                    }
                    return item
                  } 
                  )
  
              })

        
               
       
        // names:[...store.names, ...payload]
    
    default:
      return store;
  }
}

export const setfilterList = filter => dispatch => {
  dispatch(setFilters(filter));
};

export const setIsShown = ( filterName)  => dispatch => {

  dispatch(IsShown(filterName));
};
export const setCheckFilter = ( {filterType, checkFilter})  => dispatch => {

  dispatch(IsShown(filterType, checkFilter));
};

