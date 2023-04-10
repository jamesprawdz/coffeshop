puts "Seeding products..."
Product.create(name: "Black", description: "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG", price: 3, stock: 200)
Product.create(name: "Latte", description: "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.", image: "https://source.unsplash.com/EIEpnZQI0cc.jpg", price: 6, stock: 100)
Product.create(name: "Cappuccino", description: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.", image: "https://source.unsplash.com/GJogrGZxKJE.jpg", price: 5, stock: 100)
Product.create(name: "Americano", description: "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.", image:"https://source.unsplash.com/SJPdsf2xO7U.jpg", price: 5, stock: 100)
Product.create(name: "Iced Coffee", 
    description: "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg", 
    price: 4, 
    stock: 100)

Product.create(name: "Iced Espresso", 
    description: "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.", 
    image: "https://source.unsplash.com/vzU4qT_jhEQ.jpg", 
    price: 5, 
    stock: 100)

Product.create(name: "Cold Brew", 
    description: "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream.", 
    image: "https://source.unsplash.com/yN7prWLW7xg.jpg", 
    price: 6, 
    stock: 100)

Product.create(name: "Frappuccino", 
    description: "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup.", 
    image: "https://media.istockphoto.com/id/953747716/photo/cold-frappe-coffee.jpg?s=612x612&w=0&k=20&c=dzcMS85tSRA0FncIli9Gx2nSAtVva2tuWYiPV3Q1WqE=", 
    price: 7, 
    stock: 100)

Product.create(name: "Nitro", 
    description: "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It’s poured via a nitro tap, too.)", 
    image: "https://source.unsplash.com/ZBEroxt_SLQ.jpg", 
    price: 8, 
    stock: 10)

Product.create(name: "Mazagran", 
    description: "Mazagran coffee is a cross between iced coffee, tea and your favorite rum drink. It typically consists of espresso, lemon, sugar and (sometimes) rum.", 
    image: "https://www.tasteatlas.com/images/ingredients/8a77811ed1514f61801a7a08a658d798.jpg", 
    price: 9, 
    stock: 100)