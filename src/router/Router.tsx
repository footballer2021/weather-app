import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { MegaCity } from '../components/MegaCity';
import { CityInJapan } from '../components/CityInJapan';

export const Router = () => {
    return (
        <BrowserRouter>
      <Routes>
        <Route path='/MegaCity' element={ <MegaCity />} />
        <Route path='/CityInJapan' element={ <CityInJapan />} />
      </Routes>
        </BrowserRouter>
    )
}