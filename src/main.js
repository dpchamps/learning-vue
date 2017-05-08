"use strict";


Vue.component('coupon', {
    template: `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied" v-model="userCoupon">
    `,
    methods: {
        onCouponApplied: function(){
            var isValid = this.validCoupons.filter(validCoupon => {
                return validCoupon === this.userCoupon;
            });
            this.$emit('coupon-applied', (isValid.length > 0));
        }
    },
    data: function(){
        return {
            userCoupon: '',
            validCoupons: ['AA', "AB", "AC"]
        }
    }
});

var app = new Vue({
    el: '#root',
    data: {
        couponApplied: false,
        invalidCoupon: false
    },
    methods: {
        onCouponApplied: function(isValid){
            this.couponApplied = isValid;
            this.invalidCoupon = !isValid;
        }
    }
});