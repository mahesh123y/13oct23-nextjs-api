// 1. Import Area



//2. Define Area

async function POST(req) {
    
                        //object.property.property
    const searchParams = req.nextUrl.searchParams
    const a = searchParams.get('a');
    const ref = searchParams.get('ref');
    const sa = searchParams.get('sa');
    const v = searchParams.get('v');
    const t = searchParams.get('t');
    const rst = searchParams.get('rst');
    const s = searchParams.get('s');
    // const query = searchParams.get('a')
    //every function return something
    return Response.json({
        msg3: `Hello ${a}`,
        msg2: `Hello ${ref}`,
        msg1: `Hello ${sa}`,
        msg4: `Hello ${v}`,
        msg5: `Hello ${t}`,
        msg6: `Hello ${rst}`,
        msg7: `Hello ${s}`,

    });
}


//3. Export default
//3.2 Named Export
// { Key : Value }
module.exports = { POST: POST };