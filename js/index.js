const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Pull data into arrays

const myNavData = Object.values(siteContent.nav);
const myCtaData = Object.values(siteContent.cta);
const myMainContentData = Object.values(siteContent['main-content']);
const myContactData = Object.values(siteContent.contact);
const myFooterData = Object.values(siteContent.footer);


// Create Vars for the main sections
const myNav = document.querySelectorAll('header nav a');
const myCta = document.querySelector('.cta');
const myMainContent = document.querySelector('.main-content');
const myContact = document.querySelector('.contact');
const myFooter = document.querySelector('footer');

//Create Nav

for (i = 0; i < myNav.length; i++) {
  myNav[i].textContent = myNavData[i];
}

//Create CTA

myCta.children[0].children[0].textContent = myCtaData[0]; //h1
myCta.children[0].children[1].textContent = myCtaData[1]; //button
myCta.children[1].src = myCtaData[2]; //CTA image

// Create Main Content
const topContent = myMainContent.children[0];
let j=0;
for (let i=0; i < topContent.children.length; i++) {
  topContent.children[i].children[0].textContent = myMainContentData[j];
  topContent.children[i].children[1].textContent = myMainContentData[j+1];
  j += 2;
}


//Create Contact


//Create footer