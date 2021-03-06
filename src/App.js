import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navbar />
            <main>
                <div className="main-banner">
                    <h1>IT AND MANAGEMENT CONSULTING FOR LARGE ENTERPRISES</h1>
                    <p>Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Amet consectetur adipiscing elit ut aliquam purus sit amet. Eget sit amet tellus cras. Eget gravida cum sociis natoque.</p>
                    <button>SCHEDULE APPOINTMENT</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App