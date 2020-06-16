import React from "react";
import {SelectedFilters} from "./SelectedFilters"
import { act } from "react-dom/test-utils";
// import {render} from '@testing-library/react';
import  {render, unmountComponentAtNode}  from 'react-dom';
import { tsExternalModuleReference, exportAllDeclaration } from "@babel/types";

// jest.mock('./SelectedFilters', ()=>{
//   return (props) => (
//     <div className='test-selected'>
//         {props.selectedFilters[0]}
//         {/* {props.filterGroup} */}
//     </div>
//   ) 
// });
jest.mock('react-redux');
jest.mock('./SelectedFilters'), ()=>{
  return (props)=>{ <SelectedFilters {...props}/>}
};
const testSelectedFilters = [ "First selected filter", "Second selected filter"]

let container = null;
beforeEach(()=>{
  container = document.createElement('div');
  document.body.appendChild(container)
});

afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
  container= null;
})

describe('Testing selected', ()=>{
  test('SelectedFilters rendered successfuly', ()=>{
    act(()=>{
    render(<SelectedFilters selectedFilters={[]} filterGroup={""}/>, container)
  });
  }) 

  test ('Selected filters are shown ', ()=>{
    act(()=>{
      render(<SelectedFilters selectedFilters={testSelectedFilters} filterGroup={""}/>, container)
    })
    const renderedSelected = document.getElementsByTagName(`p`)
   console.log(renderedSelected[1].textContent)
    expect(renderedSelected[0].textContent).toBe(testSelectedFilters[0]);
    expect(renderedSelected[1].textContent).toBe(testSelectedFilters[1])
  })
});