<script setup>
import { useProduct } from "../../composables/useProduct";

const { 
  product, 
  products, 
  onSubmit, 
  updateProduct, 
  deleteProduct 
} = useProduct();
</script>

<template>
  <div class="col-4">
    <form class="p-4 border rounded shadow-sm" @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          v-model="product.name"
          class="form-control"
          maxlength="100"
          placeholder="Product"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Price</label>
        <input
          v-model="product.price"
          class="form-control"
          max="9999999"
          min="1"
          placeholder="0.00"
          step=".01"
          type="number"
          required
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea
          v-model="product.description"
          class="form-control"
          maxlength="255"
          required
        />
      </div>

      <div class="d-grid gap-1">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

  <div class="col-8">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
          <td>
            <button
              type="button"
              class="btn btn-sm btn-warning"
              @click="updateProduct(product)"
            >
              Update
            </button>
            <button
              type="button"
              class="btn btn-sm btn-danger m-1"
              @click="deleteProduct(product.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>