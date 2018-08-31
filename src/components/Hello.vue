<template>
    <div class="title">
        <h1 v-text="this.user.firstName"></h1>
        <p v-if="active">My full name is {{fullName}}</p>
        <p v-else>But my first name is {{this.user.firstName}}</p>
        <button v-on:click="hideFullName">Hide Full Name</button>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "Boo"
    }
  },
  data() {
    return {
      title: "Hello World",
      user: {
        firstName: "John",
        lastName: "Doe"
      },
      active: true
    };
  },
  methods: {
    hideFullName: function() {
      this.active = !this.active;
    }
  },
  computed: {
    fullName: function() {
      return this.user.firstName + " " + this.user.lastName;
    }
  }
};
</script>

<style scoped>
.title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

