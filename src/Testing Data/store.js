import { createStore } from 'redux';

const reducer = (state = {

  categories: [
    { id: 1, title: 'Electronics', description: 'testing', img: 'img' },
    { id: 2, title: 'Mobiles & Accessories', description: 'testing', img: 'img' },
    { id: 3, title: "Men's Fashion", description: 'testing', img: "img" },
    { id: 4, title: "Women's Fashion", description: 'testing', img: "img" },
    { id: 5, title: "Sports", description: 'testing', img: "img" },
    { id: 6, title: "Supermarket", description: 'testing', img: "img" },
  ],
  products: [
    { id: 1, title: 'Canon DSLR Camera [EOS 90D] with Built-in Wi-Fi, Bluetooth', description: 'testDescription', categoryId: 1, price: 1200, brand: 'Canon', img: '/img', rating: 4.5, },
    { id: 2, title: 'Canon DSLR Camera [EOS 90D] with Built-in Wi-Fi, Bluetooth', description: 'testDescription', categoryId: 1, price: 1200, brand: 'Canon', img: '/img', rating: 4.5, },
    { id: 3, title: 'Canon DSLR Camera [EOS 90D] with Built-in Wi-Fi, Bluetooth', description: 'testDescription', categoryId: 1, price: 1200, brand: 'Canon', img: '/img', rating: 4.5, },
    { id: 4, title: 'Canon DSLR Camera [EOS 90D] with Built-in Wi-Fi, Bluetooth', description: 'testDescription', categoryId: 1, price: 1200, brand: 'Canon', img: '/img', rating: 4.5, },
    { id: 5, title: 'Samsung Galaxy A32 Dual SIM - 6.4 Inches, 6GB RAM, 128GB', description: 'testDescription', categoryId: 2, price: 1200, brand: 'Samsung', img: '/img', rating: 4.5, },
    { id: 6, title: 'Samsung Galaxy A32 Dual SIM - 6.4 Inches, 6GB RAM, 128GB', description: 'testDescription', categoryId: 2, price: 1200, brand: 'Samsung', img: '/img', rating: 4.5, },
    { id: 7, title: 'Samsung Galaxy A32 Dual SIM - 6.4 Inches, 6GB RAM, 128GB', description: 'testDescription', categoryId: 2, price: 1200, brand: 'Samsung', img: '/img', rating: 4.5, },
    { id: 8, title: 'Samsung Galaxy A32 Dual SIM - 6.4 Inches, 6GB RAM, 128GB', description: 'testDescription', categoryId: 2, price: 1200, brand: 'Samsung', img: '/img', rating: 4.5, },
    { id: 9, title: 'Bella Cotton M500 Men Sweat Pants, Grey', description: 'testDescription', categoryId: 3, price: 1200, brand: 'Cotton', img: '/img', rating: 4.5, },
    { id: 10, title: 'Bella Cotton M500 Men Sweat Pants, Grey', description: 'testDescription', categoryId: 3, price: 1200, brand: 'Cotton', img: '/img', rating: 4.5, },
    { id: 11, title: 'Bella Cotton M500 Men Sweat Pants, Grey', description: 'testDescription', categoryId: 3, price: 1200, brand: 'Cotton', img: '/img', rating: 4.5, },
    { id: 12, title: 'Bella Cotton M500 Men Sweat Pants, Grey', description: 'testDescription', categoryId: 3, price: 1200, brand: 'Cotton', img: '/img', rating: 4.5, },
  ],
  users: [
    { id: 1, firstName: "Karimzz", lastName: "Mohamed", email: "Karimzz@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: true },
    { id: 2, firstName: "Ahmed", lastName: "Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: true, active: true },
    { id: 3, firstName: "Mahmoud", lastName: "Meshref", email: "Mshref@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: false },
    { id: 4, firstName: "Ziad", lastName: "Amr", email: "Ziad@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: true },
    { id: 5, firstName: "Karimzz", lastName: "Mohamed", email: "Karimzz@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: true },
    { id: 6, firstName: "Ahmed", lastName: "Magdy", email: "Ahmed@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: true, active: true },
    { id: 7, firstName: "Mahmoud", lastName: "Meshref", email: "Mshref@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: false },
    { id: 8, firstName: "Ziad", lastName: "Amr", email: "Ziad@gmail.com", phone: "0123456789", address: "Cairo", password: '123456', admin: false, active: true },
  ],
  
}) => {
  return state;
}

export const store = createStore(reducer)