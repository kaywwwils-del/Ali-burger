const menu = {
  burgers: [
    ['Классик Бургер', 'Сочная говяжья котлета, сыр чеддер, овощи и фирменный соус.', 300, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85'],
    ['Чизбургер', 'Двойной сыр, говядина, огурчики и мягкая булочка бриошь.', 330, 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85'],
    ['Биг Бургер', 'Две котлеты, хрустящий бекон, много сыра и соус.', 450, 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=700&q=85'],
    ['Острый Бургер', 'Говядина, халапеньо, острый соус и сыр.', 380, 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=85'],
    ['Куриный Бургер', 'Хрустящая куриная котлета, салат и соус.', 280, 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85']
  ],
  pizza: [
    ['Пицца Маргарита', 'Томатный соус, моцарелла, базилик.', 450, 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85'],
    ['Пицца Пепперони', 'Томатный соус, моцарелла, пепперони.', 550, 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=85'],
    ['Пицца Гавайи', 'Томатный соус, моцарелла, ананас, курица.', 520, 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=85'],
    ['Пицца 4 Сыра', 'Моцарелла, чеддер, пармезан, горгонзола.', 580, 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85'],
    ['Пицца Мясная', 'Томатный соус, моцарелла, говядина, бекон, колбаса.', 600, 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=85']
  ],
  rolls: [
    ['Ролл Калифорния', 'Краб, огурец, авокадо, икра.', 320, 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=700&q=85'],
    ['Ролл Филадельфия', 'Лосось, сливочный сыр, огурец.', 380, 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=700&q=85'],
    ['Ролл Дракон', 'Угорь, авокадо, огурец, икра.', 420, 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=700&q=85'],
    ['Ролл Темпура', 'Креветка, огурец, сыр, темпура.', 350, 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=700&q=85'],
    ['Ролл Сяке', 'Лосось, огурец, сливочный сыр.', 340, 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=700&q=85']
  ],
  shawarma: [
    ['Шаурма Куриная', 'Курица, овощи, соус, лаваш.', 180, 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=85'],
    ['Шаурма Мясная', 'Говядина, овощи, соус, лаваш.', 220, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=85'],
    ['Шаурма С сыром', 'Курица, двойной сыр, овощи, соус.', 200, 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=700&q=85'],
    ['Шаурма Острая', 'Курица, халапеньо, острый соус, овощи.', 190, 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=700&q=85'],
    ['Шаурма Гигант', 'Двойная порция курицы, овощи, соус.', 280, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85']
  ],
  sets: [
    ['Сет СҮЙҮҮ', 'Два бургера, фри и два напитка для идеального вечера.', 1200, 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=700&q=85'],
    ['Сет Классик', 'Классик Бургер, картофель фри и напиток на выбор.', 480, 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=85'],
    ['Сет Семейный', 'Большая пицца, шаурма, фри и 4 напитка.', 1500, 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=85'],
    ['Сет Друзьям', '4 ролла, крылышки BBQ и напитки.', 1100, 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=700&q=85']
  ],
  snacks: [
    ['Фри', 'Золотистый картофель фри с солью и соусом.', 150, 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85'],
    ['Крылышки BBQ', 'Хрустящие куриные крылышки в соусе барбекю.', 280, 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=85'],
    ['Кольца лука', 'Хрустящие кольца лука с соусом.', 200, 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=700&q=85'],
    ['Наггетсы', 'Куриные наггетсы с соусом.', 220, 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=700&q=85']
  ],
  drinks: [
    ['Coca-Cola', 'Прохладительный напиток, 0.5 л.', 80, 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=700&q=85'],
    ['Домашний лимонад', 'Цитрусовый лимонад с мятой, 0.4 л.', 120, 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=85'],
    ['Молочный коктейль', 'Ванильный/шоколадный коктейль, 0.4 л.', 150, 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85'],
    ['Чай/Кофе', 'Горячий чай или кофе.', 70, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=85'],
    ['Морс', 'Ягодный морс домашнего приготовления.', 100, 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85']
  ]
};
let cart = [
  { name: 'Чизбургер', description: 'Двойной сыр, говядина, огурчики и мягкая булочка бриошь.', price: 330, qty: 1 },
  { name: 'Фри', description: 'Золотистый картофель фри с солью и соусом.', price: 150, qty: 1 }
];
const list = document.querySelector('#menu-list');
function render(category = 'burgers') { list.innerHTML = menu[category].map((item, i) => `<article class="product"><img src="${item[3]}" alt="${item[0]}" loading="lazy"><div class="product-info"><h3>${item[0]}</h3><p>${item[1]}</p><div class="product-bottom"><strong>${item[2]} KGS</strong><button class="add" onclick="addItem('${category}', ${i})">Добавить</button></div></div></article>`).join(''); }
document.querySelectorAll('.category-tabs button').forEach(button => button.addEventListener('click', () => { document.querySelector('.category-tabs .active').classList.remove('active'); button.classList.add('active'); render(button.dataset.category); }));
function addItem(category, index) { const [name, description, price] = menu[category][index]; const existing = cart.find(item => item.name === name); if (existing) existing.qty++; else cart.push({ name, description, price, qty: 1 }); updateCart(); }
function changeQty(name, delta) { const item = cart.find(entry => entry.name === name); if (!item) return; item.qty += delta; if (item.qty <= 0) cart = cart.filter(entry => entry.name !== name); updateCart(); }
function removeItem(name) { cart = cart.filter(entry => entry.name !== name); updateCart(); }
function updateCart() { const count = cart.reduce((sum, item) => sum + item.qty, 0); const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0); document.querySelector('#cart-count').textContent = count; document.querySelector('#cart-sum').textContent = `${total} KGS`; document.querySelector('#cart-total').textContent = `${total} KGS`; document.querySelector('#cart-items').innerHTML = cart.length ? cart.map(item => `<article class="cart-row"><div><h3>${item.name}</h3><p>${item.price} KGS за шт.</p><div class="quantity"><button onclick="changeQty('${item.name}', -1)">−</button><b>${item.qty}</b><button onclick="changeQty('${item.name}', 1)">+</button></div></div><div><b>${item.price * item.qty} KGS</b><button class="remove" aria-label="Удалить" onclick="removeItem('${item.name}')">×</button></div></article>`).join('') : '<p class="empty">Корзина пока пуста.<br>Добавьте что-нибудь вкусное!</p>'; }
function toggleCart() { document.querySelector('#cart-panel').classList.toggle('open'); document.querySelector('#overlay').classList.toggle('open'); }
function orderWhatsApp() { const message = cart.length ? `Заказ ALI BURGER:%0A${cart.map(item => `${item.name} × ${item.qty} — ${item.price * item.qty} KGS`).join('%0A')}` : 'Здравствуйте! Хочу сделать заказ в ALI BURGER.'; window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank'); }
render();
updateCart();
