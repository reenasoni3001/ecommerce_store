# Ecommerce Store

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

Below are the details of the features used to build this application:

### Used Material UI components for Building Header and cards.

Implemented Ecommerce store using MUI components-
![image1](https://user-images.githubusercontent.com/41507972/194065363-6a66afd3-3c10-4c09-9664-f0792e9a471e.png)

### Added AddToCart Feature using Redux toolkit and Redux persist

User can add the items to the cart and can view it. The items in the cart persist on page reloads.

![image2](https://user-images.githubusercontent.com/41507972/194066262-6b122233-f02f-4ed3-a651-2eed2473d613.png)

### Implemented SoldOut Feature

The app displays sold out for the product id 1, 3 and 5 after 1 minute of page reload.

![image3](https://user-images.githubusercontent.com/41507972/194066689-59bc5ff0-3bfb-40f7-b464-c627efe0c9af.png)

### Strike through for products ids which are prime

All product ids which are prime should show the strike off price of 5% of the actual price.
![image4](https://user-images.githubusercontent.com/41507972/194066995-eccde48c-5fed-4ed3-8217-0d26e31b0d6d.png

## Search functionality with debounce using lodash

Implement a search on products, and should have debounce functionality with it.

![Screenshot (5)](https://user-images.githubusercontent.com/41507972/194067550-72684b6e-6b74-40cf-afb7-d6923fbaddb8.png)

### Pagination

created custom hook for implementing pagination.Products landing page has pagination, eg. each page with 10 products.

![Screenshot (6)](https://user-images.githubusercontent.com/41507972/194067863-f84d6649-8376-4e11-98ed-b4fb95c59a9d.png)

### Fetched data from API using createAsyncThunk

using redux toolkit implemented productSlice and fetched data using createAsyncThunk and axios.
