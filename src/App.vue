<script setup lang="ts">
import { ref } from 'vue'
import routes from '@/routes'

const routerMenu = routes.filter((item)=> !Object.prototype.hasOwnProperty.call(item,'redirect'))
</script>
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          vue template
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab v-for="route in routerMenu" :to="route.path" :label="route.label"/>
      </q-tabs>
    </q-header>


    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>
