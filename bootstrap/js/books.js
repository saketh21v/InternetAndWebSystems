var books =  [
	{
		"bookid": 1,
		"category": "ScienceFiction",
		"title": "Infinity Born",
		"author": "Douglas E. Richards",
		"type": "Paperback",
		"rating": "5",
		"price": "959",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/51FFXzSJ4CL._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 2,
		"category": "ScienceFiction",
		"title": "War of the Worlds",
		"author": " H. G. Wells",
		"type": "Paperback",
		"rating": "4.5",
		"price": "439",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/41HnF57sMtL._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 3,
		"category": "ScienceFiction",
		"title": "1984",
		"author": "George Orwell",
		"type": "Hardcover",
		"rating": "4.5",
		"price": "350",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/51Hfy8y-31L._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 4,
		"category": "ScienceFiction",
		"title": "The Time Machine",
		"author": "H.G. Wells",
		"type": "Hardcover",
		"rating": "4",
		"price": "450",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/515cQky+F3L._AC_US218_FMwebp_QL70_.jpg"
	},
	{
		"bookid": 5,
		"category": "Horror",
		"title": "Dark Matter",
		"author": "Blake Crouch",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/61SfBOL3d2L._AC_US218_FMwebp_QL70_.jpg"
	},
	{
		"bookid": 6,
		"category": "Horror",
		"title": "The Exorcist",
		"author": "William Peter Blatty",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/419iwJmIlbL._SL218_PIsitb-sticker-arrow-dp,TopRight,12,-18_SH30_OU31_AC_US218_.jpg"
	},
	{
		"bookid": 7,
		"category": "Horror",
		"title": "The Invisible Man",
		"author": "Herbert George Wells",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/41uTQUMFJ0L._AC_US218_.jpg"
	},
	{
		"bookid": 8,
		"category": "Horror",
		"title": "Twenty Days of Turin",
		"author": " Giorgio De Maria",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/51DpDBmOaXL._AC_US218_.jpg"
	},
	{
		"bookid": 9,
		"category": "Drama",
		"title": "World War Z",
		"author": "Max Brooks",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/51zvWwH2N2L._AC_US218_.jpg"
	},
	{
		"bookid": 10,
		"category": "Drama",
		"title": "The Passage",
		"author": "Justin Cronin",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/51mI-Fy6gaL._AC_US218_.jpg"
	},
	{
		"bookid": 11,
		"category": "Drama",
		"title": "Inherit the Wind",
		"author": "Jerome Lawrence",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-eu.ssl-images-amazon.com/images/I/51rXBcrQkNL._AC_US218_.jpg"
	},
	{
		"bookid": 12,
		"category": "Drama",
		"title": "Hamlet",
		"author": "William Shakespeare",
		"type": "Hardcover",
		"rating": "5",
		"price": "850",
		"image": "https://images-na.ssl-images-amazon.com/images/I/51yChJoybWL._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 13,
		"category": "Romance",
		"title": "The Summer House",
		"author": "Jenny Hale",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-na.ssl-images-amazon.com/images/I/51oZ+kzFHDL._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 14,
		"category": "Romance",
		"title": "The Duchess Deal",
		"author": "Tessa Dare",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-na.ssl-images-amazon.com/images/I/516ihb7uu7L._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 15,
		"category": "Romance",
		"title": "The Sacred Romance",
		"author": "Brent Curtis",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-na.ssl-images-amazon.com/images/I/41en-oyPoPL._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 16,
		"category": "Romance",
		"title": "Modern Romance",
		"author": "Aziz Ansari",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-na.ssl-images-amazon.com/images/I/41n-b5ABIfL._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 17,
		"category": "Autobiographies",
		"title": "Seriously...I'm Kidding",
		"author": "Ellen DeGeneres",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-na.ssl-images-amazon.com/images/I/51LmhxbkTrL._AC_US327_QL65_.jpg"
	},
	{
		"bookid": 18,
		"category": "Autobiographies",
		"title": "Beneath the Surface",
		"author": "Michael Phelps",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-na.ssl-images-amazon.com/images/I/51ANk45NEML._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 19,
		"category": "Autobiographies",
		"title": "Long Walk to Freedom",
		"author": "Nelson Mandela",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-na.ssl-images-amazon.com/images/I/51DVbVOCedL._AC_US327_FMwebp_QL65_.jpg"
	},
	{
		"bookid": 20,
		"category": "Autobiographies",
		"title": "Mein Kampf",
		"author": "Adolf Hitler",
		"type": "Paperback",
		"rating": "4",
		"price": "350",
		"image": "https://images-na.ssl-images-amazon.com/images/I/51V6yCqpANL._AC_US327_QL65_.jpg"
	}
]