// Import area


//2. Define Area

export async function POST(req){
    const { shoppingAidsType, id } = await req.json();
                        // object.property.property
    const searchParams = req.nextUrl.searchParams;

    const pageType = searchParams.get('pageType');

    // every function return something

    return Response.json({
        msg1: `Hello ${pageType}`,
        msg2: `Hello ${shoppingAidsType}`,
        msg3: `Hello ${id}`,
    })
}