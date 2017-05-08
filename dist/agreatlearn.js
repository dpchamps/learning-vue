(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
