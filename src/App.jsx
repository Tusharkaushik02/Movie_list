import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Favourites from './pages/Favourites'

function App() {
  const [search, setSearch] = useState('')

  const movies = [
    {
      title: 'The Dark Knight',
      image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911BytUy5QU3mMbi.jpg',
      rating: '9.0',
    },
    {
      title: 'Inception',
      image: 'https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg',
      rating: '8.8',
    },
    {
      title: 'Interstellar',
      image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      rating: '8.7',
    },
  ]

  return (
    <Router>
      <div className="home">
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} movies={movies} />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
