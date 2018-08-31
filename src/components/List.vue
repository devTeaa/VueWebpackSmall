<template>
  <table :class="tableClass">
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Website</th>
        <th>Company Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="user.id" v-for="(user, i) in objUser">
        <!-- User Id -->
        <td>{{user.id}}</td>

        <!-- Username -->
        <td v-if="editRow === user.id"><input type="text" v-model="user.username"></td>
        <td v-else>{{user.username}}</td>

        <!-- Email -->
        <td v-if="editRow === user.id"><input type="text" v-model="user.email"></td>
        <td v-else>{{user.email}}</td>

        <!-- Address -->
        <td v-if="editRow === user.id">
          <input type="text" v-model="user.address.street">
          <input type="text" v-model="user.address.city">
        </td>
        <td v-else>{{fullAddress(user.address.street, user.address.city)}}</td>

        <!-- Website -->
        <td v-if="editRow === user.id"><input type="text" v-model="user.website"></td>
        <td v-else>{{user.website}}</td>

        <!-- Company Name -->
        <td v-if="editRow === user.id"><input type="text" v-model="user.company.name"></td>
        <td v-else>{{user.company.name}}</td>

        <!-- Action button -->
        <td v-if="editRow === user.id"><button class="btnUpdate" v-on:click="sendUpdate(user)">Update</button></td>
        <td v-else>
          <button class="btnEdit" v-on:click="editRow = user.id">Edit</button>
          <button class="btnDelete" v-on:click="sendDelete(user.id, i)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      tableClass: "table",
      objUser: [],
      editRow: "",
      columnClass: "editMode",
      loading: false
    };
  },
  methods: {
    fullAddress(street, city) {
      return street + ", " + city;
    },
    sendUpdate(row) {
      this.editRow = "";
      fetch("https://jsonplaceholder.typicode.com/users/" + row.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(row)
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.status);
          } else {
            return response.json();
          }
        })
        .then(data => {
          alert("Updated for user " + data.username);
        })
        .catch(error => {
          alert(error);
        });
    },
    sendDelete(id, i) {
      this.editRow = "";
      fetch("https://jsonplaceholder.typicode.com/users/" + id, {
        method: "DELETE"
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.status);
          } else {
            return response.json();
          }
        })
        .then(data => {
          this.objUser.splice(i, 1);
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.objUser = data;
      });
  }
};
</script>

<style scoped>
.table {
  width: 100%;
  min-width: 600px;
  max-width: 100vw;
  border-collapse: collapse;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

@media (min-width: 998px) {
  .table {
    display: table;
  }
}

.table thead {
  background-color: #41b883;
  color: #fefefe;
}

.table th,
.table td {
  padding: 8px 12px;
}

.table tbody tr:nth-child(even) {
  background-color: #ccc;
}

.table input {
  width: 100%;
}

.table tbody .editMode {
  padding: 2px;
}

.table .btnEdit {
  background-color: #41b883;
  border: 0;
  padding: 8px 12px;
  margin: 4px 0;
  color: #fefefe;
  border-radius: 4px;
}

.table .btnEdit:active {
  background-color: #35976b;
}

.table .btnUpdate {
  background-color: #ffca28;
  border: 0;
  padding: 8px 12px;
  margin: 4px 0;
  color: #fefefe;
  border-radius: 4px;
}

.table .btnUpdate {
  background-color: #e6ac00;
}

.table .btnDelete {
  background-color: #c0392b;
  border: 0;
  padding: 8px 12px;
  margin: 4px 0;
  color: #fefefe;
  border-radius: 4px;
}

.table .btnDelete:active {
  background-color: #912c21;
}
</style>

