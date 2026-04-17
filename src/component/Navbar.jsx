import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ search, setSearch, onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (onSearch) onSearch(search)
    }

    return (
        <>
            {/* Top Navbar */}
            <nav className="navbar" id="top-navbar">
                <div className="navbar__brand">
                    <svg className="navbar__logo" viewBox="0 0 24 24" width="28" height="28">
                        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                    </svg>
                    <span className="navbar__title">MovieBox</span>
                </div>

                <form className="navbar__search" onSubmit={handleSubmit} id="search-form">
                    <div className="navbar__search-wrapper">
                        <svg className="navbar__search-icon" viewBox="0 0 24 24" width="18" height="18">
                            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                        <input
                            type="text"
                            className="navbar__search-input"
                            placeholder="Search movies..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            id="search-input"
                        />
                        {search && (
                            <button
                                type="button"
                                className="navbar__search-clear"
                                onClick={() => setSearch('')}
                                aria-label="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </form>
            </nav>

            {/* Bottom Navigation */}
            <nav className="bottom-nav" id="bottom-navbar">
                <NavLink
                    to="/"
                    className={({ isActive }) => `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`}
                    id="nav-home"
                >
                    <svg className="bottom-nav__icon" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                    <span className="bottom-nav__label">Home</span>
                </NavLink>

                <NavLink
                    to="/favourites"
                    className={({ isActive }) => `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`}
                    id="nav-favourites"
                >
                    <svg className="bottom-nav__icon" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="bottom-nav__label">Favourites</span>
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar
