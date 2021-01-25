<template>
<div>
        <theheader></theheader>
        <form class="form" name="contactForm"  method="post"  @submit="contactForm" novalidate="true" action="https://getform.io/f/95068abb-e017-40c5-842f-fed670077b02" >

            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
            <div class="vtextbox">
                <label for="name" class="vlabel"><span>Name</span></label>
                <input id="name" v-model="name" type="text" name="name" class="vinput" placeholder="Ayşe Fatma Hayriye">
            </div>
            <div class="vtextbox">
                <label for="email" class="vlabel"><span> e-mail</span></label>
                <input id="email" v-model="email" type="email" name="email" class="vinput"
                    placeholder="aysefatma@hayriye.com">
            </div>
            <div class="vtextbox">
                <label for="message" class="vlabel"><span>Message</span></label>
                <textarea v-model="message" name="message" placeholder="Your message" class="vtextarea"></textarea>
            </div>

            <div class="vbutton-end">
                <button type="submit" value="Submit" class="vbutton vbutton-default vbutton-end">Send</button>
            </div>

        </form>
         <thefooter></thefooter>
  </div>
</template>
<script>
    
import Thefooter from '../layouts/Thefooter.vue'
import Theheader from '../layouts/Theheader.vue'
    export default {
         components: {

        Theheader,
        Thefooter,
    },
        data() {
            return {
                errors: [],
                name: null,
                email: null,
                message: null
            }
        },
        methods: {
            contactForm: function (e) {
                if (this.name && this.email) {
                    return true;
                }
                this.errors = [];
                if (!this.name) {
                    this.errors.push('Name Required');
                }
                if (!this.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required.');
                }
                if (!this.errors.length) {
                    return true;
                }

                e.preventDefault();
            },
            validEmail: function (email) {
                var re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

        }

    }
</script>