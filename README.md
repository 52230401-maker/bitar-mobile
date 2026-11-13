# Bitar Mobile

A storefront for Bitar Mobile, a phone shop in Lebanon. You can browse phones, smartwatches, earbuds and accessories, add them to a cart, and send the shop a message.

It is a front-end project. There is no server and no database behind it, so a few things are simulated. More on that under [What it doesn't do](#what-it-doesnt-do).

## What's in it

- A home page with the shop logo and a short intro
- Four product categories: smartphones, smartwatches, accessories and AirPods
- A search box on each category page
- A cart where you can change quantities, remove items and see the total in USD
- Login and signup pages, plus a small account page
- A contact page with the shop's phone numbers and a message form
- A layout that works on phones. The sidebar turns into a top bar on small screens.

## Built with

- React 19
- Vite 8
- Tailwind CSS 4
- React Router 7 for the pages
- React Toastify for the small pop-up messages

Everything is plain JavaScript. There is no TypeScript.

## Running it on your machine

You need Node.js 20.19 or newer (22.12+ also works). That's what Vite 8 asks for. Check yours with `node -v`.

```bash
git clone https://github.com/52230401-maker/bitar-mobile.git
cd bitar-mobile
npm install
npm run dev
```

Vite prints a local address when it starts, usually `http://localhost:5173`. Open it in the browser. The first page is the login screen. Type any email and any password to get in.

The other commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Builds the production version into `dist/` |
| `npm run preview` | Serves the built version locally so you can check it |
| `npm run lint` | Runs ESLint |

If `npm run dev` fails on macOS or Linux with "Permission denied", the files in `node_modules/.bin` lost their execute permission. Run `chmod +x node_modules/.bin/*` and try again.

## How the project is laid out

```
src/
  main.jsx            entry point
  App.jsx             routes, plus the cart and logged-in user state
  index.css           Tailwind import, colors, fonts and animations
  components/
    Sidebar.jsx       navigation
    Home.jsx
    Login.jsx, Signup.jsx, MyAccount.jsx
    products.jsx      the "All products" page
    ProductCategory.jsx   shared layout for the four category pages
    SmartPhones.jsx, SmartWatches.jsx, Accessories.jsx, Airpods.jsx
    SearchBar.jsx, Counter.jsx
    Cart.jsx
    Contact.jsx
  utils/
    formatCurrency.js
public/products/      product illustrations (SVG)
```

Products are written directly in the component files. To add or change one, edit the array at the top of the matching category file, for example `src/components/SmartPhones.jsx`.

## Changing the look

The styling is Tailwind classes inside the components. The shared pieces are in `src/index.css`:

- The accent color is the `--color-brand-*` set. It is orange right now. Change those ten values and the buttons, links and highlights follow.
- The fonts are DM Sans for text and Manrope for headings, loaded from Google Fonts in `index.html`.
- The animations (`fade-up`, `scale-in` and the rest) are defined in the same file. They switch off for people who have "reduce motion" turned on in their system settings.

Tailwind is connected through `.postcssrc.json`, so there is nothing about it in `vite.config.js`.

## What it doesn't do

Since there is no backend:

- Login accepts any email and password. It only remembers the name and email while the page is open.
- Signup checks that the two passwords match, and that's all. No account is saved.
- The cart and the logged-in user are lost when you refresh the page.
- "Request order" and the contact form show a confirmation message but don't send anything.
- Prices and products are sample data.

To turn it into a real shop it would need a server for accounts, products and orders, plus a way to pay.

## Author

Akram Saadyeh
