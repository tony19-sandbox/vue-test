<template>
    <div>
        <h1>Map</h1>
        <div id="map" class="map" ref="map" />
    </div>
</template>

<script>
import L from "leaflet";
import Config from "@/config";

export default {
    name: "Map",
    data() {
        return {
            map: null
        };
    },
    methods: {
        initMap() {
            console.log(L, Config);
            const el = this.$refs.map;
            console.log(el);

            var nw = new L.latLng(46.373, 1.2);
            var se = new L.latLng(49.017, 19.0);
            var austriaBounds = new L.latLngBounds(nw, se);

            const options = {
                zoomControl: true,
                minZoom: 1,
                maxZoom: 16
            };

            this.map = L.map(el, options);

            this.map.fitBounds(austriaBounds);

            const baseMap = L.tileLayer(Config.globus.GLOBUS_TILE_URL, {
                subdomains: [1, 2],
                minZoom: 4,
                maxZoom: 16
            });

            baseMap.addTo(this.map);

            //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
            console.log(this.map);
        }
    },
    mounted() {
        this.initMap();
    }
};
</script>

<style src="leaflet/dist/leaflet.css"></style>

<style lang="scss" scoped>
.map {
    overflow: hidden;
    width: 100%;
    height: 600px;
    margin-bottom: 20px;
}
</style>
