# Readme



## Project description
Simple react app to calculate energy cap savings for a Dutch household. New Dutch regulations cap the energy costs for households up to a certain volume. 
With this tool, people can estimate their energy cost with and without the cap. 


### Preview

![preview](https://github.com/BoukeLubach/prijsplafond/blob/master/preview.png)



## Running the app

```
git clone https://github.com/BoukeLubach/prijsplafond.git
```

### Using NPM
If you have node.js installed, you can run the app by 

```
npm start
```

The app now runs on http://localhost:3000/

### Using Docker

If you prefer docker, you can build the image by 


```
docker build -t prijsplafond .
```

Then, running the container 

```
docker run -dp 3000:3000 prijsplafond
```

The app now runs on http://localhost:3000/


