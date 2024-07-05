import Cardproduct from "@/app/components/Cardproduct"
import { Key } from "react";


async function getData () {
    const response = await fetch('https://freetestapi.com/api/v1/products')

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json()
    console.log({data})

    return data
}

const page = async () => {

  const products = await getData()

  return (
    <div className="w-full h-screen mx-auto">
        <h1 className="text-4xl text-center">Contact App Service</h1>
        <p className="text-center">Welcome to the contact app service</p>
        <div className="flex flex-wrap gap-2 mx-auto">
        {
            products && products.map((product: { id: Key | null | undefined; name: string; price: number; image: string; } ) => (
                <Cardproduct key={product.id} title={product.name} price={product.price} image={product.image} />
            ))

          // TODO: Implement pagination if the data is too large
        }
        </div>
       
       
    </div>
  )
}

export default page