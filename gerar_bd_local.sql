## Executar essa query dentro do MySQL Workbench, para gerar o banco de dados com a tabela de estoque de produtos
CREATE DATABASE IF NOT EXISTS products DEFAULT CHARACTER SET utf8 ;

use products;
DROP TABLE IF EXISTS products.product;
CREATE TABLE product (
id smallint auto_increment primary key,
name varchar(100) not null,
price varchar(20) not null);

INSERT INTO product values
(null, 'Apple MacBook Pro', '12950.00'),
(null, 'Notebook Samsung Expert x20', '3499.99'),
(null, 'Notebook Dell Inspiron', '4949.89'),
(null, 'Notebook Acer Aspire 5', '3894.00'),
(null, 'Notebook HP 250 G7', '3324.05');
