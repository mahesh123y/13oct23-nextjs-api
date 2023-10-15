// Import Area



// 2. Define Area 

export async function POST(req){
    const { ajaxTemplate, isFreshCustomer } = await req.json();
                        //object.property.property
    const searchParams = req.nextUrl.searchParams;
    const hashCustomerAndSessionId = searchParams.get('hashCustomerAndSessionId');

    //every function return something

    return Response.json({
        msg1 : `Hello ${ajaxTemplate}`,
        msg2 : `Hello ${isFreshCustomer}`,
        msg3 : `Hello ${hashCustomerAndSessionId}`,
    })
}

// Export Area