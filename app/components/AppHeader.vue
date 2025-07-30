<template>
  <!-- Header -->
  <header class="bg-white shadow p-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/">
        <h1 class="text-2xl font-bold">hogehoge dev</h1>
      </NuxtLink>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/profile">Profile</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
