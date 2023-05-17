export default defineEventHandler(async (event)=>{
    const {code}=event.context.params;
    const {apiSecret} = useRuntimeConfig();
    const uri = `https://api.currencyapi.com/v3/latest?apikey=${apiSecret}&currencies=${code}`
    const {data} = await $fetch(uri)
    return data;
})