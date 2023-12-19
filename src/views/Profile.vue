<template>
  <div class="profile-page">
    <div class="profile-page-wrapper">
      <div class="column column-1">
        <h1>Hi, Jane</h1>
        <div class="profile-area">
          <form>
            <img src="../assets/color.jpg" style="width:80px; height:80px; border-radius:50%; border:1px solid lightblue;"/>
            <div>
              <BaseInputVue id="name" v-model="name" :disabled="!editing" />
              <BaseInputVue id="email" v-model="email" :disabled="!editing" />
              <BaseInputVue id="phone" v-model="phone" :disabled="!editing" />
            </div>
            <div>
              <button label="edit" :class="{edit:!editing}" @click.prevent="editing = !editing">
                {{editing ? 'Save' : 'Edit'}}
              </button>
              <button v-if="editing" @click.prevent="cancel()">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="column column-2">
        <OverviewProfileVue/>
      </div>
      <div class="column column-3">3</div>
    </div>
   
  </div>
</template>

<script>
import BaseButtonVue from '../components/BaseButton.vue';
import BaseInputVue from '../components/BaseInput.vue';
import OverviewProfileVue from '../components/OverviewProfile.vue';
export default {
  data() {
    return {
      name: 'Jane Madelaine',
      email: 'janemadelaine@example.com',
      phone: '555-555-5555',
      editing: false,
      originalName: '',
      originalEmail: '',
      originalPhone: '',
    };
  },
  components:{BaseInputVue, BaseButtonVue, OverviewProfileVue},
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
.profile-page-wrapper{
  display:grid;
  grid-template-columns: repeat(auto-fit, 25rem);
  justify-content:space-evenly;
}
.column{
  border:1px solid fuchsia;
  height:100vh;
  padding:20px 0;
}
input{
  width:100%;
  border:0;
  background-color:transparent;
  color:#100;
}
button.edit:focus input{
  border-bottom: 2px solid #f00;
}


</style>