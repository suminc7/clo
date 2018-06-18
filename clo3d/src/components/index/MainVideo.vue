<template>
    <div class="video-container main">
        <video id="myVideo" poster="~static/images/video-posters/movie.jpg" playsinline autoplay muted loop>
            <source src="~static/videos/movie.mp4"/>
        </video>
    </div>
</template>

<script>
    export default {
        name: 'MainVideo',
        data() {
            return {
                name: 'MainVideo'
            }
        }

    }
</script>