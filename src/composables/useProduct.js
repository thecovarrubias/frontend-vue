import { ref } from "vue";

const useProduct = () => {
  const apiUrl = "http://127.0.0.1:8000/api/v1/products";

  const products = ref([]);
  const product = ref({
    name: "",
    price: null,
    description: "",
  });

  const getProducts = async () => {
    try {
      const resp = await fetch(`${apiUrl}/`);
      const data = await resp.json();

      products.value = data;
    } catch (err) {
      console.error(err);
      products.value = [];
    }
  };

  const onSubmit = async () => {
    try {
      const api = product.value.id ? `${apiUrl}/${product.value.id}/` : `${apiUrl}/`;

      const resp = await fetch(api, {
        method: product.value.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product.value),
      });

      const data = await resp.json();
      console.log(data);

      product.value = {
        name: "",
        price: null,
        description: "",
      };

      getProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const resp = await fetch(`${apiUrl}/${id}/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const data = resp;
      console.log(data);

      getProducts();
    } catch (err) {
      console.error(err);
    }
  }

  getProducts();

  return {
    /* Props */
    product,
    products,

    /* Functions */
    onSubmit,
    updateProduct: (item) => (product.value = { ...item }),
    deleteProduct
  }
}

export {
  useProduct
}