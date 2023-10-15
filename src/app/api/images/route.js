//1. Import area



//2. Define area

export async function POST(req){
    const { time, rand } = await req.json();

    // every function return something

    return Response.json({
        msg1 : `Hello ${time}`,
        msg2 : `Hello ${rand}`,
    })
}