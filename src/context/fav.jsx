import { createContext, useState, useEffect, useContext, Children } from 'react'

const favcontext = createContext()

export const favProvider = ({ Children }) => {
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
        <favcontext.Provider value={{ fav, addfav, removefav }}>
            {children}
        </favcontext.Provider>
    )
}