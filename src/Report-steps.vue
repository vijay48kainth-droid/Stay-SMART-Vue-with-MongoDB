<template>
    <div class="report-process">
        <div :class="{ grey: step1High === 'blank' }">
            <h3>Step-1</h3>
            <p class="shared-font-style">Fill out the form and the required fields correctly.</p>
            <img style="width:34%;" :src="form1">  
        </div>
        <div :class="{ grey: step2High === 'blank' }">
            <h3>Step-2</h3>
            <p class="shared-font-style" id="space-under-report-process">Review the information in the report before submitting.<br>
            If there are any mistakes return to step-1 to correct them.</p>
            <img class="report-image" :src="form2">  
        </div>
        <div :class="{ grey: step3High === 'blank' }">
            <h3>Step-3</h3>
            <p class="shared-font-style">The report will be sent to us and we will support you.</p>
            <img class="report-image" :src="form3">  
        </div>
    </div>
</template>
<script>

export default {
    name:"ReportSteps",
        data() {
            return {
                form1: "/Report-images/report-step-1-image.svg",
                form2: "/Report-images/report-step-2-image.svg",
                form3: "/Report-images/report-step-3-image.svg"
            }
    },
    props:{
        step1High: String,
        step2High: String,
        step3High: String,
    }
}

</script>
<style>

.grey{
    box-shadow: inset 0 0 0 9999px rgba(30, 30, 30, 0.4);
    filter: grayscale(100%) brightness(65%);
}

</style>