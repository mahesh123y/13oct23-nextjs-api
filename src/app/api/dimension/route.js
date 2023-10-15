// 1. Import Area



//2. Define Area

async function POST(req) {
    const { isDimensionSlotsAjax, asinList } = await req.json();
                        //object.property.property
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('productTypeDefinition');
    //every function return something
    return Response.json({
        msg1: `Hello ${isDimensionSlotsAjax}`,
        msg2: `Hello ${asinList}`,
        msg3: `Hello ${query}`,
    });
}


//3. Export default
//3.2 Named Export
// { Key : Value }
module.exports = { POST: POST };