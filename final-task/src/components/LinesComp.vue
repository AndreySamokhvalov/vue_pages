<template>
    <div class="lines center">
        <svg width="1" height="3145" viewBox="0 0 1 3145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.500122" y1="7.48501e-08" x2="0.500082" y2="3144.64" stroke="#E6E6E6" />
        </svg>
        <svg width="1" height="3145" viewBox="0 0 1 3145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.500122" y1="7.48501e-08" x2="0.500082" y2="3144.64" stroke="#E6E6E6" />
        </svg>
        <svg width="1" height="3145" viewBox="0 0 1 3145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.500122" y1="7.48501e-08" x2="0.500082" y2="3144.64" stroke="#E6E6E6" />
        </svg>
        <svg width="1" height="3145" viewBox="0 0 1 3145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.500122" y1="7.48501e-08" x2="0.500082" y2="3144.64" stroke="#E6E6E6" />
        </svg>

    </div>
</template>

<script>
export default {
    name: 'LinesComp',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.lines {
    flex-wrap: wrap;
    fill: #292f36;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    gap: 398px;
}

.center {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}
</style>