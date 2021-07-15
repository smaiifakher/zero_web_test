import Vue from "vue";
// make upper case
Vue.filter("uppercase",function (v){
    return v.toUpperCase();
});

// make reverse
Vue.filter("reverse",function (v){
    return v.split("").reverse("").join("");
})

Vue.filter("shorten",function (v){
    return v.substring(0,60)+"...";
})