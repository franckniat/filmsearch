<script setup lang="ts"></script>
<template> 
  <div>
    <!-- The current route is accessible as $route in the template -->
    Feature {{ $route.params.feature }}
  </div>
</template>