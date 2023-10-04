<template>
  <div class="mx-8 my-8">
    <div class="grid">
      <ProductCard
        class="md:col-12 col-12 lg:col-4"
        v-for="product in store.productList"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/Products";

const store = productStore();


onBeforeMount(async () => {
  await store.fetchProducts();
});
</script>