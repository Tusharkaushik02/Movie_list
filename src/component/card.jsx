import React, { useState } from 'react'
import './card.css'
import { useFav } from '../context/fav'

function Card({ title, image, rating, onFavoriteToggle, isFavorite: initialFavorite = false }) {
    const [isFavorite, setIsFavorite] = useState(initialFavorite)
    const { addfav, removefav } = useFav()

    const handleFavorite = (e) => {
        e.stopPropagation()
        setIsFavorite(!isFavorite)
        if (onFavoriteToggle) onFavoriteToggle(!isFavorite)
    }

    // Generate star rating display
    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating / 2) // convert 10-scale to 5-scale
        const hasHalf = (rating / 2) % 1 >= 0.5

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <svg key={i} className="star star-filled" viewBox="0 0 24 24" width="14" height="14">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                )
            } else if (i === fullStars && hasHalf) {
                stars.push(
                    <svg key={i} className="star star-half" viewBox="0 0 24 24" width="14" height="14">
                        <defs>
                            <linearGradient id={`half-${i}`}>
                                <stop offset="50%" stopColor="#fbbf24" />
                                <stop offset="50%" stopColor="#4b5563" />
                            </linearGradient>
                        </defs>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#half-${i})`} />
                    </svg>
                )
            } else {
                stars.push(
                    <svg key={i} className="star star-empty" viewBox="0 0 24 24" width="14" height="14">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                )
            }
        }
        return stars
    }

    return (
        <div className="movie-card">
            {/* Poster Image */}
            <div className="movie-card__poster">
                <img
                    src={image || 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'}
                    alt={title || 'Movie Poster'}
                    className="movie-card__image"
                    onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
                    }}
                />
                <div className="movie-card__overlay"></div>

                {/* Favorite Heart Button */}
                <button
                    onClick={() => { addfav(title) }}
                    className={`movie-card__favorite ${isFavorite ? 'movie-card__favorite--active' : ''}`}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    id="favorite-toggle-btn"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" className="heart-icon">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>

                {/* Rating Badge */}
                <div className="movie-card__badge">
                    <svg viewBox="0 0 24 24" width="12" height="12" className="badge-star">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>{rating || '8.5'}</span>
                </div>
            </div>

            {/* Card Info */}
            <div className="movie-card__info">
                <h3 className="movie-card__title">{title || 'The Dark Knight'}</h3>
                <div className="movie-card__rating">
                    <div className="movie-card__stars">
                        {renderStars(parseFloat(rating) || 8.5)}
                    </div>
                    <span className="movie-card__score">{rating || '8.5'}/10</span>
                </div>
            </div>
        </div>
    )
}

export default Card