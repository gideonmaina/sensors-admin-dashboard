
<script setup>
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
</script>


<template>
    <div class="bg-white px-8 py-10 w-96 rounded shadow-md">
<Form :validation-schema="schema" class="self-center">
    <div class="flex flex-col mb-4">
        <label>Email</label>
        <Field name="email" type="email" placeholder="name@codeforafrica.org" class="mt-2 px-2 py-1"></Field>
    </div>
    <div class="flex flex-col mb-4">
        <label>Password</label>
        <Field name="password" type="password" placeholder="**************" class="mt-2 px-2 py-1"></Field>
    </div>
    <button class="bg-sky-500 hover:bg-sky-700 my-8 rounded-sm p-2 c-white">
        Login
    </button>
</Form>
 <p>Contact your admin for account creation</p>
</div>
</template>

