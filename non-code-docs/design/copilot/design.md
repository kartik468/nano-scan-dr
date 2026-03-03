# RESPONSIVE DESIGN DOCUMENT
## Product Website – Angular Implementation Guide

This document defines:
- Component architecture
- Responsive behavior (mobile-first)
- HTML structure for each Angular component
- CSS styling per component
- Layout system and UI rules

The structure follows the approved mockup design.

--------------------------------------------------
# 1. APPLICATION ARCHITECTURE
--------------------------------------------------

## Recommended Angular Structure

app/
 ├── core/
 │    ├── header/
 │    ├── footer/
 ├── pages/
 │    ├── home/
 │    ├── products/
 │    ├── contact/
 ├── shared/
 │    ├── product-card/
 │    ├── hero/

## Routing

/              → HomeComponent
/products      → ProductsComponent
/contact       → ContactComponent

--------------------------------------------------
# 2. GLOBAL STYLES (styles.css)
--------------------------------------------------

/* Mobile First Base */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Inter', sans-serif;
}

body{
  background:#f9fafb;
  color:#111;
}

.container{
  width:100%;
  padding:0 20px;
  margin:auto;
}

.btn{
  background:#2563eb;
  color:#fff;
  padding:12px 24px;
  border-radius:12px;
  text-decoration:none;
  display:inline-block;
  font-weight:600;
  transition:0.3s;
}

.btn:hover{
  background:#1e4fd1;
}

.section{
  padding:60px 0;
}

@media(min-width:768px){
  .container{
    max-width:1200px;
  }
}

--------------------------------------------------
# 3. HEADER COMPONENT
--------------------------------------------------

## header.component.html

<header class="header">
  <div class="container header-inner">
    <div class="logo">YourBrand</div>

    <div class="menu-toggle" (click)="toggleMenu()">☰</div>

    <nav [class.active]="isOpen">
      <a routerLink="/">Home</a>
      <a routerLink="/products">Products</a>
      <a routerLink="/contact">Contact</a>
    </nav>
  </div>
</header>

## header.component.css

.header{
  background:#fff;
  position:sticky;
  top:0;
  z-index:1000;
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
}

.header-inner{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 0;
}

.logo{
  font-weight:700;
  font-size:20px;
}

nav{
  display:none;
  flex-direction:column;
  gap:16px;
}

nav.active{
  display:flex;
}

.menu-toggle{
  font-size:24px;
  cursor:pointer;
}

@media(min-width:768px){
  nav{
    display:flex !important;
    flex-direction:row;
    gap:24px;
  }
  .menu-toggle{
    display:none;
  }
}

--------------------------------------------------
# 4. HERO COMPONENT
--------------------------------------------------

## hero.component.html

<section class="hero">
  <div class="hero-overlay"></div>
  <div class="container hero-content">
    <h1>Premium Quality Products</h1>
    <p>Explore our catalog and download product PDFs instantly.</p>
    <a routerLink="/products" class="btn">View Products</a>
  </div>
</section>

## hero.component.css

.hero{
  position:relative;
  height:70vh;
  background:url('/assets/hero.jpg') center/cover no-repeat;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  color:#fff;
}

.hero-overlay{
  position:absolute;
  inset:0;
  background:rgba(0,0,0,0.5);
}

.hero-content{
  position:relative;
  z-index:2;
  max-width:600px;
}

.hero h1{
  font-size:32px;
  margin-bottom:16px;
}

@media(min-width:768px){
  .hero h1{
    font-size:48px;
  }
}

--------------------------------------------------
# 5. PRODUCT CARD COMPONENT (Reusable)
--------------------------------------------------

## product-card.component.html

<div class="card">
  <img [src]="product.image" alt="{{product.name}}" />
  <h3>{{product.name}}</h3>
  <p>{{product.description}}</p>
  <a [href]="product.pdf" target="_blank" class="btn">View PDF</a>
</div>

## product-card.component.css

.card{
  background:#fff;
  border-radius:20px;
  box-shadow:0 10px 25px rgba(0,0,0,0.05);
  padding:20px;
  text-align:center;
  transition:0.3s;
}

.card:hover{
  transform:translateY(-5px);
}

.card img{
  width:100%;
  height:180px;
  object-fit:cover;
  border-radius:16px;
  margin-bottom:16px;
}

--------------------------------------------------
# 6. PRODUCTS PAGE
--------------------------------------------------

## products.component.html

<section class="section">
  <div class="container">
    <h2>Featured Products</h2>
    <div class="product-grid">
      <app-product-card
        *ngFor="let product of products"
        [product]="product">
      </app-product-card>
    </div>
  </div>
</section>

## products.component.css

.product-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:24px;
}

@media(min-width:768px){
  .product-grid{
    grid-template-columns:repeat(3,1fr);
  }
}

--------------------------------------------------
# 7. CONTACT PAGE
--------------------------------------------------

## contact.component.html

<section class="section">
  <div class="container contact-wrapper">

    <div class="contact-info">
      <div><strong>Address:</strong> 123 Business Street</div>
      <div><strong>Phone:</strong> +1 234 567 890</div>
      <div><strong>Email:</strong> info@yourbrand.com</div>
      <div><strong>Hours:</strong> Mon - Fri, 9AM - 6PM</div>
    </div>

    <form class="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea rows="4" placeholder="Your Message"></textarea>
      <button class="btn">Send Message</button>
    </form>

  </div>
</section>

## contact.component.css

.contact-wrapper{
  display:flex;
  flex-direction:column;
  gap:40px;
}

.contact-info,
.contact-form{
  background:#fff;
  padding:30px;
  border-radius:20px;
  box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

.contact-form input,
.contact-form textarea{
  width:100%;
  padding:12px;
  margin-bottom:16px;
  border-radius:10px;
  border:1px solid #ddd;
}

@media(min-width:768px){
  .contact-wrapper{
    flex-direction:row;
  }
  .contact-info,
  .contact-form{
    flex:1;
  }
}

--------------------------------------------------
# 8. FOOTER COMPONENT
--------------------------------------------------

## footer.component.html

<footer class="footer">
  <div class="container">
    © 2026 YourBrand. All rights reserved.
  </div>
</footer>

## footer.component.css

.footer{
  background:#111;
  color:#fff;
  text-align:center;
  padding:20px 0;
  margin-top:60px;
}

--------------------------------------------------
# FINAL NOTES
--------------------------------------------------

✔ Fully mobile-first
✔ Clean Angular component separation
✔ Reusable product-card component
✔ Responsive grid layout
✔ Sticky header
✔ Optimized for scalability

This document can now be directly translated into Angular components without redesign decisions needed.