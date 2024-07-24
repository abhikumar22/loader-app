# LoaderComponent

## Live Preview
https://loader-app.netlify.app/

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
| Name | Default Value | isOptional | Description | Type | Example
|----------|----------|----------|----------|----------|----------|
| structureData    |  []        |  false        | structure of loader in array, which will have close to structure like view | array of objects | [ { type: "text", height: "400px", width: "650px"}, { type: "text", width: "500px", height: "20px" }, { type: "text", width: "250px", height: "20px" }, ]
|  isLoading    |  false        |    false      | loading state, which switches between loader and view | boolean
| children    |          | false         | Actual view, which replaces the loader after some interval         | View(collection of div's) | <div> <div> <img style={{ height: "400px", width: "650px" }} src={ "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" } /> </div> <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry </div> <div>Contrary to popular belief in everyone</div> </div>
