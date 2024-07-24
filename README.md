# LoaderComponent

## Live Preview


## Features
- Easily integrated over any view
- lightweighted
- highly customisable

## Run the project

- Clone the Repository
- Run `npm i`
- Development mode: Run `npm run dev`
- Production build: Run `npm run build`

## Props
| Name | Default Value | isOptional | Description | Type
|----------|----------|----------|----------|----------|
| structureData    |  []        |  false        | structure of loader in array, which will have close to structure like view | array of objects
|  isLoading    |  false        |    false      | loading state, which switches between loader and view | boolean
| children    |          | false         | Actual view, which replaces the loader after some interval         | View(collection of div's)
