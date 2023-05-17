<script setup>
import sourceData from '/currencies.json';

const currrencyCode = ref({
    code:''
});
const result = reactive({
    code:null
});


watch(currrencyCode,async ()=>{
        const  response  = await fetch(`/api/currency/${currrencyCode.value}`)
        const data = await response.json()
        result.code = data;
})
</script>

<template>
    <div>
        <h1>About</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione dolor at voluptas consectetur culpa dolorem
            quos voluptatem minima repellendus?</p>
        <div class="container my-7 py-7">
            <select v-model="currrencyCode" class="p-4 rounded">
                <option value="" disabled selected>Please Select a Currency</option>
                <option :value="currency.code" v-for="currency in sourceData">
                    {{ currency.code }} - {{ currency.name }}
                </option>
            </select>
        </div>
        <div v-if="result.code">
            <div>
                1 USD is equal to {{ result.code[Object.getOwnPropertyNames(result.code)[0].toString()].value }}  {{ currrencyCode }}
            </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-7">
            <div v-for="currency in sourceData" class="bg-white shadow-md p-4 rounded flex justify-between items-center">
                <div class="">{{ currency.name + ' / ' + currency.code }}</div>
                <div class="bg-green-500 rounded-lg w-14  text-center">{{ currency.symbol }}</div>
            </div>
        </div>
    </div>
</template>


<style></style>