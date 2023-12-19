<template>
    <div>
        <button
            class="field"
            @click="$emit('click', $event)"
        >
          <span>{{label}}</span>
        </button>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: "",
        },
        click:{
          type:Boolean,
          default:false,
        },
        
    },
};
</script>
<style></style>
