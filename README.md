<p align="center">
 <picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/92259277/191530645-60d8b36b-5f1c-4c03-98e1-d48103db4e49.png">
  <img width="500" src="https://user-images.githubusercontent.com/92259277/190894050-ba6b293d-c3b0-4679-86aa-61622a4dafde.png"/>
 </picture>
 <h1 align="center">CodersHQ Bounties</h1>
</p>

<p align="center">
 <a href="https://github.com/Coders-HQ/Bounty/blob/main/LICENSE.md" target="_blank"><img width="80" src="https://img.shields.io/badge/License-MIT-red.svg"></a>
 <a href="https://discord.gg/CPQHAZrg8b0" target="_blank"><img width="80" src="https://img.shields.io/badge/Discord-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white"></a>
</p>

## 📋 Table Of Contents

- Introduction
- Project Parts
  - API Gateway
  - Frontend Interface
- General Concerns/Ideas

## 🍫 Introduction

Sometimes, companies come across problems that they don't really have the time or technical expertise to solve. These companies need people with the time and technical expertise to solve these problems for them.

CodersHQ Bounties is a UI thats sits on top of the CodersHQ Backend that allows companies to be able to post challenges through an application. Users are then able to participate in these challenges through the application and be ranked based on a Ranking Algorithm. Depending on the type of challenge, the user(s) with the highest rank will win the challenge, and in return, receive a cash prize for their hard work!

## ⚙️ Project Parts

The structure of this project consists of 2 major components:

- API Gateway
- Frontend Interface

## 🔗 API Gateway

The API Gateway is what joins everything together. It is the centerpoint for all communication between CodersHQ Backend, CodersHQ Interface and CodersHQ Bounties.

For those who may not be familiar with the concept of an API, it stands for "Application Programming Interface". It's an intermediary that allows different pieces of software to be able to talk to each other easily and efficiently. Think of it as a translator between two people - one speaks English and the other speaks Arabic. The translator or API's job is to translate between the two languages so that both people can understand what the other person is saying. Read more about it [here](https://apimetrics.io/api-knowledge-base/apis-for-dummies/).

As a member of the CodersHQ Bounties team, you are NOT responsible for developing the API in any way. We're just _using_ it to be able to communicate with the other projects.

## 👨🏻‍💻 Frontend Interface

As a member of the CodersHQ Bounties team, THIS is what we're going to be working on. Our responsibility is to develop the entire front-end interface of the project. To start with, I have divided this task into 5 subsections:

- Create Account
- Sign-In
- Dashboard
- Search Page
- Challenge Page

Here's a flowchart to visualize it better:

![Flow Chart](https://user-images.githubusercontent.com/92259277/190863663-111c8895-cbf1-451c-9601-3a171b98490b.png 'Flow Chart')

NOTE: Keep in mind that none of this is set in stone. We're all ears for any suggestions you may have 👂🏻

## 💡 General Concerns or Ideas

This section will be updated continuously based on your feedback and suggestions. This is what we have so far:

- Will the payments be given and received through the website directly using an integrated wallet (blockchain 👀) or sent and received privately by both parties?
- A small fee should be charged for each challenge posting, just so that companies don't stop caring about their challenges and waste the efforts of all of the participants (this is a common issue on Freelancer)
- All celebratory effects must include bounty bars 🍫

## 📃 Developer Guide

This project is built with react ecosystem.

### Prerequisite

Install the following tools on your system.

- [NodeJS](https://nodejs.org/en/download/)
- [VSCode](https://code.visualstudio.com/download) or any other code editor
- [Git](https://git-scm.com/downloads)

### How to Run Project

- `git clone git@github.com:Coders-HQ/Bounty.git`
- `cd Bounty`
- `npm i`
- `npm start`

### Hosting

The app is hosted on GitHub pages.

- `npm run deploy`
- Access the app at https://coders-hq.github.io/Bounty/
- Updates
- auth
