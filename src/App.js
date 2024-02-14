import React, { useState } from 'react';

import { WindowController } from './controller/WindowController';

import FormPage from './page/FormPage';

function App() {
  const [page, changePage] = useState(
    {
      "page": "form",
      "view": <FormPage changePage={() => WindowController.changePageView("form", changePage)}></FormPage>
    }
  );
  return(
    <div>
      {page.view}
    </div>
  );
}

export default App;
