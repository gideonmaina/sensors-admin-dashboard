<template>
    <span class="loader">
  <span class="inner"></span>
</span>
</template>
<style scoped>

.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  animation: ring 1.5s linear infinite;
  
}

.loader::before{
  width: 24px;
  height: 24px;
  border: 4px solid #3be8b0;
  top:12px;
  left:12px;
}
.loader::after {
  width: 48px;
  height: 48px;
  left: 0;
  top: 0;
  border:8px solid #0cb67e; 
  animation-delay: 0.5s;
  
}
.loader .inner{
  position:absolute;
  width:16px;
  height:16px;
  background-color:#1fa97b;
  left:16px;
  top:16px;
  border-radius:50%;
}
@keyframes ring {
  0% {
    transform: scale(0.4);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

</style>