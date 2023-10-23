<script setup>
import { ref, reactive } from "vue";
import Toast from "./Toast.vue";

const newPassword = ref("3sd^$gv94ggg@23");
const toast = ref(false);
const typeToast = ref("error");
const formData = reactive({
  passwordLength: 6,
  number: false,
  letter: false,
  specialchar: false,
});

const submitForm = () => {
  const num = Number(formData.passwordLength);
  const initNumber = "0123456789";
  const initString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const initSpecial = "!@#$%^&*()";
  let initNewPassowrd = "";

  const randomPassword = (char) => {
    return char[Math.floor(Math.random() * char.length)];
  };

  const characterGroup = [];
  if (formData.number) {
    characterGroup.push(initNumber);
  }
  if (formData.letter) {
    characterGroup.push(initString);
  }
  if (formData.specialchar) {
    characterGroup.push(initSpecial);
  }

  if (characterGroup.length === 0) {
    typeToast.value = "error";
    handlerToast();
    return;
  }

  for (let i = 0; i < num; i++) {
    const randomCharSet =
      characterGroup[Math.floor(Math.random() * characterGroup.length)];
    initNewPassowrd += randomPassword(randomCharSet);
  }

  newPassword.value = initNewPassowrd;
};

const handleClipboard = async () => {
  try {
    navigator.clipboard.writeText(newPassword.value);
    typeToast.value = "success";
    handlerToast();
  } catch (error) {
    console.log(error);
  }
};

const handlerToast = () => {
  toast.value = true;
  setTimeout(() => {
    toast.value = false;
  }, 2000);
};
</script>

<template>
  <section class="flex flex-col w-full max-w-xl gap-10 mx-auto">
    <h1
      class="text-4xl font-bold tracking-widest text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400"
    >
      Generator Password!
    </h1>
    <div class="relative p-4 border border-orange-400 rounded-md">
      <p class="text-lg text-center text-orange-400">{{ newPassword }}</p>
      <font-awesome-icon
        @click="handleClipboard()"
        icon="fa-regular fa-clipboard"
        class="absolute w-8 h-8 transition-all translate-y-1/2 cursor-pointer bottom-1/2 right-10 active:scale-95"
      />
    </div>
    <div class="flex flex-col items-start justify-start w-full gap-4">
      <div class="inline-flex items-center w-full gap-4">
        <p class="flex-1 w-full max-w-fit">Password Length</p>
        <p class="w-6 text-lg font-bold">{{ formData.passwordLength }}</p>
        <input
          type="range"
          min="6"
          max="30"
          step="1"
          v-model="formData.passwordLength"
          className="range range-xs range-secondary flex-1"
        />
      </div>
      <label for="number" class="inline-flex items-center gap-4">
        <input
          id="number"
          type="checkbox"
          v-model="formData.number"
          className="checkbox checkbox-lg checkbox-secondary"
        />
        <p class="w-full">Number (0-9)</p>
      </label>
      <label for="letter" class="inline-flex items-center gap-4">
        <input
          id="letter"
          type="checkbox"
          v-model="formData.letter"
          className="checkbox checkbox-lg checkbox-secondary"
        />
        <p class="w-full">Letters (A-Z a-z)</p>
      </label>
      <label for="specialchar" class="inline-flex items-center gap-4">
        <input
          id="specialchar"
          type="checkbox"
          v-model="formData.specialchar"
          className="checkbox checkbox-lg checkbox-secondary"
        />
        <p class="w-full">Symbols (!@#$%^&()*)</p>
      </label>
      <button @click="submitForm()" className="btn btn-outline btn-secondary">
        Generate
      </button>
    </div>
    <Toast v-if="toast" :type="typeToast" />
  </section>
</template>
