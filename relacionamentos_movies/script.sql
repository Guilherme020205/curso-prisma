CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    ege INT,
    balance FLOAT DEFAULT 0.0,
    is_active BOOLEAN DEFAULT TRUE,
    crete_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 