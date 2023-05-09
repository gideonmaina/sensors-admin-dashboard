
<script setup>
import { Form, Field,useForm } from 'vee-validate'; //review v4 docs https://vee-validate.logaretm.com/v4/
import * as yup from 'yup';
import { useAuthStore } from '@/stores'


const loginSchema = yup.object({
  email: yup.string().required().email().label('Email address'),
  password: yup.string().required().min(8),
});

// Initial values
const formValues = {
  email: 'gmainapro@gmail.com',
  password: '123456789',
};
const {handleSubmit} =useForm({
  initialValues: formValues,
})

let login_error=null;

const onSubmit= async (values)=>{
    //     return new Promise(resolve => {
        
    //     setTimeout(() => {
    //       resolve(console.log(values));
    //     }, 3000);
    //   })

    const authStore = useAuthStore();
    const { email, password } = values;
    const response=await authStore.login(email, password)
    console.log(`auth response: ${response}`)
    if(!response)login_error=true
}
// const onSubmit = handleSubmit(values => {
//      return new Promise(resolve => {
        
//         setTimeout(() => {
//           resolve(console.log(values));
//         }, 3000);
//       })
// });
</script>


<template>
    <div class="bg-white px-8 py-10 w-96 rounded shadow-md">
<Form @submit="onSubmit" :validation-schema="loginSchema" v-slot="{ errors,isSubmitting }" class="self-center">
    <div class="flex flex-col mb-4">
        <label>Email</label>
        <Field name="email" type="email" placeholder="name@codeforafrica.org" class="mt-2 px-2 py-1 " :value="formValues.email"/>
        <span class="text-rose-600 mt-2">{{ errors.email }}</span>
    </div>
    <div class="flex flex-col mb-4">
        <label>Password</label>
        <Field name="password" type="password" placeholder="**************" class="mt-2 px-2 py-1" :value="formValues.password"/>
        <span class="text-rose-600 mt-2">{{ errors.password }}</span>
    </div>
   
       
        <button type="submit" :disabled="isSubmitting" class="bg-indigo-500 flex content-center text-white  my-8 rounded-sm py-2 px-3 ">
            <span class="spinner mr-2" v-show="isSubmitting&&JSON.stringify(errors)==='{}'"> </span>
            <span class="text-base font-semibold">Login</span>
        </button>
     <span v-if="login_error" class="text-rose-600">Invalid credentials!</span>
</Form>
 <p>Contact your admin for account creation</p>
</div>
</template>

<style scoped>
.spinner {
    width: 24px;
    height: 24px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

    input{
        border-width: 4px;
        border-color:black;
    }
</style>