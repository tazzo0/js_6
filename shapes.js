
class Shape {
    constructor(name) {
        this.name = name; 
    }

    area() {
        return `ფორმა ${this.name} არ აქვს ფართობის გამოთვლა გაკეთებული.`;
    }
}

// წრის კლასი
class Circle extends Shape {
    constructor(name, radius) {
        super(name); 
        this.radius = radius; 
    }

    area() {
        return Math.PI * this.radius * this.radius; 
    }
}

// მართკუთხედის კლასი
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width; 
        this.height = height; 
    }

    area() {
        return this.width * this.height; 
    }
}

// სამკუთხედის კლასი
class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base; 
        this.height = height; 
    }

    area() {
        return (this.base * this.height) / 2; 
    }
}

// ტესტირება
let forms = [
    new Circle("წრე", 5),
    new Rectangle("მართკუთხედი", 4, 6),
    new Triangle("სამკუთხედი", 3, 4),
    new Shape("ზოგადი ფორმა")
];

forms.forEach(forms => {
    console.log(`ფორმის სახელი: ${forms.name}, ფართობი: ${forms.area()}`);
});


