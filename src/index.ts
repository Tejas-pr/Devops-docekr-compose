import { PrismaClient } from "@prisma/client";
import express from "express";
const prismaClient = new PrismaClient();

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    res.json({
        message: "Post request"
    });
})

app.get("/", async (req, res) => {
    const user = await prismaClient.user.findMany();
    res.json({
        user,
        message: "Get request"
    });
})

app.listen(3000,() => {
    console.log("listing on 3000");
})