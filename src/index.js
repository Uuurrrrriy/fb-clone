import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HeaderIconsContext, HeaderProfileIconsContext, SidebarRowContext, StoriesContext} from "./context";
import {headerIcons, headerProfileIcons, sidebarRow, stories} from "./constants";
import {StateProvider} from "./StateProvider/StateProvider";
import {initialState, reducer} from "./StateProvider/reducer";

ReactDOM.render(
  <React.StrictMode>
      <HeaderIconsContext.Provider value={headerIcons}>
          <HeaderProfileIconsContext.Provider value={headerProfileIcons}>
              <SidebarRowContext.Provider value={sidebarRow}>
                  <StoriesContext.Provider value={stories}>
                      <StateProvider
                          initialState={initialState}
                          reducer={reducer}
                      >
                          <App />
                      </StateProvider>
                  </StoriesContext.Provider>
              </SidebarRowContext.Provider>
          </HeaderProfileIconsContext.Provider>
      </HeaderIconsContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
