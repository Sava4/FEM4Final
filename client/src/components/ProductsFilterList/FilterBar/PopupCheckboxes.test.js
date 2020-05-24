import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';

import {act} from 'react-dom/test-utils';

import {PopupCheckboxes} from './PopupCheckboxes';
import store from '../../../store/index'

// jest.mock('./check-box.png');
// jest.mock('./check-box-checked.png');
jest.mock('../../../store/filters');
jest.mock('react-redux');
let container = null;
beforeEach(()=>{
  container = document.createElement('div');
  document.body.appendChild(container);
})
afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

const dispatchSetCheckFilterMock = jest.fn();
const setDeleteFilterMock= jest.fn();
dispatchSetCheckFilterMock.mockImplementation(()=> console.log('Checked filters is colled'));
setDeleteFilterMock.mockImplementation(()=> console.log('Dell filters is colled'));
const item = "LilterName"; 

describe('Testing PopupCheckbox', ()=>{
  test('PopupCheckboxes rendered correctly', ()=>{
    act(()=>{
      render(<PopupCheckboxes
              filtername={item} 
              store={store}
              />
              , container);
    })
  })
  
})