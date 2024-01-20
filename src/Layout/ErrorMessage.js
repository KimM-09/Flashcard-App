import React from "react";

const ErrorMessage = ({ error, children }) => (
    <main className="container">
        <p style={{color: "red" }}>
            Error: {error.message}
        </p>
        {children}
    </main>
);

export default ErrorMessage;