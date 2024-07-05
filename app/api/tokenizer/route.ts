import { request } from "http";

let snap 
export async function POST(request: Request) {
    const {id, productName, price, time}  = await request.json()
}