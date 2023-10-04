import React from 'react'

export const App = () => (
    <>
        <h1>Hello, world!
            {process.env.NODE_ENV}
        </h1>
    </>
)