<template>
<div>
        <theheader></theheader>
    <div class="tricks">
        <div>
            <h3>{{title}}</h3>
            <p>Everyone can cook Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida sapien quis
                justo pretium, id
                bibendum ex accumsan. Curabitur sapien augue, suscipit ut elementum ac, euismod eu eros. Duis molestie
                enim nibh, sed
                blandit libero porttitor id.</p>
            <p>Choose Your Level</p>
        </div>
        <div class="level-list">
            <div class="level-name" :class="level.levels" v-for="level in levels" :key="level.level"
                v-on:click="filter(level.levels)">
                {{ level.levels }}
            </div>
        </div>
        <transition-group name="cards-section" class="cards-section">
            <div v-for="trick in filteredTricks" :key="trick.Id" class="cards" :class="trick.levels">
                <div class="card">
                    <h5 class="title">{{ trick.title }}</h5>
                    <div class="desc-heigt">
                        <p class="desc">{{ trick.desc }}</p>

                    </div>
                </div>
            </div>
        </transition-group>

    </div>
     <thefooter></thefooter>
  </div>
</template>
<style scoped lang="scss">
    .tricks {
        margin: 0 24px;
        margin-bottom: 24px;

        .level-list {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            padding: 8px;
            padding-left: 0;

            .level-name {
                margin-right: 8px;
                padding: 16px;
                border-radius: 6px;
                color: white;
                font-family: Montserrat;
                font-weight: 500;
                font-size: 15px;
                margin: 4px 4px 4px 0; 
                cursor: pointer;

                &.Intermadiate {
                    background-color: $beige;
                }

                &.Advanced {
                    background-color: $pink;
                }

                &.Beginner {
                    background-color: $sand;
                }

                &.all {
                    background-color: $brown;
                }
            }
        }

        .cards-section {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 16px;
            @include breakpoint(tablet) {
                grid-template-columns: repeat(2, 1fr);
            }

            @include breakpoint(mobile) {
                grid-template-columns: repeat(1, 1fr);
            }

            .cards {
                margin: 0;
                padding:16px;
                border-radius: 6px;
                height: max-content;

                &.Intermadiate {
                    background-color: $beige;
                }

                &.Advanced {
                    background-color: $pink;
                }

                &.Beginner {
                    background-color: $sand;
                }

                .card {
                    display: flex;
                    flex-wrap: wrap;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    transform-origin: bottom;

                    &:hover {
                        -webkit-line-clamp: 9999;
                        transform-origin: bottom;
                        z-index: 2;

                    }

                    .title {
                        flex: 1 1 160px;
                        margin: 8px 0;
                        font-size: 22px;
                        font-weight: 600;
                        max-width: 240px;
                    }

                    .desc-heigt {


                        .desc {
                            flex: 1 1 160px;
                            font-size: 15px;
                            line-height: 1, 5;
                            text-align:left;
                        }
                    }
                }
            }
        }

        .cards-section-enter {
            transform: translateY(16px);
            opacity: 0;
            transition: all .8s ease-in;
        }

        .cards-section-leave-to {
            transform: translateY(16px);
            opacity: 0;
            transition: all .8s ease-out;
        }

        .cards-section-enter-active {
            transition: all .8s ease-in;
        }

        .cards-section-leave-active {
            transition: all .8s ease-out;
        }
    }
</style>
<script>
    import data from '../static/data.json'
    
import Thefooter from '../layouts/Thefooter.vue'
import Theheader from '../layouts/Theheader.vue'
    export default {
        components: {

        Theheader,
        Thefooter,
    },
        data() {
            return {
                title: 'Tricks For Everyone',
                tricks: data.tricks,
                levels: data.levels,
                currentLevel: 'all'
            }
        },
        computed: {
            filteredTricks: function () {
                var filter = this.currentLevel;
                return this.tricks.filter(function (trick) {
                    return trick.levels.indexOf(filter) !== -1;
                });
            }
        },
        methods: {
            filter: function (level) {
                this.currentLevel = level;
            }
        }

    }
</script>