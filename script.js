/**
 * WU Apparel — Premium JavaScript
 * Cart, Navigation, Interactions, GSAP Animations, PKR Pricing
 */

// ====== EXCHANGE RATE ======
const USD_TO_PKR = 278;
function toPKR(usd) { return Math.round(usd * USD_TO_PKR); }
function formatPKR(amount) { return 'PKR ' + amount.toLocaleString('en-PK'); }
function formatDualPrice(usd) {
  const pkr = toPKR(usd);
  return `$${usd.toFixed(2)} <span class="pkr">/ ${formatPKR(pkr)}</span>`;
}
function formatDualPriceSmall(usd) {
  const pkr = toPKR(usd);
  return `$${usd.toFixed(2)} <span class="pkr-small">/ ${formatPKR(pkr)}</span>`;
}

// ====== PRODUCT DATA ======
const productImages = [
  'images/product-1.jpg', 'images/product-2.jpg', 'images/product-3.jpg',
  'images/product-4.jpg', 'images/product-5.jpg', 'images/product-6.jpg',
  'images/product-7.jpg', 'images/product-8.jpg', 'images/product-9.jpg',
  'images/product-10.jpg', 'images/product-11.jpg', 'images/product-12.jpg'
];
const productNames = [
  'Essential Crew Tee', 'Classic Fit Polo', 'Premium Oxford Shirt', 'Heavyweight Hoodie',
  'Zip-Up Windbreaker', 'Relaxed Joggers', 'Structured Cap', 'Canvas Tote Bag',
  'Vintage Wash Tee', 'Merino Wool Sweater', 'Tactical Cargo Pants', 'Signature Bomber',
  'Performance Tank', 'Flannel Work Shirt', 'Quilted Vest', 'Fleece Pullover',
  'Slim Chino Pants', 'Bucket Hat', 'Leather Belt', 'Athletic Shorts',
  'Baseball Raglan', 'Henley Long Sleeve', 'Puffer Jacket', 'Knit Beanie',
  'Denim Jacket', 'Running Tights', 'Crew Sock Pack', 'Bandana Set',
  'Oversized Tee', 'Track Jacket', 'Golf Polo', 'Workwear Vest',
  'Thermal Base Layer', 'Board Shorts', 'Linen Shirt', 'Varsity Jacket',
  'Camp Collar Shirt', 'Painter Pants', 'Sun Hat', 'Duffle Bag',
  'Rugby Shirt', 'Tech Fleece Hoodie', 'Golf Shorts', 'Trail Vest',
  'Mock Neck Tee', 'Corduroy Pants', 'Fisherman Beanie', 'Weekender Bag',
  'Garment Dyed Tee', 'Coach Jacket', 'Tennis Polo', 'Field Jacket',
  'Waffle Knit Tee', 'Carpenter Pants', 'Snapback Cap', 'Gym Bag',
  'Baseball Tee', 'Sherpa Jacket', 'Resort Shirt', 'Snow Beanie',
  'Pique Polo', 'Stadium Jacket', 'Utility Vest', 'Crossbody Bag',
  'Slub Knit Tee', 'Trench Coat', 'Swim Trunks', 'Visor Cap',
  'Jersey Polo', 'Anorak Jacket', 'Western Shirt', 'Duffel Coat',
  'Ribbed Tank', 'Overalls', 'Trucker Cap', 'Tote Backpack',
  'Striped Tee', 'Bomber Vest', 'Oxford Polo', 'Rain Jacket',
  'Mesh Shorts', 'Fleece Vest', 'Polo Dress', 'Sun Hoodie',
  'Compression Tee', 'Parka Jacket', 'Chambray Shirt', 'Bucket Bag',
  'Graphic Tee', 'Wind Vest', 'Tennis Skirt', 'Trail Cap',
  'Muscle Tank', 'Softshell Jacket', 'Poplin Shirt', 'Hip Pack',
  'Pocket Tee', 'Insulated Vest', 'Polo Sweater', 'Day Pack'
];
const categoryMap = {
  'Essential Crew Tee': 'tees', 'Classic Fit Polo': 'shirts', 'Premium Oxford Shirt': 'shirts',
  'Heavyweight Hoodie': 'outerwear', 'Zip-Up Windbreaker': 'outerwear', 'Relaxed Joggers': 'bottoms',
  'Structured Cap': 'accessories', 'Canvas Tote Bag': 'accessories', 'Vintage Wash Tee': 'tees',
  'Merino Wool Sweater': 'outerwear', 'Tactical Cargo Pants': 'bottoms', 'Signature Bomber': 'outerwear',
  'Performance Tank': 'tees', 'Flannel Work Shirt': 'shirts', 'Quilted Vest': 'outerwear',
  'Fleece Pullover': 'outerwear', 'Slim Chino Pants': 'bottoms', 'Bucket Hat': 'accessories',
  'Leather Belt': 'accessories', 'Athletic Shorts': 'bottoms', 'Baseball Raglan': 'tees',
  'Henley Long Sleeve': 'shirts', 'Puffer Jacket': 'outerwear', 'Knit Beanie': 'accessories',
  'Denim Jacket': 'outerwear', 'Running Tights': 'bottoms', 'Crew Sock Pack': 'accessories',
  'Bandana Set': 'accessories', 'Oversized Tee': 'tees', 'Track Jacket': 'outerwear',
  'Golf Polo': 'shirts', 'Workwear Vest': 'outerwear', 'Thermal Base Layer': 'tees',
  'Board Shorts': 'bottoms', 'Linen Shirt': 'shirts', 'Varsity Jacket': 'outerwear',
  'Camp Collar Shirt': 'shirts', 'Painter Pants': 'bottoms', 'Sun Hat': 'accessories',
  'Duffle Bag': 'accessories', 'Rugby Shirt': 'shirts', 'Tech Fleece Hoodie': 'outerwear',
  'Golf Shorts': 'bottoms', 'Trail Vest': 'outerwear', 'Mock Neck Tee': 'tees',
  'Corduroy Pants': 'bottoms', 'Fisherman Beanie': 'accessories', 'Weekender Bag': 'accessories',
  'Garment Dyed Tee': 'tees', 'Coach Jacket': 'outerwear', 'Tennis Polo': 'shirts',
  'Field Jacket': 'outerwear', 'Waffle Knit Tee': 'tees', 'Carpenter Pants': 'bottoms',
  'Snapback Cap': 'accessories', 'Gym Bag': 'accessories', 'Baseball Tee': 'tees',
  'Sherpa Jacket': 'outerwear', 'Resort Shirt': 'shirts', 'Snow Beanie': 'accessories',
  'Pique Polo': 'shirts', 'Stadium Jacket': 'outerwear', 'Utility Vest': 'outerwear',
  'Crossbody Bag': 'accessories', 'Slub Knit Tee': 'tees', 'Trench Coat': 'outerwear',
  'Swim Trunks': 'bottoms', 'Visor Cap': 'accessories', 'Jersey Polo': 'shirts',
  'Anorak Jacket': 'outerwear', 'Western Shirt': 'shirts', 'Duffel Coat': 'outerwear',
  'Ribbed Tank': 'tees', 'Overalls': 'bottoms', 'Trucker Cap': 'accessories',
  'Tote Backpack': 'accessories', 'Striped Tee': 'tees', 'Bomber Vest': 'outerwear',
  'Oxford Polo': 'shirts', 'Rain Jacket': 'outerwear', 'Mesh Shorts': 'bottoms',
  'Fleece Vest': 'outerwear', 'Polo Dress': 'shirts', 'Sun Hoodie': 'outerwear',
  'Compression Tee': 'tees', 'Parka Jacket': 'outerwear', 'Chambray Shirt': 'shirts',
  'Bucket Bag': 'accessories', 'Graphic Tee': 'tees', 'Wind Vest': 'outerwear',
  'Tennis Skirt': 'bottoms', 'Trail Cap': 'accessories', 'Muscle Tank': 'tees',
  'Softshell Jacket': 'outerwear', 'Poplin Shirt': 'shirts', 'Hip Pack': 'accessories',
  'Pocket Tee': 'tees', 'Insulated Vest': 'outerwear', 'Polo Sweater': 'outerwear',
  'Day Pack': 'accessories'
};

function generateProducts() {
  const products = [];
  for (let i = 0; i < 100; i++) {
    const name = productNames[i] || `WU Essential ${i + 1}`;
    const category = categoryMap[name] || 'tees';
    const basePrice = category === 'accessories' ? 25 : category === 'tees' ? 35 : category === 'bottoms' ? 55 : category === 'shirts' ? 48 : 85;
    const price = basePrice + Math.floor(Math.random() * 40);
    const hasSale = Math.random() > 0.7;
    const salePrice = hasSale ? Math.floor(price * 0.75) : null;
    const image = productImages[i % productImages.length];
    const isNew = i < 12;
    products.push({ id: i + 1, name, category, price, salePrice, image, isNew });
  }
  return products;
}
const allProducts = generateProducts();

// ====== CART STATE ======
let cart = JSON.parse(localStorage.getItem('wu_cart')) || [];
function saveCart() { localStorage.setItem('wu_cart', JSON.stringify(cart)); updateCartUI(); }
function addToCart(product, qty = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) { existing.qty += qty; } else { cart.push({ ...product, qty }); }
  saveCart(); openCart();
}
function removeFromCart(id) { cart = cart.filter(item => item.id !== id); saveCart(); }
function updateQty(id, qty) {
  const item = cart.find(item => item.id === id);
  if (item) { item.qty = Math.max(1, qty); saveCart(); }
}
function cartTotal() { return cart.reduce((sum, item) => sum + (item.salePrice || item.price) * item.qty, 0); }
function cartCount() { return cart.reduce((sum, item) => sum + item.qty, 0); }

// ====== CART UI ======
function updateCartUI() {
  const countEl = document.querySelector('.cart-count');
  if (countEl) { const count = cartCount(); countEl.textContent = count; countEl.style.display = count > 0 ? 'flex' : 'none'; }
  const itemsContainer = document.querySelector('.cart-items');
  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M6 6L5 3H2"/></svg>
          <p>Your cart is empty</p>
        </div>`;
    } else {
      itemsContainer.innerHTML = cart.map(item => {
        const price = item.salePrice || item.price;
        return `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <div>
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">$${price.toFixed(2)} <span class="pkr-small">/ ${formatPKR(toPKR(price))}</span></div>
            </div>
            <div class="cart-item-actions">
              <button class="cart-qty-btn" onclick="updateQty(${item.id}, ${item.qty - 1})">-</button>
              <span class="cart-item-qty">${item.qty}</span>
              <button class="cart-qty-btn" onclick="updateQty(${item.id}, ${item.qty + 1})">+</button>
              <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
          </div>
        </div>`;
      }).join('');
    }
  }
  const subtotalEl = document.querySelector('.cart-subtotal-value');
  if (subtotalEl) {
    const total = cartTotal();
    subtotalEl.innerHTML = `$${total.toFixed(2)} <span class="pkr-small">/ ${formatPKR(toPKR(total))}</span>`;
  }
  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const checkoutItems = document.getElementById('checkoutItems');
  if (!checkoutItems) return;
  if (cart.length === 0) {
    checkoutItems.innerHTML = '<p style="text-align:center;color:var(--gray-400);padding:24px 0;">Your cart is empty. <a href="shop.html" style="color:var(--accent);text-decoration:underline;">Go shopping</a></p>';
    document.getElementById('checkoutSubtotal').textContent = 'PKR 0';
    document.getElementById('checkoutShipping').textContent = 'PKR 0';
    document.getElementById('checkoutTotal').textContent = 'PKR 0';
    return;
  }
  checkoutItems.innerHTML = cart.map(item => {
    const price = item.salePrice || item.price;
    const total = price * item.qty;
    return `
      <div class="checkout-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="checkout-item-info">
          <div class="checkout-item-name">${item.name}</div>
          <div class="checkout-item-meta">Qty: ${item.qty}</div>
        </div>
        <div class="checkout-item-price">${formatPKR(toPKR(total))}</div>
      </div>`;
  }).join('');
  const subtotal = cartTotal();
  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;
  document.getElementById('checkoutSubtotal').textContent = formatPKR(toPKR(subtotal));
  document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : formatPKR(toPKR(shipping));
  document.getElementById('checkoutTotal').textContent = formatPKR(toPKR(total));
}

function openCart() {
  document.querySelector('.cart-overlay')?.classList.add('active');
  document.querySelector('.cart-sidebar')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.querySelector('.cart-overlay')?.classList.remove('active');
  document.querySelector('.cart-sidebar')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ====== MOBILE NAV ======
function toggleMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  hamburger?.classList.toggle('active');
  mobileNav?.classList.toggle('active');
  document.body.style.overflow = mobileNav?.classList.contains('active') ? 'hidden' : '';
}

// ====== PRODUCT RENDERING ======
function renderProducts(container, products, limit = null) {
  if (!container) return;
  const display = limit ? products.slice(0, limit) : products;
  container.innerHTML = display.map(p => {
    const price = p.salePrice || p.price;
    return `
    <div class="product-card" data-category="${p.category}">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" class="lazy-img" onload="this.classList.add('loaded')">
        ${p.isNew ? '<span class="product-badge">New</span>' : ''}
        ${p.salePrice ? '<span class="product-badge sale">Sale</span>' : ''}
        <div class="product-quick-add">Add to Bag</div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          ${formatDualPrice(price)}
          ${p.salePrice ? `<span class="original">${formatDualPrice(p.price)}</span>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');

  // Add click handlers for quick-add
  container.querySelectorAll('.product-quick-add').forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(display[i]);
    });
  });
}

// ====== FILTERING ======
function filterProducts(category) {
  const container = document.querySelector('.shop-grid');
  if (!container) return;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === category));
  if (category === 'all') { renderProducts(container, allProducts); }
  else { renderProducts(container, allProducts.filter(p => p.category === category)); }
  if (typeof gsap !== 'undefined') {
    gsap.from('.product-card', { opacity: 0, y: 30, duration: 0.6, stagger: 0.08, ease: 'power3.out' });
  }
}

// ====== FORM VALIDATION ======
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');
    form.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));
    form.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));
    if (!name.value.trim() || name.value.trim().length < 2) { showFieldError(name, 'Please enter your name'); valid = false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) { showFieldError(email, 'Please enter a valid email'); valid = false; }
    if (!message.value.trim() || message.value.trim().length < 10) { showFieldError(message, 'Please enter a message'); valid = false; }
    if (valid) {
      form.innerHTML = `
        <div class="form-success">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <h4>Message Sent</h4>
          <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
        </div>`;
      if (typeof gsap !== 'undefined') { gsap.from('.form-success', { opacity: 0, scale: 0.9, duration: 0.6, ease: 'power3.out' }); }
    }
  });
}
function showFieldError(field, message) {
  field.classList.add('error');
  const errorEl = field.parentElement.querySelector('.form-error');
  if (errorEl) { errorEl.textContent = message; errorEl.classList.add('visible'); }
}

// ====== GSAP ANIMATIONS ======
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const isTransparent = navbar.classList.contains('transparent');
    if (isTransparent) {
      ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        onLeave: () => { navbar.classList.remove('transparent'); navbar.classList.add('solid'); },
        onEnterBack: () => { navbar.classList.remove('solid'); navbar.classList.add('transparent'); }
      });
    }
  }

  // Hero animations
  const heroLabel = document.querySelector('.hero-label');
  const heroLines = document.querySelectorAll('.hero-title .line-inner');
  const heroDesc = document.querySelector('.hero-desc');
  const heroBtn = document.querySelector('.hero-btn');
  const heroScroll = document.querySelector('.hero-scroll');

  const heroTl = gsap.timeline({ delay: 0.3 });
  if (heroLabel) heroTl.from(heroLabel, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' });
  if (heroLines.length) heroTl.from(heroLines, { opacity: 0, y: 100, duration: 1.2, stagger: 0.15, ease: 'power3.out' }, '-=0.4');
  if (heroDesc) heroTl.from(heroDesc, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.6');
  if (heroBtn) heroTl.from(heroBtn, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.5');
  if (heroScroll) heroTl.from(heroScroll, { opacity: 0, duration: 1 }, '-=0.4');

  // Hero parallax
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    gsap.to(heroImage, {
      yPercent: 15, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  // Section headers
  document.querySelectorAll('.section-header').forEach(header => {
    const label = header.querySelector('.section-label');
    const title = header.querySelector('.section-title');
    const subtitle = header.querySelector('.section-subtitle');
    if (label) {
      gsap.from(label, { scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' }, opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' });
    }
    if (title) {
      gsap.from(title, { scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' }, opacity: 0, y: 30, duration: 1, delay: 0.15, ease: 'power3.out' });
    }
    if (subtitle) {
      gsap.from(subtitle, { scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none none' }, opacity: 0, y: 15, duration: 0.8, delay: 0.3, ease: 'power3.out' });
    }
  });

  // Product cards stagger
  document.querySelectorAll('.product-grid').forEach(grid => {
    gsap.from(grid.querySelectorAll('.product-card'), {
      scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, y: 40, duration: 0.8, stagger: 0.12, ease: 'power3.out'
    });
  });

  // Values row
  const valuesRow = document.querySelector('.values-row');
  if (valuesRow) {
    gsap.from(valuesRow.querySelectorAll('.value-item'), {
      scrollTrigger: { trigger: valuesRow, start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    });
  }

  // Promo banner
  const promoBanner = document.querySelector('.promo-banner');
  if (promoBanner) {
    gsap.from(promoBanner.querySelector('.promo-label'), { scrollTrigger: { trigger: promoBanner, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' });
    gsap.from(promoBanner.querySelector('.promo-title'), { scrollTrigger: { trigger: promoBanner, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, y: 30, duration: 1, delay: 0.2, ease: 'power3.out' });
    gsap.from(promoBanner.querySelector('.promo-desc'), { scrollTrigger: { trigger: promoBanner, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: 'power3.out' });
    gsap.from(promoBanner.querySelector('.promo-btn'), { scrollTrigger: { trigger: promoBanner, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, y: 20, duration: 0.8, delay: 0.6, ease: 'power3.out' });
  }

  // Team cards
  document.querySelectorAll('.team-card, .project-team-card').forEach((card, i) => {
    gsap.from(card, { scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }, opacity: 0, y: 30, duration: 0.7, delay: i * 0.1, ease: 'power3.out' });
  });

  // About sections
  const aboutHero = document.querySelector('.about-hero');
  if (aboutHero) {
    gsap.from(aboutHero.querySelector('h1'), { scrollTrigger: { trigger: aboutHero, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, y: 30, duration: 1, ease: 'power3.out' });
    gsap.from(aboutHero.querySelector('p'), { scrollTrigger: { trigger: aboutHero, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, y: 20, duration: 0.8, delay: 0.3, ease: 'power3.out' });
  }
  const aboutGrid = document.querySelector('.about-grid');
  if (aboutGrid) {
    gsap.from(aboutGrid.querySelector('.about-image'), { scrollTrigger: { trigger: aboutGrid, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, x: -40, duration: 1, ease: 'power3.out' });
    gsap.from(aboutGrid.querySelector('.about-text'), { scrollTrigger: { trigger: aboutGrid, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, x: 40, duration: 1, delay: 0.2, ease: 'power3.out' });
  }

  // Contact page
  const contactGrid = document.querySelector('.contact-grid');
  if (contactGrid) {
    gsap.from(contactGrid.querySelector('.contact-info'), { scrollTrigger: { trigger: contactGrid, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, x: -30, duration: 0.9, ease: 'power3.out' });
    gsap.from(contactGrid.querySelector('form'), { scrollTrigger: { trigger: contactGrid, start: 'top 80%', toggleActions: 'play none none none' }, opacity: 0, x: 30, duration: 0.9, delay: 0.2, ease: 'power3.out' });
  }
}

// ====== PAGE-SPECIFIC INIT ======
function initHomePage() {
  const featuredGrid = document.querySelector('.featured-grid');
  if (featuredGrid) { renderProducts(featuredGrid, allProducts.slice(0, 12)); }
}
function initShopPage() {
  const shopGrid = document.querySelector('.shop-grid');
  if (shopGrid) { renderProducts(shopGrid, allProducts); }
}

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  document.querySelector('.hamburger')?.addEventListener('click', toggleMobileNav);
  document.querySelectorAll('.mobile-nav a').forEach(link => { link.addEventListener('click', toggleMobileNav); });

  document.querySelector('.cart-toggle')?.addEventListener('click', openCart);
  document.querySelector('.cart-close')?.addEventListener('click', closeCart);
  document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);

  document.querySelector('.cart-checkout')?.addEventListener('click', () => {
    if (cart.length > 0) { window.location.href = 'checkout.html'; }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      document.querySelector('.mobile-nav')?.classList.remove('active');
      document.querySelector('.hamburger')?.classList.remove('active');
    }
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
  });

  initContactForm();

  if (typeof gsap !== 'undefined') { initGSAPAnimations(); }

  initHomePage();
  initShopPage();
});
