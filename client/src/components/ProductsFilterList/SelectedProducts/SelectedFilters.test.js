import React from "react";
import {SelectedFilters} from "./SelectedFilters"
import { act } from "react-dom/test-utils";
import {render} from '@testing-library/react';
import  ReactDom  from 'react-dom';
import { tsExternalModuleReference, exportAllDeclaration } from "@babel/types";

jest.mock('react-redux');
jest.mock('./SelectedFilters'), ()=>{
  return (props)=>{ <SelectedFilters {...props}/>}
};
const testSelectedFilters = [ "First selected filter", "Second selected filter"];
const filterGroup = "Filter group name"

let container = null;
beforeEach(()=>{
  container = document.createElement('div');
  document.body.appendChild(container)
});

afterEach(()=>{
  ReactDom.unmountComponentAtNode(container);
  container.remove();
  container= null;
})

describe('Testing selected', ()=>{
  test('SelectedFilters rendered successfuly', ()=>{
    act(()=>{
      ReactDom.render(<SelectedFilters selectedFilters={[]} filterGroup={""}/>, container)
  });
  }) 

  test ('Selected filters are shown ', ()=>{
    act(()=>{
      render(<SelectedFilters selectedFilters={testSelectedFilters} filterGroup={""}/>, container)
    })
    const renderedSelected = document.getElementsByTagName(`p`)
  
    expect(renderedSelected[0].textContent).toBe(testSelectedFilters[0]);
    expect(renderedSelected[1].textContent).toBe(testSelectedFilters[1])
  })


});