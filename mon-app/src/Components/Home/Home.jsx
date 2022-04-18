import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img
                        src="data:image/png;base64,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"
                        width="50px"
                        alt=""
                    />
            <h1>Hello ! </h1>
            <p>Welcome to Tuniflix.Tn ,here you can watch movies for free 👌</p>
            <h4>Have fun ! 😊</h4>
        </div>
    )
}

export default Home
