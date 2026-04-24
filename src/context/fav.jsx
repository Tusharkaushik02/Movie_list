import { createContext, useState, useEffect, useContext, Children } from 'react'

const FavContext = createContext()

export { FavContext }

export const useFav = () => useContext(FavContext)

export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('fav')
        if (data) {
            setFav(JSON.parse(data))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("fav", JSON.stringify(fav))
    }, [fav])

    const addfav = (movie) => {
        setFav((prev) => [...prev, movie])
    }

    const removefav = (movie) => {
        setFav((prev) => prev.filter((m) => m.title !== movie.title))
    }

    return (
        <FavContext.Provider value={{ fav, addfav, removefav }}>
            {children}
        </FavContext.Provider>
    )
}