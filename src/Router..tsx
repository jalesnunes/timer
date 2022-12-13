import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
    return (
        <Routes>
            {/* we need to wrap all pages that we want to put the Header component */}
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/history' element={<History />}/>
            </Route>
        </Routes>
    )
}