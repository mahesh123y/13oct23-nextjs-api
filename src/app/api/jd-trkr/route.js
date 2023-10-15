// 1. Import Area



//2. Define Area

async function POST(req) {
    const { city, national_catid } = await req.json();
                        //object.property.property
    const searchParams = req.nextUrl.searchParamsy
    const query = searchParams.get('searchReferer')
    //every function return something
    return Response.json({
        msg1: `Hello ${city}`,
        msg2: "Hello " + national_catid,
        msg3: `Hello ${query}`,
    });
}


//3. Export default
//3.2 Named Export
// { Key : Value }
module.exports = { POST: POST };