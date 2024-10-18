/*
TypeScript Features Assignment
🔰 USER STORY

As a developer, I need to create a simple application to manage a list of electronic products using TypeScript features.
✍️ Requirements

Define an interface for the product data structure.
Implement a class to manage the list of products.
Create functions to add, remove, and list products.
Demonstrate inheritance by creating a subclass for a specific type of product.
*/

export interface Car {
    id: number;
    manufacturer: string;           
    model: string;  
    type: string;        
    year: number;           
    fuelType: string;       
    mileage: number;        
    numberOfDoors: number;  
    color?: string; 
    launchDate: string;
}