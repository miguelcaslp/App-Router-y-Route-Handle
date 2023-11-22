import getProducts from "@/lib/products";

export function GET() {
    let products = getProducts();
    return Response.json(products)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let products = getProducts();
    let sig = Math.max(...products.map(u => u.id)) + 1

    const newProduct = await request.json()
    products.push({ id: sig, ...newProduct })
    return Response.json(products)
}

