<script setup>
defineProps({
  type: String,
});
</script>

<template>
  <div class="toast toast-top toast-center">
    <div
      v-if="type === 'success'"
      class="relative inline-flex items-center rounded-none alert alert-success anisuccess"
    >
      <font-awesome-icon
        icon="fa-solid fa-check"
        class="w-5 h-5 text-green-700"
      />
      <span>Your password has copied.</span>
    </div>
    <div
      v-if="type === 'error'"
      className="alert alert-error relative rounded-none anierror inline-flex items-center"
    >
      <font-awesome-icon icon="fa-solid fa-ban" class="w-5 h-5 text-red-700" />
      <span>Please select at least one character set.</span>
    </div>
  </div>
</template>

<style scoped>
.anisuccess::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: green;
  animation: anim 2s linear forwards;
}
.anierror::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: red;
  animation: anim 2s linear forwards;
}

@keyframes anim {
  100% {
    width: 0;
  }
}
</style>
