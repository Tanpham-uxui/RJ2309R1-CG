import React from "react";

function AppCountJS() {
    const handleIncreament = () => {
        document.getElementById('number').innerText =
            Number(document.getElementById('number').innerText) + 1
    }
    return (
        <div>
            <h1 id="number">0</h1>
            <button onClick={handleIncreament}>Increament</button>
        </div>
    )
}

export default AppCountJS