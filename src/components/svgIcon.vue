
<template>
    <!-- <div class="icon"> -->
    <svg :class="svgClass"
         aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
    <!-- </div> -->
</template>
 
<script>
export default {
    name: "svg-icon",
    props: {
        svgName: {
            type: String,
            required: true
        },
        className: {
            type: String
        }
    },
    computed: {
        iconName() {
            var icon = `#svg-${this.svgName}`;
            console.log(icon);
            return icon;
        },
        svgClass() {
            if (this.className) {
                return "svg-icon " + this.className;
            } else {
                return "svg-icon";
            }
        }
    }
};
</script>
 
<style scoped>
.icon {
    width: 50px;
    height: 50px;
}
.svg-icon {
    width: 50px;
    height: 50px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>