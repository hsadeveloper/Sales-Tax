/*
  Any name beginning with $ is assumed to refer to a store value. It's effectively a reserved character — Svelte will prevent you from declaring your own variables with a $ prefix.

*/

import { writable } from "svelte/store";
import { PUBLIC_API_KEY } from '$env/static/public'

export const salesData = writable ( []);

export async function load() {
    console.log("keyyyyy"+PUBLIC_API_KEY) // secret 🤫
  }

var zip_code = '';
// @ts-ignore
export const fetchSales = async (zip_code ) =>{
 
    const url  = 'https://api.api-ninjas.com/v1/salestax?zip_code=' + zip_code
    const res  = await fetch (url, {
        method: "GET",
        headers: {
            'X-Api-Key': PUBLIC_API_KEY,
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
