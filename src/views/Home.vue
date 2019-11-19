<template>
    <div class="home">
        <Form/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Form from '@/components/Questionnaire.vue';

    export default {
        name: 'home',
        components: {
            Form,
        },
    };
</script>