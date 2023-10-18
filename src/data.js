const data = [
    {
        id: 1,
        name: "Agra",
        info: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third most populous city in India, ",
        image: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFqfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        price:"35,550",
    },
    {
        id: 2,
        name: "Goa",
        info: "Goa is visited by large numbers of international and domestic tourists each year because of its white-sand beaches, active nightlife, places of worship, and World Heritage-listed architecture. It also has rich flora and fauna because it lies very close to the North Western Ghats rainforests, one of the rare biodiversity hotspots of the world. ",
        image: "https://images.unsplash.com/photo-1567005753256-c0529035b300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        price:"55,550",
    },
    {
        id: 3,
        name: "Gwalior",
        info: "Gwalior was the winter capital of the state of Madhya Bharat which later became a part of the larger state of Madhya Pradesh. Prior to Indian independence on 15 August 1947, Gwalior remained a princely state of the British Raj with the Scindia as the local rulers. High rocky hills surround the city from all sides, on the north it just forms the border of the Ganga- Yamuna Drainage Basin. The city however is situated in the valley between the hills. Gwalior's metropolitan area includes Gwalior city centre, Morar Cantonment,[2] Lashkar Gwalior (Lashkar Subcity), Maharaj Bada, Phool Bagh, and Thatipur.",
        image: "https://images.unsplash.com/photo-1611640844364-5d6e046b2359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3dhbGlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price:"11,112",
    },
    {
        id: 4,
        name: "Mandu",
        info: "Mandu or Mandavgad is an ancient city in the present-day Mandav area of the Dhar district. It is located in the Malwa and Nimar region of western Madhya Pradesh, India, at 35 km from Dhar city. In the 11th century, Mandu was the sub division of the Tarangagadh or Taranga kingdom.[1] This fortress town on a rocky outcrop about 100 km (62 mi) from Indore is celebrated for its architecture. ",
        image: "https://images.unsplash.com/photo-1678617898187-1c92a99404b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmR1fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        price:"550",
    },
    {
        id: 5,
        name: "Maheshwar",
        info: "Maheshwar is a town, near Khargone city in Khargone district of Madhya Pradesh state, in central India. It is located on State Highway-38 (Khargone city-Barwaha- Bandheri Highway),13.5 km east of National Highway 3 (Agra-Mumbai highway) and 91 km from Indore, the commercial capital of the state. The Town lies on the north bank of the Narmada River. It was the kingdom of Chaktavartin Samrat Sahastraarjun, Kartavirya Arjuna a Heheya king. Lately, after many years, it was the capital of the Malwa during the Maratha Holkar reign till 6 January 1818, when the capital was shifted to Indore by Malhar Rao Holkar",
        image: "https://images.unsplash.com/photo-1667394683486-ae01afe7a8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFoZXNod2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        price:"4,502",
    },
    {
        id: 6,
        name: "Jaipur",
        info: "Jaipur is a popular tourist destination in India and forms a part of the west Golden Triangle tourist circuit along with Delhi and Agra (240 km, 149 mi).[14] It also serves as a gateway to other tourist destinations in Rajasthan such as Jodhpur, Jaisalmer, Bikaner, Udaipur, Kota and Mount Abu.",
        image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        price:"45,850",
    },
    {
        id: 7,
        name: "Jodhpur",
        info: "The old city circles the Mehrangarh Fort and is bounded by a wall with several gates.10 The city has expanded greatly outside the wall, though over the past several decades. Jodhpur lies near the geographic centre of the Rajasthan state, which makes it a convenient base for travel in a region much frequented by tourists.1 The city featured in The New York Times's 52 Places to Go in 2020",
        image: "https://images.unsplash.com/photo-1590090750575-17b2cd4ceb85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price:"45,887",
    },
    {
        id: 8,
        name: "Raipur",
        info: "Raipur is also regarded as one of the best cities to do business. It is abundantly rich in mineral resources, and is among the biggest producers of steel and iron in the country. There are about 200 steel rolling mills, 195 sponge iron plants, at least 6 steel plants, 60 plywood factories, 35 ferro-alloy plants and 500 agro-industries in the city. In addition, Raipur also has over 800 rice milling plants",
        image: "https://images.unsplash.com/photo-1648471745734-84bbcf1fac86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJhaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        price:"50,000",
    },
    {
        id: 9,
        name: "Manali",
        info: "Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.[2] It is situated in the northern end of the Kullu Valley, formed by the Beas River. The town is located in the Kullu district, approximately 270 kilometres (170 mi) north of the state capital of Shimla and 544 kilometres (338 mi) northeast of the national capital of New Delhi. With a population of 8,096 people recorded in the 2011 Indian census Manali is the beginning of an ancient trade route through Lahaul (H.P) and Ladakh, over the Karakoram Pass and onto Yarkand and Hotan in the Tarim Basin of China. Manali is a popular tourist destination in India and serves as the gateway to the Lahaul and Spiti district as well as the city of Leh in Ladakh.[3] ",
        image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuYWxpfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
        price:"50,001",
    },
    
    
];

export default data;