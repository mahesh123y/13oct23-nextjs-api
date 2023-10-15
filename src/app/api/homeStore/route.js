// Import area


//2. Define Area

export async function POST(req){
    const { ref } = await req.json();
                        // object.property.property
    const searchParams = req.nextUrl.searchParams;

    const page = searchParams.get('page');

    // every function return something

    return Response.json({
        msg1: `Hello ${ref}`,
        msg2: `Hello ${page}`,
        
    })
}