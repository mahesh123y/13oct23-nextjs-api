// 1. Import Area



//2. Define Area

async function POST(req) {
    const { ajaxTemplate, pageType, hmDataAjaxHint, isFreshCustomer, isPrimeMember, isPrimeDay, isBackup, navDeviceType } = await req.json();

    //every function return something
    return Response.json({
        msg1: `Hello ${ajaxTemplate}`,
        msg2: "Hello " + pageType,
        msg3: `Hello ${hmDataAjaxHint}`,
        msg4: `Hello ${isFreshCustomer}`,
        msg5: `Hello ${isPrimeMember}`,
        msg6: `Hello ${isPrimeDay}`,
        msg7: `Hello ${isBackup}`,
        msg8: `Hello ${navDeviceType}`,
    });
}


//3. Export default
//3.2 Named Export
// { Key : Value }
module.exports = { POST: POST };