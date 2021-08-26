# TypeScript + Node + Docker (with code hot-reloading in the container)

## For running locally

`npm i`

### Start the dev server

`npm run dev`

### Build the project

`npm run build`

### Start built project

`npm start`


## Docker commands

### Images

Build docker image
```docker build -t test-image-name .```

Run image in interactive mode
```docker run -it -p 7777:7777 test-image-name```

Or run image in silent(daemon) mode
```docker run -d -p 7777:7777 test-image-name```
List all images
```docker image ls```

Remove all images at once
```docker rmi $(docker images -q)```

### Containers

List all active containers
```docker ps```

List all active and dead containers
```docker ps -a```

Stop all running containers
```docker stop $(docker ps -a -q)```

Delete all stopped containers: 
```docker rm $(docker ps -a -q)```

### Other

Install help utils
```apt-get install iputils-ping nmap```

Jump into container shell
```docker exec -it CONTAINER_ID /bin/sh```


https://gist.github.com/zmts/509f224950f85f3cfe4365e2b80081d1