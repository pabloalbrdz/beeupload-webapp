import React, { useState } from 'react';

import FormPage from './page/FormPage';
import MainPage from './page/MainPage';

function App() {

  const [page, changePage] = useState(
    {
      "page": "form",
      "view": <FormPage getLogin={initUserSession}></FormPage>
    }
  );

  function initUserSession(user){
    window.sessionStorage.setItem("session", JSON.stringify(user));
    changePage(
      {
        "page": "main",
        "view": <MainPage></MainPage>
      }      
    );
  }

  function closeUserSession(){
    window.sessionStorage.removeItem("session");
    changePage(
      {
        "page": "form",
        "view": <FormPage getLogin={initUserSession}></FormPage>
      }      
    );
  }

  if (window.sessionStorage.getItem("session") != undefined){ 
    page.page = "main";
    return(
      <div className='App'>
        <MainPage closeSession={closeUserSession}></MainPage>
      </div> 
    );
  }else{
    return (
      <div className="App">
        {page.view}
      </div>
    );
  }
}

export default App;
