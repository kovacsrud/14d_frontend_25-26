import { NextResponse } from "next/server";
import { getCustomerIncome } from "../../../../../../../dblib/db";


export async function GET(req,{params}){
    const {also,felso}=await params;
    console.log(also,felso);

    if(!also || !felso){
        return NextResponse.json({message:"Hiányos paraméterek"},{status:404});
    }

    try {
        const customers=await getCustomerIncome(also,felso);
        if(customers.length<1){
            return NextResponse.json({message:"Nincsenek a feltételeknek megfelelő adatok!"},{status:404});
        }
        return NextResponse.json(customers,{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"Hiba"+error},{status:500});
    }


}