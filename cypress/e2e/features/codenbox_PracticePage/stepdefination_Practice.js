/// <reference types='cypress' />


import {Given,When,Then} from '@badeball/cypress-cucumber-preprocessor/steps'

Given('I am in the codenboxautomationlab landing page',()=>
{
    cy.visit("https://codenboxautomationlab.com/")
})