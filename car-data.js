// car-data.js

const cars = {
  "lexus-lx570": {
    name: "2013 Lexus LX570",
    year: 2013,
    mileage: "124,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    whatsapp: "https://wa.me/27724278359",
    image: "lexus-lx570.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "gla-200": {
    name: "2014 Mercedes-Benz GLA 200",
    year: 2014,
    mileage: "181,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    whatsapp: "https://wa.me/27724278359",
    image: "gla-200.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "c180-2015a": {
    name: "2015 Mercedes-Benz C180",
    year: 2015,
    mileage: "130,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    whatsapp: "https://wa.me/27724278359",
    image: "c180-2015a.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "a200-2021": {
    name: "2021 Mercedes-Benz A200",
    year: 2021,
    mileage: "114,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "Black",
    whatsapp: "https://wa.me/27724278359",
    image: "a200-2021.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "c180-2019": {
    name: "2019 Mercedes-Benz C180",
    year: 2019,
    mileage: "80,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "Black",
    whatsapp: "https://wa.me/27724278359",
    image: "c180-2019.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "c200-2017": {
    name: "2017 Mercedes-Benz C200",
    year: 2017,
    mileage: "92,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    whatsapp: "https://wa.me/27724278359",
    image: "c200-2017.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "c220d-2018": {
    name: "2018 Mercedes-Benz C220d",
    year: 2018,
    mileage: "114,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    condition: "Used",
    color: "Black",
    whatsapp: "https://wa.me/27724278359",
    image: "c220d-2018.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "c180-2015b": {
    name: "2015 Mercedes-Benz C180",
    year: 2015,
    mileage: "94,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "Black",
    whatsapp: "https://wa.me/27724278359",
    image: "c180-2015b.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "defender-d240": {
    name: "2021 Land Rover Defender D240 XDynamic",
    year: 2021,
    mileage: "53,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    condition: "Used",
    color: "White & black",
    whatsapp: "https://wa.me/27724278359",
    image: "defender-d240.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
  "c250-2011": {
    name: "2011 Mercedes-Benz C250",
    year: 2011,
    mileage: "132,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    whatsapp: "https://wa.me/27724278359",
    image: "c250-2011.jpg",
    desc: "Experience excellence in every detail. This vehicle combines style, performance, and reliability to offer a driving experience like no other. Designed with precision and care, it meets the highest standards of quality and comfort, making every journey enjoyable and safe. Discover the perfect balance of technology, efficiency, and elegance",
  },
};

// Ler parâmetro da URL (ex: car.html?car=lexus-lx570)
const params = new URLSearchParams(window.location.search);
const carId = params.get("car");

if (carId && cars[carId]) {
  const car = cars[carId];

  document.getElementById("carTitle").textContent = car.name;
  document.getElementById("carYear").textContent = car.year;
  document.getElementById("carMileage").textContent = car.mileage;
  document.getElementById("carFuel").textContent = car.fuel;
  document.getElementById("carTransmission").textContent = car.transmission;
  document.getElementById("carCondition").textContent = car.condition;
  document.getElementById("carColor").textContent = car.color;
  document.getElementById("carDesc").textContent = car.desc;

  document.getElementById("quoteBtn").href = car.whatsapp;
  document.getElementById("talkBtn").href = car.whatsapp;

  // Atualizar imagem principal e miniatura
  const mainImage = document.getElementById("mainImage");
  mainImage.src = car.image;

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const thumb = document.createElement("img");
  thumb.src = car.image;
  thumb.className = "img-thumbnails gallery-img";
  thumb.width = 100;
  thumb.style.cursor = "pointer";
  thumb.onclick = () => (mainImage.src = car.image);
  gallery.appendChild(thumb);
} else {
  document.querySelector(".cars").innerHTML = `
    <div class="text-center py-5">
      <h3 class="text-danger">Car not found</h3>
      <p>Please use a valid link.</p>
    </div>`;
}
