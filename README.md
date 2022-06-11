# E-Prozar Sprint 4

## Story

You and a friend had the idea to create a website for the local grocery store down the street after you heard them considering to try out this "online thing where the people are all going these days".
In order to convince the owners to choose you for creating their site, you need to present a demo to them with a group of random products.
Coffee mug full, coding mode on, let's create E-Prozar !

## What are you going to learn?

- react routing
- UseEffect hook
- installing and working with 3rd party libraries

## Tasks

1. Create a navbar with 4 links: `Promotions`, `Winter Offer`, `Spring Offer`, `Autumn Offer`
    - When the user clicks on the `Promotions` link the browser url is changed to `localhost:3000/#/`
    - When the user clicks on the `Winter Offer` link the browser url is changed to `localhost:3000/#/category/1`
    - When the user clicks on the `Spring Offer` link the browser url is changed to `localhost:3000/#/category/2`
    - When the user clicks on the `Autumn Offer` link the browser url is changed to `localhost:3000/#/category/3`

2. When the user navigates to `category/1` or `category/2` or `category/3` the same component is used to display the products (only the ones from that category id are shown)
    - When the url in the browser is `category/1` the first product which is displayed is `Handcrafted Fresh Towels`
    - When the url in the browser is `category/1` the filter by category has `16` items
    - When the url in the browser is `category/2` the filter by category has `15` items
    - When the url in the browser is `category/3` the filter by category has `16` items

3. Move the random product of the day from the `Category` page to `Promotions` page.
    - When the url in the browser is `localhost:3000/#/` the `Promotions` page is displayed
    - Each time the user navigates to the `Promotions` page 3 random products are chosen from the 3 available categories

4. The promotion page has a carousel (React Responsive Carousel from https://www.npmjs.com/package/react-responsive-carousel)
    - The `Promotions` page has a carousel which displays the image of the 3 randomly chosen products.
    - Each slide also has a label which displays a text in the format `For the {xth} of {month_name} {product_name}: from {old_price} to {new_price}` (example `For the 24th of March Generic Frozen Shirt: from $303.00 to $152 !`)

## General requirements

None

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`
- because you are reusing the `Category` page for each `Category/1`, `Category/2`, `Category/3` you need to use the `UseEffect` and set the it to trigger when the `id` of the route changes
- to reduce the amount of CSS used, you can import the bootstrap library

## Background materials

- <i class="far fa-exclamation"></i> [Functional Components](https://www.robinwieruch.de/react-function-component#react-stateless-function-component)
- <i class="far fa-exclamation"></i> [Reach Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- <i class="far fa-exclamation"></i> [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- <i class="far fa-exclamation"></i> [React Use Effect](https://reactjs.org/docs/hooks-effect.html)
- <i class="far fa-book-open"></i> [JS Date functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- <i class="far fa-book-open"></i> [JS String functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
