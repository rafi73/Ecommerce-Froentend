<template>
    <div>
        <li v-for="(route, index) in routes" :key="index">
            <a href="#" @click.prevent="goToRoute(route.name)" class="current-page">{{ route.meta.title }}</a>
        </li>
    </div>
</template>

<script>
export default {
    props: ['routes'],
    methods: {
        goToRoute(routeName){
            return this.$router.push({ name: routeName })
        }
    }
}
</script>

