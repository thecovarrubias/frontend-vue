import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {

  state: () => ({
    apiUrl: "http://127.0.0.1:8000/api/v1/products",

    products: [],

    product: {
      name: "",
      price: null,
      description: "",
    },
  }),

  actions: {
    async getProducts() {
      try {
        const resp = await fetch(`${this.apiUrl}/`);
        const data = await resp.json();

        this.products = data;
      } catch (err) {
        console.error(err);
        this.products = [];
      }
    },

    async onSubmit() {
      try {
        const productId = this.product.id;
        const apiUrl = productId ? `${this.apiUrl}/${productId}/` : `${this.apiUrl}/`;

        const resp = await fetch(apiUrl, {
          method: productId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.product),
        });

        const data = await resp.json();
        console.log(data);

        this.product = {
          name: "",
          price: null,
          description: "",
        };

        this.getProducts();
      } catch (err) {
        console.error(err);
      }
    },

    async deleteProduct(id) {
      try {
        const resp = await fetch(`${this.apiUrl}/${id}/`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        const data = resp;
        console.log(data);

        this.getProducts();
      } catch (err) {
        console.error(err);
      }
    },

    updateProduct(item) { 
      this.product = { ...item }
    },
  }
})