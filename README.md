# react-carousel-hook-example

This is a sample implementation using the `useCarousel` hook as described in my [article at LogRocket](https://blog.logrocket.com/building-carousel-component-react-hooks/).

## Building

If you have Node with NPM installed you can just install the local dependencies after cloning:

```sh
npm install
```

then you can run the local dev server using:

```sh
npm start
```

This will start the dev server at [localhost:1234](http://localhost:1234).

## Structure

The source code is contained in the `src` folder. `useCarousel.ts` has the code mentioned in the article, while `DemoCarousel` has a carousel component using this hook. This sample uses [emotion](https://github.com/emotion-js/emotion) for styling - so all the CSS is inlined.

The `app.tsx` hosts the application. It creates an instance of teh `DemoCarousel` component just rotating three placeholder images.

## License

This sample code is released using the MIT license. For more information see the [LICENSE file](./LICENSE).
