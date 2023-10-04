<template>
  <div class="flex align-items-center justify-between gap-2">
    <i :class="props.icon"></i>
    <h3 class="hidden md:block sm:block font-normal">{{ props.profile }}</h3>
    <span v-if="showBadge">{{ store.cartStates }}</span>
  </div>
</template>

<script setup lang="ts">
import { productStore } from "@/stores/Products";
import { defineProps } from 'vue';

const store = productStore();

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  state: {
    type: Number,
    default: 0,
  },
  profile: {
    type: String,
    default: "",
  },
  showBadge: {
    type: Boolean,
    default: true,
  },
});
</script>

