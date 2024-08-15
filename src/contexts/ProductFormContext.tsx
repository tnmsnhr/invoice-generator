import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from 'types/types';


interface ProductErrors {
    itemName: string;
    price: string;
    quantity: string;
}

interface ProductFormContextType {
    products: Product[];
    errors: { [key: number]: ProductErrors };
    addProduct: (product: Product[]) => void;
    updateProduct: (index: number, field: keyof Product, value: string) => void;
    validateProducts: () => boolean;
}

const ProductFormContext = createContext<ProductFormContextType | undefined>(undefined);

export const useProductFormContext = () => {
    const context = useContext(ProductFormContext);
    if (!context) {
        throw new Error('useProductFormContext must be used within a ProductFormProvider');
    }
    return context;
};

export const ProductFormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [errors, setErrors] = useState<{ [key: number]: ProductErrors }>({});

    const addProduct = (product: Product[]) => {
        setProducts([...product]);
    };

    const updateProduct = (index: number, field: keyof Product, value: string) => {
        const updatedProducts = products.map((product, i) =>
            i === index ? { ...product, [field]: value } : product
        );
        setProducts(updatedProducts);
        validateField(index, field, value);
    };

    const validateField = (index: number, field: keyof Product, value: string) => {
        const newErrors = { ...errors };
        if (!value.trim()) {
            newErrors[index] = { ...newErrors[index], [field]: `${field} is required` };
        } else {
            newErrors[index] = { ...newErrors[index], [field]: '' };
        }
        setErrors(newErrors);
    };

    const validateProducts = (): boolean => {
        const newErrors: { [key: number]: ProductErrors } = {};

        products.forEach((product, index) => {
            newErrors[index] = {
                itemName: product.name.trim() === '' ? 'Item Name is required' : '',
                price: product.price.trim() === '' ? 'Price is required' : '',
                quantity: product.quantity.trim() === '' ? 'Quantity is required' : '',
            };
        });

        setErrors(newErrors);

        // Return true if there are no validation errors
        return Object.values(newErrors).every(
            (error) => !error.itemName && !error.price && !error.quantity
        );
    };

    return (
        <ProductFormContext.Provider
            value={{ products, errors, addProduct, updateProduct, validateProducts }}
        >
            {children}
        </ProductFormContext.Provider>
    );
};
