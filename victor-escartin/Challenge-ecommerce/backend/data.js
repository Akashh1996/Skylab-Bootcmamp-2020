import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Victor',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Gilberto',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
   
      name: "MEN'S BETTER THAN NAKED&trade",
      category: 'Shirts',
      image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
      price: 10,
      countInStock: 10,
      brand: 'The North Face',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
 
      name: "WOMEN'S BETTER THAN NAKED&trade",
      category: 'Shirts',
      image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
      price: 15,
      countInStock: 20,
      brand: 'The North Face',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
  
      name: "WOMEN'S SINGLE-TRACK SHOE",
      category: 'Shirts',
      image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
      price: 25,
      countInStock: 0,
      brand: 'The North Face',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
  
      name: "Enduro Boa&reg; Hydration Pack",
      category: 'Pants',
      image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
      price: 25,
      countInStock: 15,
      brand: 'Salomon',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {

      name: "MEN'S BETTER THAN NAKED v2",
      category: 'Pants',
      image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
      price: 28,
      countInStock: 5,
      brand: 'The North Face',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
 
      name: "WOMEN'S BETTER THAN NAKED v2",
      category: 'Pants',
      image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
      price: 38,
      countInStock: 12,
      brand: 'The North Face',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
   
      name: "WOMEN'S SINGLE-TRACK SHOE v2",
      category: 'Pants',
      image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
      price: 66,
      countInStock: 12,
      brand: 'Salomon',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
 
      name: "Enduro Boa&reg; Hydration Pack v2",
      category: 'Pants',
      image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
      price: 9,
      countInStock: 12,
      brand: 'Salomon',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    }
  ],
};
export default data;