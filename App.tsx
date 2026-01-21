import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Ministries } from './pages/Ministries';
import { Projects } from './pages/Projects';
import { Donate } from './pages/Donate';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('pt');
  const content = TRANSLATIONS[lang];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout lang={lang} setLang={setLang} content={content} />}>
          <Route index element={<Home text={content} />} />
          <Route path="sobre" element={<About content={content} />} />
          <Route path="ministerios" element={<Ministries content={content} />} />
          <Route path="projetos" element={<Projects content={content} />} />
          <Route path="doacao" element={<Donate content={content} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;