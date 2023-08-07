<template>
  <nav
    class="navbar navbar-expand-lg bg-dark border-bottom border-body"
    data-bs-theme="dark"
  >
    <div class="container-fluid d-flex justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            to="/ProductsList"
          >
            Products
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>