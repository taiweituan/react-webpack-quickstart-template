import React from 'react';

class HomePage extends React.Component {

    renderHero() {
        return (
            <div className="hero row">
                <div className="avatar">
                    <figure className="avatar__shape">
                        <img className="avatar__img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="ReactJS" />
                        <figcaption className="avatar__caption">
                            Hello!
                        </figcaption>
                    </figure>
                </div>
                <h1 className="hero__title">Hello React!</h1>
                <h2 className="hero__title">A Simple React, Redux, SCSS, and Webpack Starter</h2>
            </div>
        );
    }
    
    render() {
        return (
            <div>
                {this.renderHero()}
            </div>
        );
    }
}

export default HomePage;