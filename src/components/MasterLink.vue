<template>
<nav>
    <a href="#">Home</a>
</nav>
</template>

<script>
export default {
  name: "Masterlink",
  data() {
    return {};
  }
};
</script>

<style scoped>
nav {
  display: flex;
  padding: 20px 12px;
  justify-content: center;
}

a {
  text-decoration: none;
  color: inherit;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
}

a:hover {
  color: #41b883;
}
</style>

