CREATE DATABASE eOcean; 
USE eOcean; 


CREATE TABLE Users(
    uid INT NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL, 
    email VARCHAR(45) NOT NULL,
    credit_card_num VARCHAR(45) NOT NULL,
    billing_address VARCHAR(45) NOT NULL,
    shipping_address VARCHAR(45) NOT NULL,
    num_transactions INT NOT NULL,
    date_registered VARCHAR(45) NOT NULL,
    PRIMARY KEY(uid)
); 


CREATE TABLE Sellers(
    seller_id INT NOT NULL,
    number_of_items_sent INT NOT NULL,
    number_of_items_sold INT NOT NULL,
    FOREIGN KEY (seller_id) references uid(Users)
);


CREATE TABLE Orders(
    order_id INT NOT NULL,
    item_id INT NOT NULL,
    buyer_id INT NOT NULL, 
    seller_id INT NOT NULL,
    order_date VARCHAR(45) NOT NULL, 
    order_cost DECIMAL(10,2) NOT NULL,
    FOREIGN KEY(item_id) references ItemInfo(item_id),
    FOREIGN KEY(buyer_id) references Users(user_id),
    FOREIGN KEY(seller_id) references Users(user_id),
);


CREATE TABLE OrderStatus(

);


CREATE TABLE Products(

);



Sellers(seller_id, number_of_items_sent, number_of_items_sold)
FK: seller_id references Users(user_id)


Orders (order_id, item_id, buyer_id, seller_id, order_date, order_cost)
FK: item_id references ItemInfo(item_id)
FK: buyer_id references Users(user_id)
FK: seller_id references Users(user_id)


OrderStatus (order_id, tracking_id, paid_status, shipping_status, delivery_status, shipping_provider)
FK: order_id references Orders(order_id)


Products(product_id, product_name, product_category, product_description)
FK: product_category references ProductCategories(category_name)
FK: warehouse_id references Warehouses(warehouse_id)
