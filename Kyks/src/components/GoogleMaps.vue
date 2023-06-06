<template>
  <div>
    <GoogleMap
      api-key="AIzaSyBaKiiXpZroOOPvB2JmkoleQU_bp_5LrOc"
      style="width: 100vw; height: 100vh;"
      :center="center"
      :zoom="15"
    >
      <MarkerCluster>
        <Marker
          v-for="(location, i) in locations"
          :options="{ position: location }"
          :key="i"
          @click="showPopup(location)"
        />
      </MarkerCluster>
      <InfoWindow
        :position="selectedLocation"
        :opened="isPopupOpen"
        @close="closePopup"
      >
        <div>
          <!-- Contenu de la fenêtre popup -->
          <h3>{{ selectedLocationInfo.name }}</h3>
          <p>{{ selectedLocationInfo.description }}</p>
        </div>
      </InfoWindow>
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { GoogleMap, Marker, MarkerCluster, InfoWindow } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster, InfoWindow },
  setup() {
    const center = { lat: 47.492114921405935, lng: 6.810191127618115}

    const locations = [
      { lat: 47.49489170043829, lng: 6.80914779737556, name: 'Arena25', description: 'Description de Arena25' },
      { lat: 47.48871021911919, lng: 6.811195668540534, name: 'Futsal Soccer', description: 'Description de Futsal Soccer' },
      { lat: 47.50058607008164, lng: 6.8036407749791294, name: 'Basketball', description: 'Description de stade de basketball' },
    ]

    const selectedLocation = ref(null)
    const isPopupOpen = ref(false)
    const selectedLocationInfo = ref({})

    const showPopup = (location) => {
      selectedLocation.value = location
      selectedLocationInfo.value = locations.find((loc) => loc.lat === location.lat && loc.lng === location.lng)
      isPopupOpen.value = true
    }

    const closePopup = () => {
      isPopupOpen.value = false
    }

    return { center, locations, selectedLocation, isPopupOpen, selectedLocationInfo, showPopup, closePopup }
  },
})
</script>