<template>

    <div class="box is-info">

        <p>
            <slot></slot>
        </p>

    </div>


</template>




<script>
    export default {

    }
</script>




<style>

    .box {
        background-color: lightgray;
        padding: 10px;
        border:1px solid black;
        margin-bottom:5px;
    }

</style>