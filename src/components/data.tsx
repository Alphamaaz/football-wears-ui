 interface ProductDetail {
   id: number;
   image: string;
   title: string;
   price: string;
   originalPrice: string;
   category: string;
   descripion: string;
 }

  interface Product {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  category: string;
  id: number;
}
 export const products:Product[] = [
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_f4222e67-4086-4501-a7ed-1bfc9df85211.png?v=1734893718&width=940",
     title: "Real Madrid Home Ronaldo 7 2016/17 Shirt",
     price: "2,350.00",
     originalPrice: "2,600.00",
     category: "playerVersion",
     id: 1,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_56dc2ccf-7206-427c-8b98-7b92527ac2a2.jpg?v=1734894578",
     title: "Barcelona Home Messi 10 2019/20 Shirt",
     price: "2,350.00",
     originalPrice: "2,600.00",
     category: "playerVersion",
     id: 2,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/01671476.webp?v=1735587067&width=1346",
     title: "Juventus Home Dybala 10 2020/21 Shirt",
     price: "2,350.00",
     originalPrice: "2,600.00",
     category: "playerVersion",
     id: 3,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_56dc2ccf-7206-427c-8b98-7b92527ac2a2.jpg?v=1734894578",
     title: "AC MILAN HOME SHIRT (PLAYER VERSION)",
     price: "2,350.00",
     originalPrice: "2,600.00",
     category: "playerVersion",
     id: 4,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_6bbdb0a5-a264-4ad2-91d0-0a0e9b100ce4.webp?v=1735451465&width=940",
     title: "Manchester United Home Bruno 18 2020/21 Shirt",
     price: "2,350.00",
     originalPrice: "2,600.00",
     category: "playerVersion",
     id: 5,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_da89620f-875d-4b67-84d6-e92f3044cfb9.jpg?v=1739433957&width=1346",
     title: "AC Milan 2006/07 Away Jersey",
     price: "2,750.00",
     originalPrice: "4,999.00",
     category: "retroshirts",
     id: 6,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/noorsports_20241006_194656_0000.png?v=1731506990&width=1346",
     title: "Barça 2015 Final Shirt",
     price: "2,450.00",
     originalPrice: "3,500.00",
     category: "retroshirts",
     id: 7,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/A.C.-Milan-06-07-Home.webp?v=1749124674&width=1346",
     title: "AC Milan Home 05/06",
     price: "2,750.00",
     originalPrice: "6,000.00",
     category: "retroshirts",
     id: 8,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/camiseta-retro-local-verde-blanca-mangas-largas-sporting-lisbon-2001-2002-reebok-1-54ca612d554f3c1af017219589478356-480-0.jpg?v=1750836493&width=1346",
     title: "Ronaldo 28 Sporting CP Home (Full Sleeve)",
     price: "2,550.00",
     originalPrice: "2,750.00",
     category: "retroshirts",
     id: 9,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_57cbbdb1-2d19-4226-b518-dc74c5ef3343.png?v=1748076683&width=1346",
     title: "Ronaldo 7 Manchester United Black Shirt 2007/08",
     price: "2,250.00",
     originalPrice: "3,450.00",
     category: "retroshirts",
     id: 10,
   },

   {
     image:
       "https://alnoorsports.com/cdn/shop/files/Real-Madrid-Home-Jersey-25-26-Price-in-BD-scaled.webp?v=1752146932&width=1346",
     title: "Real Madrid Home shirt (PLAYER VERSION)",
     price: "2,350.00",
     originalPrice: "2,500.00",
     category: "clubshirts",
     id: 11,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/6f676a487a41e47c.jpg?v=1751378786&width=1346",
     title: "Manchester City Away 2025",
     price: "1,850.00",
     originalPrice: "2,500.00",
     category: "clubshirts",
     id: 12,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_584a3227-1f9c-4f58-b1f1-a42e24593f33.webp?v=1750402966",
     title: "Ronaldo 7 Portugal Away Shirt",
     price: "2,050.00",
     originalPrice: "3,500.00",
     category: "clubshirts",
     id: 13,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/IMG-2027.png?v=1750862578&width=1346",
     title: "Inter‑Miami Away Messi 10 Shirt",
     price: "2,050.00",
     originalPrice: "3,999.00",
     category: "clubshirts",
     id: 14,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/49f35c5c_700x_dafa9fbd-9d7c-4eeb-886a-80ddce2c88b3.webp?v=1748629936&width=1346",
     title: "Chelsea Away Shirt 25/26",
     price: "1,600.00",
     originalPrice: "2,999.00",
     category: "clubshirts",
     id: 15,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_584a3227-1f9c-4f58-b1f1-a42e24593f33.webp?v=1750402966https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_584a3227-1f9c-4f58-b1f1-a42e24593f33.webp?v=1750402966",
     title: "Ronaldo 7 Portugal Home Shirt",
     price: "2050.00",
     originalPrice: "3500.00",
     category: "nationalshirts",
     id: 16,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/6b7cb2_c78cd6c99bcb4befad50dd85144115bd_mv2.jpg?v=1748546370&width=1346",
     title: "Ronaldo 7 Portugal Away Shirt",
     price: "2250.00",
     originalPrice: "2950.00",
     category: "nationalshirts",
     id: 17,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/i9Jb24pw3zFg6uC.jpg?v=1750592185&width=1346",
     title: "Germany Home Shirt",
     price: "1850.00",
     originalPrice: "2500.00",
     category: "nationalshirts",
     id: 18,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/noorsports_20240704_154202_0000.png?v=1720091795&width=940",
     title: "Kroos 8 Germany Home 2024",
     price: "1950.00",
     originalPrice: "3000.00",
     category: "nationalshirts",
     id: 19,
   },
   {
     image:
       "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_78c97fd8-a072-4287-9cdc-279d6d5c2855.png?v=1715518805&width=940",
     title: "Bellingham 5 England Home Euro Cup Shirt",
     price: "2050.00",
     originalPrice: "3450.00",
     category: "nationalshirts",
     id: 20,
   },
 ];

export const productDetails: Record<number, ProductDetail> = {
  1: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_f4222e67-4086-4501-a7ed-1bfc9df85211.png?v=1734893718&width=940",
    title: "Real Madrid Home Ronaldo 7 2016/17 Shirt",
    price: "2,350.00",
    originalPrice: "2,600.00",
    category: "playerVersion",
    id: 1,
    descripion: "",
  },
  2: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_56dc2ccf-7206-427c-8b98-7b92527ac2a2.jpg?v=1734894578",
    title: "Barcelona Home Messi 10 2019/20 Shirt",
    price: "2,350.00",
    originalPrice: "2,600.00",
    category: "playerVersion",
    id: 2,
    descripion: "",
  },
  3: {
    image:
      "https://alnoorsports.com/cdn/shop/files/01671476.webp?v=1735587067&width=1346",
    title: "Juventus Home Dybala 10 2020/21 Shirt",
    price: "2,350.00",
    originalPrice: "2,600.00",
    category: "playerVersion",
    id: 3,
    descripion: "",
  },
  4: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_56dc2ccf-7206-427c-8b98-7b92527ac2a2.jpg?v=1734894578",
    title: "AC MILAN HOME SHIRT (PLAYER VERSION)",
    price: "2,350.00",
    originalPrice: "2,600.00",
    category: "playerVersion",
    id: 4,
    descripion: "",
  },
  5: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_6bbdb0a5-a264-4ad2-91d0-0a0e9b100ce4.webp?v=1735451465&width=940",
    title: "Manchester United Home Bruno 18 2020/21 Shirt",
    price: "2,350.00",
    originalPrice: "2,600.00",
    category: "playerVersion",
    id: 5,
    descripion: "",
  },
  6: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_da89620f-875d-4b67-84d6-e92f3044cfb9.jpg?v=1739433957&width=1346",
    title: "AC Milan 2006/07 Away Jersey",
    price: "2,750.00",
    originalPrice: "4,999.00",
    category: "retroshirts",
    id: 6,
    descripion: "",
  },
  7: {
    image:
      "https://alnoorsports.com/cdn/shop/files/noorsports_20241006_194656_0000.png?v=1731506990&width=1346",
    title: "Barça 2015 Final Shirt",
    price: "2,450.00",
    originalPrice: "3,500.00",
    category: "retroshirts",
    id: 7,
    descripion: "",
  },
  8: {
    image:
      "https://alnoorsports.com/cdn/shop/files/A.C.-Milan-06-07-Home.webp?v=1749124674&width=1346",
    title: "AC Milan Home 05/06",
    price: "2,750.00",
    originalPrice: "6,000.00",
    category: "retroshirts",
    id: 8,
    descripion: "",
  },
  9: {
    image:
      "https://alnoorsports.com/cdn/shop/files/camiseta-retro-local-verde-blanca-mangas-largas-sporting-lisbon-2001-2002-reebok-1-54ca612d554f3c1af017219589478356-480-0.jpg?v=1750836493&width=1346",
    title: "Ronaldo 28 Sporting CP Home (Full Sleeve)",
    price: "2,550.00",
    originalPrice: "2,750.00",
    category: "retroshirts",
    id: 9,
    descripion: "",
  },
  10: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_57cbbdb1-2d19-4226-b518-dc74c5ef3343.png?v=1748076683&width=1346",
    title: "Ronaldo 7 Manchester United Black Shirt 2007/08",
    price: "2,250.00",
    originalPrice: "3,450.00",
    category: "retroshirts",
    id: 10,
    descripion: "",
  },

  11: {
    image:
      "https://alnoorsports.com/cdn/shop/files/Real-Madrid-Home-Jersey-25-26-Price-in-BD-scaled.webp?v=1752146932&width=1346",
    title: "Real Madrid Home shirt (PLAYER VERSION)",
    price: "2,350.00",
    originalPrice: "2,500.00",
    category: "clubshirts",
    id: 11,
    descripion: "",
  },
  12: {
    image:
      "https://alnoorsports.com/cdn/shop/files/6f676a487a41e47c.jpg?v=1751378786&width=1346",
    title: "Manchester City Away 2025",
    price: "1,850.00",
    originalPrice: "2,500.00",
    category: "clubshirts",
    id: 12,
    descripion: "",
  },
  13: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_584a3227-1f9c-4f58-b1f1-a42e24593f33.webp?v=1750402966",
    title: "Ronaldo 7 Portugal Away Shirt",
    price: "2,050.00",
    originalPrice: "3,500.00",
    category: "clubshirts",
    id: 13,
    descripion: "",
  },
  14: {
    image:
      "https://alnoorsports.com/cdn/shop/files/IMG-2027.png?v=1750862578&width=1346",
    title: "Inter‑Miami Away Messi 10 Shirt",
    price: "2,050.00",
    originalPrice: "3,999.00",
    category: "clubshirts",
    id: 14,
    descripion: "",
  },
  15: {
    image:
      "https://alnoorsports.com/cdn/shop/files/49f35c5c_700x_dafa9fbd-9d7c-4eeb-886a-80ddce2c88b3.webp?v=1748629936&width=1346",
    title: "Chelsea Away Shirt 25/26",
    price: "1,600.00",
    originalPrice: "2,999.00",
    category: "clubshirts",
    id: 15,
    descripion: "",
  },
  16: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_584a3227-1f9c-4f58-b1f1-a42e24593f33.webp?v=1750402966https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_584a3227-1f9c-4f58-b1f1-a42e24593f33.webp?v=1750402966",
    title: "Ronaldo 7 Portugal Home Shirt",
    price: "2050.00",
    originalPrice: "3500.00",
    category: "nationalshirts",
    id: 16,
    descripion: "",
  },
  17: {
    image:
      "https://alnoorsports.com/cdn/shop/files/6b7cb2_c78cd6c99bcb4befad50dd85144115bd_mv2.jpg?v=1748546370&width=1346",
    title: "Ronaldo 7 Portugal Away Shirt",
    price: "2250.00",
    originalPrice: "2950.00",
    category: "nationalshirts",
    id: 17,
    descripion: "",
  },
  18: {
    image:
      "https://alnoorsports.com/cdn/shop/files/i9Jb24pw3zFg6uC.jpg?v=1750592185&width=1346",
    title: "Germany Home Shirt",
    price: "1850.00",
    originalPrice: "2500.00",
    category: "nationalshirts",
    id: 18,
    descripion: "",
  },
  19: {
    image:
      "https://alnoorsports.com/cdn/shop/files/noorsports_20240704_154202_0000.png?v=1720091795&width=940",
    title: "Kroos 8 Germany Home 2024",
    price: "1950.00",
    originalPrice: "3000.00",
    category: "nationalshirts",
    id: 19,
    descripion: "",
  },
  20: {
    image:
      "https://alnoorsports.com/cdn/shop/files/rn-image_picker_lib_temp_78c97fd8-a072-4287-9cdc-279d6d5c2855.png?v=1715518805&width=940",
    title: "Bellingham 5 England Home Euro Cup Shirt",
    price: "2050.00",
    originalPrice: "3450.00",
    category: "nationalshirts",
    id: 20,
    descripion: "",
  },
};
