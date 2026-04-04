// Claude was used for debugging purposes and syntax, as well as generating the planet descriptions, but the code was written mostly by me. I checked for understanding as well.
const planets = [
    {
        name: "Mercury",
        type: "Terrestrial",
        temp: "167°C",
        gravity: "0.38g",
        moons: 0,
        rings: "No",
        description: "Mercury is the smallest planet in our solar system and the closest to the Sun, yet it is far from the simplest world to understand. Despite its proximity to our star, Mercury is not the hottest planet — its lack of a substantial atmosphere means heat escapes rapidly into space, causing surface temperatures to swing by over 600 degrees Celsius between day and night. The planet's surface is heavily cratered, resembling our own Moon, and bears the scars of billions of years of meteorite impacts. Mercury completes an orbit around the Sun in just 88 Earth days, making its year remarkably short. It was known to ancient civilizations but was first studied in detail by the Mariner 10 spacecraft in 1974.",
        image: "imgs/mercury.webp",
        tilt: 0.03
    },
    {
        name: "Venus",
        type: "Terrestrial",
        temp: "465°C",
        gravity: "0.91g",
        moons: 0,
        rings: "No",
        description: "Venus is often called Earth's twin due to its similar size and mass, but beneath that resemblance lies one of the most hostile environments in the solar system. The planet is blanketed by a thick layer of sulfuric acid clouds that trap heat through a runaway greenhouse effect, making Venus the hottest planet in our solar system despite not being the closest to the Sun. Surface temperatures reach a scorching 465 degrees Celsius — hot enough to melt lead — and atmospheric pressure at the surface is approximately 90 times that of Earth. Venus rotates backwards compared to most planets and does so extraordinarily slowly, meaning a single Venusian day is longer than its year.",
        image: "imgs/venus.webp",
        tilt: 177
    },
    {
        name: "Earth",
        type: "Terrestrial",
        temp: "15°C",
        gravity: "1.00g",
        moons: 1,
        rings: "No",
        description: "Earth is the only known world in the universe confirmed to harbor complex life, making it the most scientifically significant planet in our solar system. Its dynamic atmosphere — composed primarily of nitrogen and oxygen — regulates temperature, shields the surface from harmful solar radiation, and drives the weather systems that distribute water across the globe. Earth's surface is roughly 71 percent covered by liquid water, a feature unique among the rocky planets of our solar system. A large, stabilizing Moon helps maintain the axial tilt that gives Earth its predictable seasons.",
        image: "imgs/earth.webp",
        tilt: 23.5
    },
    {
        name: "Mars",
        type: "Terrestrial",
        temp: "-60°C",
        gravity: "0.38g",
        moons: 2,
        rings: "No",
        description: "Mars, the Red Planet, has captured human imagination for centuries and remains the most explored world beyond Earth. Its distinctive rust-red color comes from iron oxide — essentially rust — covering much of its surface, which also features the tallest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris, that dwarfs the Grand Canyon in every dimension. Mars once had a thicker atmosphere and liquid water flowing across its surface, evidence of which remains in ancient dried riverbeds and mineral deposits.",
        image: "imgs/mars.webp",
        tilt: 25
    },
    {
        name: "Jupiter",
        type: "Gas Giant",
        temp: "-110°C",
        gravity: "2.53g",
        moons: 101,
        rings: "Yes",
        description: "Jupiter is the largest planet in our solar system, so massive that more than 1,300 Earths could fit inside it, and its gravitational influence shapes the orbits of countless other bodies throughout the solar system. Its atmosphere is a turbulent ocean of hydrogen and helium, streaked with bands of ammonia clouds and punctuated by the Great Red Spot — a storm system that has persisted for at least 350 years. Jupiter has no solid surface; pressure and temperature increase with depth until hydrogen is compressed into a metallic, electrically conductive state near the core.",
        image: "imgs/jupiter.webp",
        tilt: 3
    },
    {
        name: "Saturn",
        type: "Gas Giant",
        temp: "-140°C",
        gravity: "1.07g",
        moons: 285,
        rings: "Yes",
        description: "Saturn is immediately recognizable by its extraordinary ring system — the most extensive and visually dramatic of any planet in the solar system, composed of billions of ice particles and rocky debris ranging from microscopic grains to chunks the size of houses. Like Jupiter, Saturn is a gas giant composed primarily of hydrogen and helium, and it is the least dense planet in our solar system — less dense, in fact, than liquid water. The Cassini spacecraft spent 13 years in orbit around Saturn, transforming our understanding of this remarkable world.",
        image: "imgs/saturn.webp",
        tilt: 27
    },
    {
        name: "Uranus",
        type: "Ice Giant",
        temp: "-195°C",
        gravity: "0.89g",
        moons: 28,
        rings: "Yes",
        description: "Uranus is an ice giant — a distinct class of planet separate from the gas giants — with an interior rich in water, methane, and ammonia ices surrounding a rocky core. Its most striking characteristic is its extreme axial tilt of approximately 98 degrees, meaning Uranus essentially orbits the Sun on its side, likely the result of a massive collision with an Earth-sized object early in the solar system's history. It was the first planet discovered with a telescope, identified by astronomer William Herschel in 1781.",
        image: "imgs/uranus.webp",
        tilt: 98
    },
    {
        name: "Neptune",
        type: "Ice Giant",
        temp: "-200°C",
        gravity: "1.14g",
        moons: 16,
        rings: "Yes",
        description: "Neptune is the most distant planet in our solar system and one of the most dynamic, despite receiving only a fraction of the sunlight that reaches the inner planets. Its deep blue color comes from methane in the upper atmosphere absorbing red wavelengths of light, and its winds are the fastest recorded on any planet — reaching speeds of over 2,100 kilometers per hour. Voyager 2 remains the only spacecraft to have visited Neptune, conducting its flyby in 1989 and revealing a complex, storm-driven world at the edge of our solar neighborhood.",
        image: "imgs/neptune.webp",
        tilt: 28
    }
];

let currentIndex = 0;

function displayPlanet(index) {
    document.querySelector('#planet-name').textContent = planets[index].name;
    document.querySelector('#planet-description').textContent = planets[index].description;
    document.querySelector('#planet-ball').style.backgroundImage = `url(${planets[index].image})`;
    document.querySelector('#planet-ball').style.transform = `rotate(${planets[index].tilt}deg)`;

    const planetInfo = document.querySelector('#quick-stats')

    planetInfo.innerHTML = '';

    const info = [
        `Type: ${planets[index].type}`,
        `Average Temperature: ${planets[index].temp}`,
        `Gravity: ${planets[index].gravity}`,
        `Moons: ${planets[index].moons}`,
        `Rings: ${planets[index].rings}`
    ]

    info.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        planetInfo.appendChild(li);
    })
}

document.querySelector('#rightArrow').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= planets.length) {
        currentIndex = 0;
    }
    displayPlanet(currentIndex);
});

document.querySelector('#leftArrow').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = planets.length - 1;
    }
    displayPlanet(currentIndex);

});



displayPlanet(0);