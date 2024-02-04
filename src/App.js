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

  return (
    <div className="App">
      {page.view}
    </div>
  );
}

export default App;
