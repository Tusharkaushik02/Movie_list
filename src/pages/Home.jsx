import React from 'react'
import Card from '../component/card'

function Home({ search, movies }) {
    const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(search.toLowerCase())
    )

    return (
        <div className="page-content">
            {filtered.length > 0 ? (
                <div className="app-container">
                    {filtered.map((movie, index) => (
                        <Card
                            key={index}
                            title={movie.title}
                            image={movie.image}
                            rating={movie.rating}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <svg viewBox="0 0 24 24" width="56" height="56" className="empty-state__icon">
                        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    <h2>No movies found</h2>
                    <p>Try searching for something else</p>
                </div>
            )}
        </div>
    )
}

export default Home
