<template>

    <div>

        <Header
            title=" Think SMART before you click."
            :image="top"
           
        />

        <Navigation :image="sub" 
             saveLocation="/save-home-email"
        />
        <div class="main-content">

            <Main-header/>
            <h2>Welcome to Stay SMART Online</h2>

            <p>
                This is the homepage.
            </p>

            <p>
                This page is using the same Header component as the report page.
            </p>

        </div>

        <Footer />

    </div>

</template>

<script>

import Header from './Header.vue'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'

export default {

    name: 'Home',

    components: {
        Header,
        Navigation,
        Footer
    },

    data() {
        return {

            top: "/Report-images/report-page-header-image.svg",

            sub: "/Report-images/email-report-phone.svg"

        }
    }

}

</script>

<style>



</style>