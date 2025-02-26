function Jewelry(type, name, purity, priceRange, description, weight, origin, src, category, categoryLink) {
    this.type = type;
    this.name = name;
    this.purity = purity;
    this.priceRange = priceRange;
    this.description = description;
    this.weight = weight;
    this.origin = origin;
    this.src = src;
    this.category = category;
    this.categoryLink = categoryLink;
}

// **Gold Jewelry**
let goldNecklace = new Jewelry("Gold", "Gold Necklace", "22K", "$1000 - $5000",
    "A beautifully crafted 22K gold necklace with intricate traditional designs.",
    50, "India", "./images/gold_necklace.jpg", "Gold", "./html/gold.html");

let goldRing = new Jewelry("Gold", "Gold Ring", "18K", "$300 - $2000",
    "An elegant 18K gold ring, perfect for special occasions and daily wear.",
    10, "Dubai", "./images/gold_ring.jpg", "Gold", "./html/gold.html");

let goldBracelet = new Jewelry("Gold", "Gold Bracelet", "24K", "$2000 - $7000",
    "A pure 24K gold bracelet, crafted for luxury and elegance.",
    30, "Italy", "./images/gold_bracelet.jpg", "Gold", "./html/gold.html");


// **Silver Jewelry**
let silverNecklace = new Jewelry("Silver", "Silver Necklace", "925 Sterling", "$100 - $1000",
    "A stylish 925 sterling silver necklace with an antique finish.",
    40, "Thailand", "./images/silver_necklace.jpg", "Silver", "./html/silver.html");

let silverRing = new Jewelry("Silver", "Silver Ring", "925 Sterling", "$50 - $500",
    "A delicate silver ring, featuring a modern and minimalistic design.",
    5, "Mexico", "./images/silver_ring.jpg", "Silver", "./html/silver.html");

let silverBracelet = new Jewelry("Silver", "Silver Bracelet", "999 Pure", "$150 - $1200",
    "An exquisite handcrafted silver bracelet made from 999 pure silver.",
    25, "Turkey", "./images/silver_bracelet.jpg", "Silver", "./html/silver.html");


// **Diamond Jewelry**
let diamondNecklace = new Jewelry("Diamond", "Diamond Necklace", "VVS1 Clarity", "$5000 - $50,000",
    "A breathtaking diamond necklace featuring VVS1 clarity diamonds.",
    20, "Belgium", "./images/diamond_necklace.jpg", "Diamond", "./html/diamond.html");

let diamondRing = new Jewelry("Diamond", "Diamond Ring", "VS1 Clarity", "$2000 - $30,000",
    "A stunning solitaire diamond ring, crafted for engagements and anniversaries.",
    8, "South Africa", "./images/diamond_ring.jpg", "Diamond", "./html/diamond.html");

let diamondBracelet = new Jewelry("Diamond", "Diamond Bracelet", "FL Clarity", "$7000 - $80,000",
    "A luxurious diamond bracelet adorned with flawless clarity diamonds.",
    15, "USA", "./images/diamond_bracelet.jpg", "Diamond", "./html/diamond.html");


// **Organizing Jewelry into Arrays**
let goldArray = [goldNecklace, goldRing, goldBracelet];
let silverArray = [silverNecklace, silverRing, silverBracelet];
let diamondArray = [diamondNecklace, diamondRing, diamondBracelet];

// **Final Jewelry Array Combining All**
let jewelryArray = [...goldArray, ...silverArray, ...diamondArray];

export { jewelryArray, goldArray, silverArray, diamondArray };