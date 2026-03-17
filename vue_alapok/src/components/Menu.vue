<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <div class="navbar bg-sky-300 shadow-sm">
        <div class="flex-1">
            <RouterLink to="/" class="btn btn-ghost text-xl">Főoldal</RouterLink>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><RouterLink to="/posts">Posztok</RouterLink></li>               
            </ul>
        </div>
    </div>

</template>