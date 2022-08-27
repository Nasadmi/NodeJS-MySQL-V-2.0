CREATE DATABASE contact;

USE contact;

CREATE TABLE list_contact
(id int primary key auto_increment,
name varchar(200) not null,
age varchar(100) not null,
email varchar(500) not null,
number varchar(500) not null);