<template>
    <header>
    <div id="header">
        <div id="logo-headtag">   
            <h1 :style="{color:textColor}" class="header-font"> Stay <span class="S">S</span><span class="M">M</span><span class="A">A</span><span class="R">R</span><span class="T">T</span>. stay secure. </h1>
            <h2 :style="{color:textColor}" class="header-font"> Think <span class="S">S</span><span class="M">M</span><span class="A">A</span><span class="R">R</span><span class="T">T</span>{{ title }}</h2>
        </div>
        <img :src="image" class="header-image">
    </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
    props: {
        title: String,
        color: String,
        bgColor: String,
        image: String,
        textColor: String,
        
    },

}



</script>

<style>

.textColor{
    color:white;
}


</style>
