// make format  custom directive
import Vue from "vue";

Vue.directive("format", {
    bind: function (el, binding) {
        el.style.fontSize = binding.value + "px";

        console.log(`directive name= ${binding.name}`)
        console.log(`directive = ${binding.value}`)
        //console.log(`directive = ${binding.modifiers}`)

        //bold modifier
        if (binding.modifiers.bold){
            el.style.fontWeight="bold"
        }

        //orange modifier
        if (binding.modifiers.orange){
            el.style.color="orange"
        }
    }
})