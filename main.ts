/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Sep 2024
 * This program Runs Cookie Clicker
*/


let cookieNumber: number 

basic.clearScreen()

cookieNumber = 0
basic.showString(cookieNumber.toString())

input.onButtonPressed(Button.A, function(){
cookieNumber = cookieNumber + 1
basic.showString(cookieNumber.toString())


input.onButtonPressed(Button.B, function(){
cookieNumber = cookieNumber = 0 
basic.showString(cookieNumber.toString())})})