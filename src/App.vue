<template>
    <div id="app">
        <MyComponent>
            <router-view />
        </MyComponent>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MyComponent from "@/components/MyComponent.vue";

export default defineComponent({
    name: "App",
    components: {
        MyComponent
    }
});
</script>

<style lang="scss">
html,
body,
.page-wrapper {
    box-sizing: border-box;
    height: 100%;
}

body {
    width: 100%;
    overflox-x: hidden;
}

* {
    box-sizing: inherit;
}

img {
    display: block;
}
</style>
