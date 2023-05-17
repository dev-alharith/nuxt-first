<script setup>
    const {data} = await useFetch('/api/currency/USD');
</script>

<template>
    <div>
        <h1>About</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ratione dolor at voluptas consectetur culpa dolorem quos voluptatem minima repellendus?</p>
        <div>
            {{ data }}
        </div>
    </div>
</template>


<style>
</style>