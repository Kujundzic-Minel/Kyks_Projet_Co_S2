<template>
    <div>
        <GoogleMap apiKey="AIzaSyAxqDevC5_pxxlMGUtWCiIAuy9LLLXjP5g" style="width: 100%; height: 500px" :center="{ lat: lat, lng: lng}" :zoom="15">
            <Marker :options="{ position: { lat: lat, lng: lng} }" />
        </GoogleMap>

    </div>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-maps';    
export default{
    components: { GoogleMap, Marker },

    data() {
        return {
            apiKey: "AIzaSyAxqDevC5_pxxlMGUtWCiIAuy9LLLXjP5g",
                lat: 0,
                lng: 0,
            },
        };
    },

    created() {
        this.$getLocation()
        .then((coordinates) => {
            this.lat = coordinates.lat;
            this.lng = coordinates.lng;
      })
        .catch((error) => {
            console.log(error);
      });
  },

</script>