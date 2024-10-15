<script setup lang="ts">


import { container } from '@/container/container'
import { TestUserService } from '@/services/testUserService'
import type { UserInterface } from '@/interfaces/UserInterface'
import { ref } from 'vue'

const userService  = container.resolve(TestUserService) as TestUserService;
const userData = ref<UserInterface[]>();
 userService.list().then((users: UserInterface[])=>{
   console.log(users)
   userData.value = users;
});

</script>


<template>
  <div>Home Page</div>
  <div v-for="user in userData" :key="user.id">
   <div><img class="image-avatar" width="50px" :src="user.avatar" alt=""> {{user.first_name}} {{user.last_name}}</div>
  </div>
</template>

<style>
.image-avatar{
  border-radius: 50%;
}
</style>
