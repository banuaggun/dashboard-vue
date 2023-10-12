<template>
  <div class="topnav">

    <div class="topnav__left">
      <router-link to="/" class="topnav__left__logo">
      <span>Dashboard Vue</span>
    </router-link>
    </div>

    <div class="topnav__center">
      Github
    </div>

    <div class="topnav__right">
      <div class="dropdown" @mouseover="showMenu = true" @mouseleave="showMenu = false" id="notifications">
        <button>
          <i class="ph-thin ph-bell"></i>
        </button>
        <DropdownMenuItem v-if="showMenu" class="dropdown-menu" id="notifications"  ref="notifications" />
      </div>
      
      <div class="dropdown" @mouseover="showItem = true" @mouseleave="showItem = false" id="messages">
        <button>
          <i class="ph-thin ph-chat-circle-text"></i>
        </button>
           <DropdownMenuItem v-if="showItem" class="dropdown-menu" id="messages" ref="messages" />
        
      </div>
 
      
    </div>
    
  </div>
</template>
<script>
import DropdownMenuItem from './DropdownMenuItem.vue'
export default{
  components:{
    DropdownMenuItem
  },
  data(){
    return{
      showMenu:false,
      showItem:false
    }
  }
}
</script>
<style>
.dropdown:hover .dropdown-menu {
  display: block;
}

#notifications.dropdown-menu{
  width:300px;
  height:300px;
  top:70px;
  right:80px;
}

#messages.dropdown-menu{
  width:300px;
  height:300px;
  top:70px;
  right:40px;
}

.dropdown-menu{
  position:absolute;
  border:1px solid green;

  z-index:9999;
}
  .topnav{
    width:100%;
    top:0;
    position:sticky;
    height:80px;
    background-color:lemonchiffon;
    display:flex;
    flex:1 1 1;
  }

  .topnav__left{
    width:30%;
    border:1px solid black;
  }
  .topnav__left__logo{
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration: none;
    font-weight:900;
    font-size:2rem;
  }

  .topnav__center{
    width:35%;
    border:1px solid pink;
  }

  .topnav__right{
    width:35%;
    font-size:2rem;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding-right:40px;
    border:1px solid blue;
  }

  .topnav__right i{
    margin-left:20px;
    border:1px solid blue;
  }
</style>