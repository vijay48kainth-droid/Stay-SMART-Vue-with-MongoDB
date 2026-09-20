<template>
    <head>
        <meta name="author" content="Vijay Kainth">
        <meta name="description" content="Stay SMART. Stay Secure Report page">
        <title>Stay Smart Report</title>
        
        
        <link rel="stylesheet" href="Cyber security Stay SMART style.css">
        <!--<link rel="JavaScript" href="Report.js">-->
        <meta charset="utf-8" />
    </head>
            <nav>
                <ul>
                    <li class="home-high">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li id="Do" class="do-high"><a href="Stay SMART Do's .html">Do's</a></li>
                    <li id="Dont" class="dont-high"><a href="Stay SMART Don'ts.html">Don'ts</a></li>
                    <li id="Internet" class="internet-high"><a href="Stay SMART internet.html">Internet-explained</a></li>
                    <li class="report-high">
                        <router-link to="/report">Report</router-link>
                    </li>
                    <li class="high"><a @click="handleEmailDisplay()">Subscribe</a></li>
                    <li id="nav-search"><input id="Search-box" type="text"placeholder="Search..."> <button>Search</button></li>
                </ul>
            </nav>
<div v-show="isEmailDisplay" class="email-display">
    <div class="email-container">
        <form @submit.prevent="reportSubscribe()" v-show="isEmailEnter">
            <h4>To subscribe to stay SMART, please enter your email below:</h4>
            <h4>Email:<input type="email" placeholder="Enter email address" field="subscirbe to stay SMART" v-model="emailHeader" required><button type="submit" >Submit email</button></h4>   
        </form>
        <div v-show="isEmailThanks" class="email-thanks">
            <h2>Thanks for subscribing to: <br></h2>
            <h2 class="email-thanks-message">Stay <span class="S">S</span><span class="M">M</span><span class="A">A</span><span class="R">R</span><span class="T">T</span></h2>
        </div>
        <img :src="image" class="report-email-image" >
    </div>
</div>

</template>

<script>

import { Text } from 'vue';

export default {
    name: "Navigation",
    props: {
        Home: String,
        Do: String,
        Dont: String,
        Internet: String,
        Report: String,
        image: String,
        saveLocation: String,

    },

    data() {
        return{
            isEmailDisplay: false,
            isEmailEnter: true,
            isEmailThanks:false,
            emailHeader: "",
        }
    },

    methods: {

 
    handleEmailDisplay() {
        this.isEmailDisplay = true
        

            },

    async reportSubscribe() {
        this.isEmailThanks = true
        this.isEmailEnter = false

        const emailHeader = this.emailHeader

        const payload = {
               emailHeader: emailHeader
        }

        const response = await fetch(this.saveLocation, {
            method: 'post',

            body: JSON.stringify(payload),

            headers: {

                'Accept': 'application/json',
                'Content-type': 'application/json'    
            },

        })
        const jsonRes = await response.json()
        console.log(jsonRes)
        }
    }


}
</script>

<style>

.router-link-exact-active {
    font-weight: bold;
}

</style>