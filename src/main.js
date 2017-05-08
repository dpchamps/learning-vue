"use strict";

window.Event = new Vue();

Vue.component('coupon', {
    template: `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied" v-model="userCoupon">
    `,
    methods: {
        onCouponApplied: function(){
            var isValid = this.validCoupons.filter(validCoupon => {
                return validCoupon === this.userCoupon;
            });

            Event.$emit('coupon-applied', (isValid.length > 0));
        }
    },
    data: function(){
        return {
            userCoupon: '',
            validCoupons: ['AA', "AB", "AC"],

        }
    }
});

var app = new Vue({
    el: '#root',
    data: {
        couponApplied: false,
        invalidCoupon: false,
        couponSuccessString: "Great! Coupon is valid!",
        couponErrorString: ":/ that doesn' look right to me..."
    },
    created: function(){
        Event.$on('coupon-applied', isValidCoupon => {
            var alertMsg = (isValidCoupon) ? this.couponSuccessString : this.couponErrorString;
            alert(alertMsg);
        })
    }

});