// 1. Import Area



//2. Define Area

async function POST(req) {
    const { src } = await req.json();
                        //object.property.property
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('placementId');
    //every function return something
    return Response.json({
        msg1: `Hello ${src}`,
        msg2: `Hello ${query}`,
    });
}


//3. Export default
//3.2 Named Export
// { Key : Value }
module.exports = { POST: POST };