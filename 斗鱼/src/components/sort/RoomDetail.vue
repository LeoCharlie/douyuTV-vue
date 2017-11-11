<template>
    <div class="room-detail">
        <img :src="room.room_src" alt="">
        <ul>
            <li>{{room.room_name}}</li>
            <li>{{room.nickname}}</li>
            <li>{{room.online}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['room']
}
</script>

<style scoped>

</style>