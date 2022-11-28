CREATE DATABASE eOcean; 
USE eOcean; 

CREATE TABLE Warehouses (
	warehouse_id INTEGER NOT NULL AUTO_INCREMENT,
    city VARCHAR(15) NOT NULL,
    the_state VARCHAR (15) NOT NULL,
    country VARCHAR (15) NOT NULL,
    PRIMARY KEY(warehouse_id)
);

CREATE TABLE Users(
    user_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL, 
    email VARCHAR(45) NOT NULL,
    uPassword VARCHAR(45) NOT NULL,
    billing_address VARCHAR(45) NOT NULL,
    date_registered VARCHAR(45) NOT NULL,
    PRIMARY KEY(user_id)
); 

CREATE TABLE Sellers(
    seller_id INT NOT NULL,
    number_of_items_sent INT NOT NULL,
    number_of_items_sold INT NOT NULL,
    FOREIGN KEY (seller_id) references Users(user_id) ON DELETE CASCADE
);

CREATE TABLE ProductCategories (
	category_name VARCHAR(20) NOT NULL,
    PRIMARY KEY(category_name)
);


CREATE TABLE Products(
    product_id INT NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(45) NOT NULL, 
    product_category VARCHAR(45) NOT NULL, 
    product_description VARCHAR(400) NOT NULL,
    PRIMARY KEY (product_id), 
    FOREIGN KEY(product_category) references ProductCategories(category_name)
);

CREATE TABLE ItemListings (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL, 
    uploader_id INTEGER NOT NULL,
    item_image blob,
    upload_date VARCHAR(10) NOT NULL,
    item_price FLOAT(7,2) NOT NULL,
    shipping_price FLOAT(7,2) NOT NULL,
    item_condition VARCHAR(20) NOT NULL,
    PRIMARY KEY(item_id),
    FOREIGN KEY(uploader_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY(product_id) REFERENCES Products(product_id) ON DELETE CASCADE
);

CREATE TABLE ItemInfo (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_id INTEGER NOT NULL,
    warehouse_id INTEGER NOT NULL,
    PRIMARY KEY(item_id, product_id),
    FOREIGN KEY(product_id) REFERENCES Products(product_id)  ON DELETE CASCADE,
    FOREIGN KEY(warehouse_id) REFERENCES Warehouses(warehouse_id)  ON DELETE CASCADE
);

CREATE TABLE Orders(
    order_id INT NOT NULL AUTO_INCREMENT,
    item_id INT NOT NULL,
    buyer_id INT NOT NULL, 
    seller_id INT NOT NULL,
    order_date VARCHAR(45) NOT NULL, 
    order_cost DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(order_id, item_id),
    FOREIGN KEY(item_id) references ItemInfo(item_id),
    FOREIGN KEY(buyer_id) references Users(user_id) ON DELETE CASCADE, 
    FOREIGN KEY(seller_id) references Users(user_id)  ON DELETE CASCADE
);

CREATE TABLE OrderStatus(
    order_id INT NOT NULL AUTO_INCREMENT, 
    tracking_id INT NOT NULL,
    paid_status VARCHAR(10) NOT NULL,
    shipping_status VARCHAR(45) NOT NULL,
    shipping_provider VARCHAR(45) NOT NULL,
    PRIMARY KEY(order_id),
    FOREIGN KEY(order_id) references Orders(order_id)  ON DELETE CASCADE
);

CREATE TABLE ItemSeller (
	item_id INTEGER NOT NULL,
    seller_id INTEGER NOT NULL,
    PRIMARY KEY(item_id),
    FOREIGN KEY(item_id) REFERENCES ItemInfo(item_id)  ON DELETE CASCADE,
    FOREIGN KEY(seller_id) REFERENCES Users(user_id) ON DELETE CASCADE
);