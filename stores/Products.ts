import { defineStore } from "pinia";
import { ref, computed, Ref } from 'vue';


export const productStore = defineStore("productStore", () => {
  const products: Ref<IProduct[]> = ref([]);
  const searchTerm: Ref<string> = ref("");
  const cartState: Ref<number> = ref(0);

  const productList = computed(() => {
    if (searchTerm.value.length === 0) return products.value;
    return products.value.filter((p) => p.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
  });

  const updateSearchTerm = (value: string) => {
    searchTerm.value = value;
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: IProduct[] = await response.json();
      products.value = data;
    } catch (error) {
      console.error(error);
    }
  };
  const getSingleProduct = (id: number) => {
    return products.value.find((p) => p.id === id);
  };

  const cartStates = computed(() => {
    return cartState.value;
  });

  const incrementCartState = () => {
    cartState.value++;
  };
  
  onBeforeMount(async () => {
    await fetchProducts();
  });




  return {
    products,
    searchTerm,
    cartState,
    cartStates,
    productList,
    updateSearchTerm,
    fetchProducts,
    incrementCartState,
    getSingleProduct,
   
  };
});
