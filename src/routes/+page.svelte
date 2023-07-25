<div class="... flex items-center justify-center ">
  <a href="./about" class="text-xl text-white-600 mt-8 mb-19" > about </a>
</div>

<script>
    let zip_code=""

    import  {salesData, fetchSales} from "../stores/apistore"  
</script>

<div class="... flex items-center justify-center mt-14 mb-8 text-2xl">
  <h1> Wellcome to Sales Tax Finder by ZIP Code </h1>
</div>


<form>
  <div class="grid gap-5 mb-6 md:flex md:justify-center mt-20">
      <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Zip Code</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zip Code" required bind:value={zip_code}>
      </div>

      <div class="grid gap-5 mb-6 md:flex md:justify-center mt-8">
        <button type="submit" class="text-white  ml-8  md:justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" on:click={() => fetchSales(zip_code)}>Search</button>
     </div>
     
    </div>  
  
  
</form>

{#each $salesData as sale }
  <div  class="... flex items-center justify-center ">
   <h1 class="grid gap-5 ml-8  bg-indigo-500 mb-8 md:flex md:justify-center mt-8 px-9 text-xl text-white-600  py-6"> {sale.total_rate * 100} % </h1>
</div>
{/each}
