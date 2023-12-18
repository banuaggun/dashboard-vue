<template>
  <div>
    <form>
      <div>
        <input type="text" id="name" v-model="name" :disabled="!editing" />
      </div>
      <div>
        <input type="email" id="email" v-model="email" :disabled="!editing" />
      </div>
      <div>
        <input type="tel" id="phone" v-model="phone" :disabled="!editing" />
      </div>
      <div>
        <button :class="{edit: !editing}" @click.prevent="editing = !editing">{{ editing ? 'Save' : 'Edit' }}</button>
        <button v-if="editing" @click.prevent="cancel()">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '555-555-5555',
      editing: false,
      originalName: '',
      originalEmail: '',
      originalPhone: '',
    };
  },
  methods: {
    cancel() {
      this.name = this.name;
      this.email = this.email;
      this.phone = this.phone;
      this.editing = false;
    },
  },
  watch: {
    name(value) {
      if (!this.originalName) {
        this.originalName = value;
      }
    },
    email(value) {
      if (!this.originalEmail) {
        this.originalEmail = value;
      }
    },
    phone(value) {
      if (!this.originalPhone) {
        this.originalPhone = value;
      }
    },
  },
};
</script>
<style>
input{
  border:0;
  background-color:transparent;
  color:#100;
}
button.edit:focus input{
  border-bottom: 2px solid #f00;
}


</style>