<template>
  <div>
    <Container>
      <div class="profile-container">
        <UserBar username="Fernanda"
          :userInfo="{
            posts: 4,
            followers: 100,
            following: 400
          }"
        />
        <ImageGallary :posts="[{
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuxZXwFELXTpJBVEI7WG4U3BiZHZBy46LA6YkeBD_pQpomGOCa3ALFuxCjHTK3AemG1w&usqp=CAU',
        },
        {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhuxZXwFELXTpJBVEI7WG4U3BiZHZBy46LA6YkeBD_pQpomGOCa3ALFuxCjHTK3AemG1w&usqp=CAU',
        }
        ]"
        />
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "./Container.vue"
import UserBar from "./UserBar.vue"
import ImageGallary from "./ImageGallary.vue"
const data = [
  {
    id: 1,
    username: 'selena',
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    caption: "hi! everyone"
  },
  {
    id: 2,
    username: 'fernanda',
    url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    caption: "hello there!"
  }
]
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
</style>

