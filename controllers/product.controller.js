import { prisma } from "../lib/prisma.js";

export const createProduct = async (req, res) => {
    try {
        const { name, price, categoryId } = req.body;
        if (!name || !price || !categoryId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const product = await prisma.product.create({
            data: { name, price, categoryId }
        });
        return res.status(201).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({
            where: { id }
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, categoryId } = req.body;
        if (!name || !price || !categoryId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const product = await prisma.product.update({
            where: { id },
            data: { name, price, categoryId }
        });
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.delete({
            where: { id }
        });
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
