

<template>

<div v-show="isReportVue" >    

    <Header 
      title=" when your attacked." 
      :image="top"  
      
    /> <!--This image is from this file, but is for the header component-->

<div>
    <Navigation 
    :image="sub"/> <!--This image is from this file, but is for the navigation component-->

</div>

   <div class="main-content">
        <h2><u>Think SMART before you tap, type or click.</u></h2>
        <h3>Tell us what happened.</h3>
        <p class="shared-font-style">If you have been a victim of a cyber-crime or are affected by cyber-criminals please report it to us and we will help you.</p>

        <p class="shared-font-style">Please make a report if you need help.</p>
        <h2>Report process</h2>
        <p class="shared-font-style">To make a report you must follow 3 steps:</p>
    </div class="main-content">

    <Report-steps />
 
    <div class="main-content-2">
        <h3>Required information</h3>
        <p class="shared-font-style">You must give a name and an email address to make a report.</p>
        <p class="shared-font-style">Click on the form to begin your report.</p>
        <div>
            <a class="start-report-form" @click="handleStartReportFunction()">
                <img style="width:12%;" :src="begin"> <!--This image is from this file-->
            </a>
        </div>
    </div class="main-content-2">

</div class="report-view">
    

            <div v-show="isFirstVue" id="Edit-view" @submit="handleEditView()">


                <div class="report-form-margin">
                    <div id="report-form-container">

                    <u><h1>Report-form</h1></u>

                    <form>
                        <hr style="border:solid red;">
                        <span>Name:</span>
                        <input type="text" v-model="name" placeholder="Required" class="edit-info" required>
                        <hr style="border:dashed orange;">
                        <span>Other names:</span>
                        <input type="text" v-model="othername" class="edit-info" >
                        <hr style="border:dotted yellow;">
                        <span>Date of incident:</span>
                        <input dir="ltr"; v-model="date" type="date" class="edit-info" >
                        <hr style="border: solid green;">
                        <span>Incident description:(extend text box as necessary)</span>
                        <textarea v-model="incident" placeholder="Required" required></textarea>
                        <hr style="border: dotted blue;">
                        <span>Email address:</span>
                        <input type="email" v-model="email" placeholder="Required" class="edit-info" required>
                        <hr style="border:dashed indigo;">
                        <span>Phone number (optional):</span>
                        <input class="edit-info" v-model="phone" />

                        <hr style="border: dotted violet;">

                        <p>Are you contancting us for advice or assistance:</p>
                        <label>
                            <input value="Advice" type="radio"
                        name="advice or assistance">Advice
                        </label>
                        <label>
                            <input value="Assistance" type="radio"
                        name="advice or assistance">Assistance
                        </label>
                        <span><h4>Continue report</h4></span>
                        <button class="next-button" type="submit">Next</button>
                    </form>   
                    </div>
                    
                </div>
            </div>
        
    

        <div v-show="isSecondVue">

  
            <div class="report-form-margin">
                <u><h1>Confirm-report</h1></u>
                    
                <div>
                    <hr style="border:solid red;">
                    <span>Name:</span><p class="confirm-text">{{ name }}</p>
                </div>
                <div>
                    <hr style="border:dashed orange;">
                    <span>Other name:</span><p class="confirm-text">{{ othername }}</p>
                </div>
                <div>
                    <hr style="border:dotted yellow;">
                    <span>Date of incident:</span><p class="confirm-text">{{ date }}</p>
                </div>
                <div>
                    <hr style="border: solid green;">
                    <span>Incident description:</span><p class="confirm-text">{{ incident }}</p>
                </div>   
                <div>
                    <hr style="border: dotted blue;">
                    <span>Email validation:</span><p class="confirm-text">{{ email }}</p>
                </div>
                <div>
                    <hr style="border:dashed indigo;">
                    <span>Phone number (optional):</span><p class="confirm-text">{{ phone }}</p>
                </div>
                <div>
                    <hr style="border: dotted violet;">
                <p>Are you contancting us for advice or assistance:</p>
                    <label>
                        <input id="confirm-advice" type="radio" disabled >Advice
                    </label>
                    <label>
                        <input id="confirm-assistance" type="radio" disabled >Assistance
                    </label>
                <div style="margin-top:10px;">
                    <button style="color:white; background-color: red;" id="back-button" @click="handleConfirmView()">Back</button>
                    <button style="color:white; background-color: green;" id="submit-button" @click="handleSentView()">Submit</button>
                </div>
                </div>

            </div>
        </div>

        
            <div v-show="isThirdVue" >

            <Report-steps step1High="blank" step2High="blank" id="space-under-report-process" />

                <div id="report-sent">
                    <div class="send-report-image-container">
                        <img id="space-under-report-process" class="report-image" :src="thank" >
                        <img id="space-under-report-process" class="report-image" :src="you" >  
                    </div>
                    <div class="thank-you-style">
                        <div style="display:flex; align-items:flex-end;" class="shared-font-style">
                            <h2 >Thank you&nbsp;{{ name }}</h2>
                            <div v-if="LastNameContainer">
                                <h2>&nbsp;{{ othername }}</h2>
                            </div>
                            <h2>&nbsp;for making this report</h2>
                        </div>
                        <div>
                            <p class="shared-font-style">You will be contacted by us and offered support with the threat you are dealing with</p>
                        </div>
                    </div>

                    <div id="thanks-email-container" >
                        <text>Please subscribe to us with your email:</text>
                            <input v-model="email" placeholder="type email here" id="thank-email" style="width: 40%; color:yellow;">
                        <button style="cursor:pointer; color: orange"><i><b>Submit email</b></i></button>
                    </div>
                </div>
            </div>

    <Footer />

</template>

<script>
import Header from './Header.vue'
import Navigation from './Navigation.vue'
import ReportSteps from './Report-steps.vue'
import Footer from './Footer.vue'
export default {
    name: 'App',
     components: {
        Header,
        Navigation,
        ReportSteps,
        Footer
    },
    data() {
        return {
            top: "/Report-images/report-page-header-image.svg",
            sub: "/Report-images/email-report-phone.svg",
            begin: "/Report-images/start-form.png",
            thank: "/Report-images/thank-image.jpg",
            you: "/Report-images/you-image.jpg",
            name:"",
            othername:"",
            date:"",
            incident:"",
            email:"",
            phone:"",
            isReportVue: true,
            isFirstVue: false,
            isSecondVue: false,
            isThirdVue: false
        }
    },
    methods: {

            handleStartReportFunction() {
                this.isReportVue = false, this.isFirstVue = true
            },

            handleEditView() {

            if (this.othername === "") {
                this.othername = "N/A"
            } if (this.date === "") {
                this.date = "N/A"
            } if (this.phone === "") {
                this.phone = "N/A"
            }
                
                // Advice / Assistance 

                const selected = document.querySelector(
                    'input[name="advice or assistance"]:checked'
                );

                if (selected){
                    document.getElementById("confirm-advice").checked = 
                        selected.value === "Advice";

                    document.getElementById("confirm-assistance").checked = 
                        selected.value === "Assistance";
                }
    
                event.preventDefault();
                
                this.isFirstVue = false, this.isSecondVue = true
            },

            handleConfirmView() {
                this.isSecondVue = false, this.isFirstVue = true

                if (this.othername === "N/A") {
                    this.othername = ""
                } if (this.phone === "N/A") {
                    this.phone = ""
                }
            },

            handleSentView(){
                
                this.isSecondVue = false, this.isThirdVue = true

                if (this.othername === "N/A") {
                    this.LastNameContainer = false
                } else {
                    this.LastNameContainer = true
                }

            }

}
   

}



</script>

<style>

.header-image {
    width: 9%;
    border-top-right-radius: 30%;
    border-bottom-right-radius: 20%;
}


/*

#Report{
    font-weight:bold;
}

*/


.header-image {
    width:9%;
    border-top-right-radius: 30%;
    border-bottom-right-radius: 20%;
}


.email-container{
    background-color: darkslateblue;
}

.report-email-image{
    width:6%;
}

.main-content,.main-content-2{
    margin: 0 8% auto;
    padding:2%;
    background-color: blanchedalmond;
}

.main-content {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 30%;
}

.main-content-2{
    border-top-left-radius: 12px;
    border-top-right-radius: 30%;
}

.report-font{
    font-family:monospace ;
}


.report-process{
    display:flex;
    flex-direction:row;
    justify-content: center;
    div{
        display:flex;
        flex-direction:column;
        align-items: center;
        width:33%;
        h3{
            padding: 0;
            margin:0;
        }

    }
}
#space-under-report-process{
    margin-bottom: 4%;
}

.start-report-form{
    background-color: transparent;
    width:fit-content;
    cursor:pointer;
}

.start-report-form:active img{
    transform: scale(0.97);
}

.link-verticle{
    display:flex;
    justify-content: center;
    gap:6%;
    ul{
        padding:2px;
        font-size: xx-large;
    }
}

.highlight-section{
    position:relative;
}
.highlight-section::after{
    content:' ';
    position:absolute;
    top:0; left:0; width:100%; height:100%;
    background-color: rgba(30, 30, 30, 0.4);
}
.report-image{
    width:40%;
}
.report-form-margin{
    margin:0 20% auto;
    padding:10px;
    background-color:#E8E8EA;
    border-color: #C7BA9C;
    border-radius: 16px;
    border-style:double; 
    border-width: 40px;
        h1{
        display:flex;
        justify-content:center;
        font-family:monospace;
        text-decoration: overline;
        font-size: 40px;
    }
}



#buttons-rows{
    display:flex;
    justify-content:center
}

.button-container{

    padding:0;
    margin:0;
}

.button{

    text-align: center;
    font-size:x-large;
    cursor:pointer;
    
    border-radius: 12px;
    min-width:31%;
    height:70px;
    margin:10px;
    padding:0;
    
    .onclick{
        color:white;
}
}

.add-threat-button{
    padding:2;
    margin:5px 0px 0px 0px;
    border-radius: 16px;
    background-color: navy;
    cursor:pointer;
    font-size: large;
    color:azure;
}

/* button threat */



/* close list style */


#tasks li{
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 4px;
    width:fit-content;
    font-size: medium;
    font-family:'Times New Roman', Times, serif;
}


.close-btn {
    color: #ff0000;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
    padding-left: 10px;
}

.close-btn:hover {
    color: #b30000; /* Darkens the red button slightly when hovered */
}


.space{
    padding:50px;
}


#report-sent{
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin:2% 12% auto;
    background-color: cornflowerblue;
    color:white;
    padding-bottom:2%;
    border-radius: 16px;
}


hr{  
    margin:10px;
}


.report-form-container{
    max-width:400px;
    padding:10px;
    margin:auto;

}
.edit-info,textarea{
    width:98%;
    min-height: 30px;
    font-size: medium;
    font-family: Georgia, 'Times New Roman', Times, serif;

}
#input-date{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
    direction: ltr;
}

textarea{
    min-height: 80px;
}

.next-button{
    border-radius: 15px;
    background-color:mediumturquoise;
    min-width: 10%;
    min-height: 30px;
    cursor:pointer;
}

.confirm-text{
    font-size: medium;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

#confirm-tasks li{
    white-space: pre-line !important; 
    display: block !important;
}

#back-button{
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    height:50px;
    width:8%
}

#submit-button{
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    height:50px;
    width:8%
}

.send-report-image-container{
    background-color: white;
    display:flex;
    justify-content: center;
}

.thank-you-style{
    padding:10px;
    display:flex;
    justify-content:space-between;
    width:100%;
    flex-direction: column;
    align-items: center;

}

#thanks-email-container {
    font-size: large;
    width:49%;
    display: flex;
    align-items: flex-start;
    border-radius: 16px;
    border: none;
    box-shadow: inset 0 0 0 2px white;
    margin:0;
    padding:8px;
    input,button{
        font-size: large;
        font-family:Arial, Helvetica, sans-serif;
        background-color: transparent; 
        color: white; 
        border:none !important; 
        outline:none !important; 
        background:none;
    }
}

#thanks-email-container:has(button:active){
        transform: translate(1px,1px) scale(0.96);
        box-shadow: inset 0 12px 32px darkblue;
    }


</style>