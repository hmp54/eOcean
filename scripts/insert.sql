INSERT INTO Warehouses (city, the_state, country)
VALUES
	("Washington", "DC", "USA"),
    ("New York City", "NY", "USA"),
    ("Philadelphia", "PA", "USA")
;

INSERT INTO Users(first_name, last_name, email, uPassword, billing_address, date_registered)
VALUES
    ("Jane", 'Doe', "jane.doe@gmail.com", "JaneDoe22", "809 Oberbrunner Stravenue", "9/25/2022"),
    ("John", "Doe", "john.doe@gmail.com", "JohnDoe22", "Robel Crescent, North Carolina, United States", "8/20/2022")
;

INSERT INTO Sellers(seller_id, number_of_items_sent, number_of_items_sold)
VALUES
    (1, 20, 20),
    (2, 0, 0)
;

INSERT INTO ProductCategories (category_name)
VALUES
	("Shoes"),
    ("Jackets"),
    ("Pants"),
    ("Shirts")
;


INSERT INTO Products(product_name, product_category, product_description)
VALUES
    ("Nike Air Force 1", "Shoes", "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology. The shoe is offered in low, mid and high-top . The shoes are sold in 5 different styles, low, mid, superlow, high and super high. The mid comes with a connected strap."),
    ("Supreme Jackets", "Jackets", "Founded by James Jebbia, Supreme is known for its connections to the skating community and its snarky take on popular culture. Supreme jackets typically have a casual, athletic design in keeping with the brand's sporty roots. ")
;

INSERT INTO ItemListings(uploader_id, product_id, item_image, upload_date, item_price, shipping_price, item_condition)
VALUES
    (1, 1, null, STR_TO_DATE('01/05/2010', '%m/%d/%Y'), 5.99, 1.99, "gently used"),
    (2, 2, null, STR_TO_DATE('02/15/2022', '%m/%d/%Y'), 11.99, 1.99, "like new"); 

INSERT INTO ItemInfo(product_id, warehouse_id)
VALUES
    (1, 1),
    (2, 2)
;

INSERT INTO Orders(order_id, item_id, buyer_id, seller_id, order_date, order_cost)
VALUES
    (1, 1, 1, 2, STR_TO_DATE('02/15/2022', '%m/%d/%Y'), 29.99)
    (2, 2, 2, 2, STR_TO_DATE('02/15/2022', '%m/%d/%Y'), 29.99)
;

INSERT INTO OrderStatus(order_id, tracking_id, paid_status, shipping_status, shipping_provider)
VALUES
    (1, 2345678, true, "shipped", "FedEx")
;

INSERT INTO ItemSeller(item_id, seller_id)
VALUES
    (1, 1)
;