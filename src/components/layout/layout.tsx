import React from "react"

export default function Layout({ children }) {
    return (
        <>
            <main>
                {children}
            </main>
            
            {/* <!--100 % privacy - first analytics-- > */}
            <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        </>
    )
}