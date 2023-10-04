<template>
  <div
    class="h-20rem flex flex-column mt-3 justify-content-between p-3 border-1 surface-border border-round-sm"
  >
    <div>
      <img
        class="w-max max-w-11rem h-11rem border-round-md sm:w-max md:w-max"
        :src="props.product?.image"
      />
    </div>
    <p
      class="surface-overlay white-space-nowrap overflow-hidden text-overflow-ellipsis"
    >
      {{ props.product?.title }}
    </p>
    <div class="flex flex-row justify-content-between align-items-center">
      <NuxtLink :to="`/products/${props.product?.id}`" class="inline-block">
        <Button label="View" />
      </NuxtLink>
      <Button
        label="Add to cart"
        icon="pi pi-cart-plus"
        @click="incrementCartState()"
        class="w-min md:w-max"
        
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { productStore } from "@/stores/Products";

const props = defineProps({
  product: Object as () => IProduct,
});

const { incrementCartState } = productStore();
</script>
