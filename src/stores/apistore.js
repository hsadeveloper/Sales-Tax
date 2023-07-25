/*
  Any name beginning with $ is assumed to refer to a store value. It's effectively a reserved character — Svelte will prevent you from declaring your own variables with a $ prefix.

*/



// @ts-nocheck
import { writable } from "svelte/store";

export const salesData = writable ( []);

var zip_code = '';
// @ts-ignore
export const fetchSales = async (zip_code ) =>{
 
    const url  = 'https://api.api-ninjas.com/v1/salestax?zip_code=' + zip_code
    const res  = await fetch (url, {
        method: "GET",
        headers: {
            'X-Api-Key': "ynwR/S8r/1Gan8Slef3sjA==UiTTlTg2jdpnnj6m",
            "Content-Type": "application/json"
        }
      });

    
    const data = await res.json(); 
    console.log(data);

    // @ts-ignore
    const loadSales = data.map(( data ) => {
    
        return {
            total_rate : data.total_rate      
        };
    });

    salesData.set ( loadSales );
};
