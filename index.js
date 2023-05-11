var pepeImg = "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_56_1023_614/master/1023.jpg?width=465&quality=85&dpr=1&s=none";

setInterval(() => {
    var imgs = document.querySelectorAll("img");
    imgs.forEach((o) => {
        if (o.src != pepeImg) o.src = pepeImg;
    });
}, 500);
