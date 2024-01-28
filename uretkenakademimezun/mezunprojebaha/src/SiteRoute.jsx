import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Baskan from './components/Baskan';
import Kurumsal from './components/Kurumsal';
import Meram from './components/Meram';
import Restore from './components/Restore';

export default function SiteRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/baskan" element={<Baskan />} />
      <Route path="/kurumsal" element={<Kurumsal />} />
      <Route path="/meram" element={<Meram />} />
      <Route path="/restore" element={<Restore />} />
    </Routes>
  );
}
