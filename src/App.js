import React, { useState } from 'react';

import FormPage from './page/FormPage';
import MainPage from './page/MainPage';

function App() {

  const [page, changePage] = useState(
    {
      "page": "form",
      "view": <FormPage loginSuccess={loginSucces}></FormPage>
    }
  );

  function loginSucces(response){
    if (response == 200){
      changePage(
        {
          "page": "main",
          "view": <MainPage></MainPage>
        }
      );
    }
  }

  return (
    <div className="App">
      {page.view}
    </div>
  );
}

export default App;
