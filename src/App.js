import React, { useEffect, useState } from 'react';

import { WindowController } from './controller/WindowController';

import FormPage from './page/FormPage';
import MainPage from './page/MainPage';

function App() {
  const [page, changePage] = useState(
    {
      "page": "form",
      "view": <FormPage changePage={() => WindowController.changePageView("form", changePage)}></FormPage>
    }
  );
  useEffect(() => {
    if (window.sessionStorage.getItem("session") != undefined){
      changePage(
        {
          "page": "main",
          "view": <MainPage></MainPage>
        }
      );
    }
  }, []);
  return(
    <div>
      {page.view}
    </div>
  );
}

export default App;
