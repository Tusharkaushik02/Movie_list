import React from 'react'
import './Favourites.css'

function Favourites() {
    return (
        <div className="page-content">
            <div className="favourites-page">
                <div className="favourites-header">
                    <svg viewBox="0 0 24 24" width="36" height="36" className="favourites-header__icon">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <h1 className="favourites-header__title">Your Favourites</h1>
                    <p className="favourites-header__subtitle">Movies you've loved will appear here</p>
                </div>

                <div className="favourites-empty">
                    <div className="favourites-empty__illustration">
                        <svg viewBox="0 0 24 24" width="80" height="80" className="favourites-empty__heart">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                    <p className="favourites-empty__text">No favourites yet!</p>
                    <p className="favourites-empty__hint">Tap the heart icon on any movie card to add it here.</p>
                </div>
            </div>
        </div>
    )
}

export default Favourites
