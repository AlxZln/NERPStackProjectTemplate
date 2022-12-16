
drop table users;

create table users(
id SERIAL PRIMARY KEY,
name VARCHAR(255),
lastname VARCHAR(255),
age INTEGER
);
