<template>
    <header class="container justify-space-between">
        <div class="wrapper">
            <div class="header-title noselection">
                <div
                    class="header-title-img"
                    @click="$router.push('/')"
                />
            </div>
        </div>
    </header>
</template>

<style>
header {
    height: 64px;
    width: 100%;
    display: flex;
    background-color: #ffffff;
    padding: 8px;
    align-items: center;
    position: fixed;
    z-index: 100;
    border-bottom: 1px solid #dadce0;
}
.header-title {
    display: flex;
    align-items: center;
    min-width: 200px;
}
.header-title-img {
    background-image: url('/img/volunity_long.png');
    background-repeat: no-repeat;
    height: 64px;
    width: 175px;
    background-position: center;
    background-size: 175px;
    cursor: pointer;
}
</style>
