<template>
  <div class="flex align-items-center flex-nowrap gap-8 mt-8">
    <div>
      <img
        :src="product?.image"
        alt="product thumb"
        class="w-full max-w-19rem h-full max-h-25rem border-round-3xl"
      />
    </div>
    <div>
      <p>{{ product?.title }}</p>
      <p>Price - ${{ product?.price }}</p>
      <p>{{ product?.description }}</p>
      <Button
        label="Add to cart"
        icon="pi pi-cart-plus"
        @click="incrementCartState()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { productStore } from "@/stores/Products";


const props = defineProps({
  product : Object as () => IProduct
 })
 
const { incrementCartState } = productStore();
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch<{ data: IProduct }>(uri, { key : id as any });
</script>

