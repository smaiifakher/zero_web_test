 <template>
   <div class="our-help">
     <h1>{{ pageName}}</h1>
     <p>{{pageDes}}</p>
   </div>
 </template>
 <script>
 export default {
   data: function () {
     return {
       pageName: "Help us",
       pageDes: "This is help us page"
     };
   },
   name: "help"
 }
 </script>