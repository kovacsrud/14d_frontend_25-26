<script setup>
defineProps({post:Object})
</script>

<template>
    <div class="m-5 card w-96 bg-base-100 card-md shadow-sm">
        <div class="card-body">
            <h2 class="card-title">{{post.title}}</h2>
            <p>{{ post.body }}</p>
            <div class="justify-end card-actions">
                
            </div>
        </div>
    </div>
</template>