CREATE DATABASE eOcean; 
USE eOcean; 

CREATE TABLE Users(
    user_id INT NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL, 
    email VARCHAR(45) NOT NULL,
    credit_card_num VARCHAR(45) NOT NULL,
    billing_address VARCHAR(45) NOT NULL,
    shipping_address VARCHAR(45) NOT NULL,
    num_transactions INT NOT NULL,
    date_registered VARCHAR(45) NOT NULL,
    PRIMARY KEY(user_id)
); 

CREATE TABLE Sellers(
    seller_id INT NOT NULL,
    number_of_items_sent INT NOT NULL,
    number_of_items_sold INT NOT NULL,
    FOREIGN KEY (seller_id) references Users(user_id)
);

CREATE TABLE ProductCategories (
	category_name VARCHAR(20) NOT NULL,
    PRIMARY KEY(category_name)
);


CREATE TABLE Products(
    product_id INT NOT NULL, 
    product_name VARCHAR(45) NOT NULL, 
    product_category VARCHAR(45) NOT NULL, 
    product_description VARCHAR(200) NOT NULL,
    PRIMARY KEY (product_id), 
    FOREIGN KEY(product_category) references ProductCategories(category_name)
);

CREATE TABLE Warehouses (
	warehouse_id INTEGER NOT NULL,
    city VARCHAR(15) NOT NULL,
    state VARCHAR (15) NOT NULL,
    country VARCHAR (15) NOT NULL,
    PRIMARY KEY(warehouse_id)
);

CREATE TABLE ItemInfo (
	item_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    item_condition VARCHAR(10) NOT NULL,
    warehouse_id INTEGER NOT NULL,
    item_price FLOAT NOT NULL,
    shipping_price FLOAT NOT NULL,
    PRIMARY KEY(item_id, product_id),
    FOREIGN KEY(product_id) REFERENCES Products(product_id),
    FOREIGN KEY(warehouse_id) REFERENCES Warehouses(warehouse_id)
);

CREATE TABLE Orders(
    order_id INT NOT NULL,
    item_id INT NOT NULL,
    buyer_id INT NOT NULL, 
    seller_id INT NOT NULL,
    order_date VARCHAR(45) NOT NULL, 
    order_cost DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(order_id, item__id),
    FOREIGN KEY(item_id) references ItemInfo(item_id),
    FOREIGN KEY(buyer_id) references Users(user_id),
    FOREIGN KEY(seller_id) references Users(user_id),
);

CREATE TABLE OrderStatus(
    order_id INT NOT NULL, 
    tracking_id INT NOT NULL,
    paid_status BOOLEAN NOT NULL,
    shipping_status VARCHAR(45) NOT NULL,
    delivery_status VARCHAR(45) NOT NULL,
    shipping_provider VARCHAR(45) NOT NULL,
    PRIMARY KEY(order_id),
    FOREIGN KEY(order_id) references Orders(order_id)
);

CREATE TABLE ProductListings (
	product_id INTEGER NOT NULL,
    product_description VARCHAR(50) NOT NULL,
    image_link VARCHAR(50) NOT NULL,
    uploader_id INTEGER NOT NULL,
    upload_date DATE NOT NULL,
    location INTEGER NOT NULL,
    PRIMARY KEY(product_id),
    FOREIGN KEY(uploader_id) REFERENCES Users(user_id),
    FOREIGN KEY(location) REFERENCES Warehouses(warehouse_id)
);

CREATE TABLE ItemSeller (
	item_id INTEGER NOT NULL,
    seller_id INTEGER NOT NULL,
    PRIMARY KEY(item_id),
    FOREIGN KEY(item_id) REFERENCES ItemInfo(item_id),
    FOREIGN KEY(seller_id) REFERENCES Users(user_id)
);