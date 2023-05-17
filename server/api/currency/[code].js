export default defineEventHandler(async (event)=>{
    const {code}=event.context.params;
    const {currencyKey} = useRuntimeConfig();
    const uri = `https://api.currencyapi.com/v3/latest?apikey=QynhhUsGlNAuuww3vyVmeYtpybthm8D9dr7B0H1W&currencies=${code}`
    const {data} = await $fetch(uri)
    return data;
})