export const milkTeaFlavors = [
    "Sun's Milk Tea",
    "Classic Milk Tea",
    "Black Sugar Milk Tea",
    "Taro Milk Tea",
    "Mango Milk Tea",
    "Coconut Milk Tea",
    "Matcha Milk Tea",
    "Thai Tea Milk Tea",
    "Red Bean Milk Tea",
    "Strawberry Milk Tea",
    "Honeydew Milk Tea",
    "Pineapple Milk Tea",
    "Vanilla Milk Tea",
    "Avocado Milk Tea"
]

const fruitTeaLemonadeFlavors = [
    "Lychee",
    "Mango",
    "Peach",
    "Grape",
    "Rose",
    "Lavender",
    "Pineapple",
    "Strawberry",
    "Green Apple",
    "Grapefruit",
    "Passion Fruit",
    "Watermelon",
    "Original Lemonade",
    "Blueberry"
]

export const fruitTeaFlavors = fruitTeaLemonadeFlavors.map(function (flavor) {
    return `${flavor} Tea`;
});

export const fruitLemonadeFlavors = fruitTeaLemonadeFlavors.map(function (flavor) {
    return `${flavor} Lemonade`;
});

export const smoothieFlavors = [
    "Mango smoothie",
    "Banana smoothie",
    "Oreo smoothie",
    "Pineapple smoothie",
    "Strawberry smoothie",
    "Blueberry smoothie",
    "Avocado smoothie",
    "Matcha smoothie",
    "Taro smoothie",
    "Red Bean smoothie"
]

export const toppings = [
    "Black Boba",
    "Crystal Boba",
    "Bursting Boba",
    "Flavor Jelly",
    "Rainbow Jelly",
    "Taro",
]