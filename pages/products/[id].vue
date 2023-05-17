<script setup>
    const {id} = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id;
    const {data:product} = await useFetch(uri);
    definePageMeta({
    layout:'products',
})
    if (!product.value) {
        throw createError({statusCode:404,statusMessage:'Product not found'});
    }
</script>

<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="descrition" :content="product.description"></Meta>
        </Head>

        <ProductDetails :product="product"/>
    </div>
</template>


<style>
</style>