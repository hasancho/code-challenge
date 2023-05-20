# Notes

- [Notes](#notes)
  - [Introduction](#introduction)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Instalation](#instalation)
  - [Screenshots](#screenshots)
  - [Link](#link)

## Introduction

Notes is a simple application for taking and managing notes. With Notes you can organize them into categories, and perform searches to find the desired notes.

## Tech Stack

- frontend:
  - React, Tailwinds
- backend:
  - Express, Sequelize
- database:
  - PostgreSQL

## Features

- Create new note
  - users can make notes with title, content and tag, tag can more than one in their notes but tag must be create first also users can create notes without tag
- Create new tag
  - users can make tag to categorize their notes
- Pinned notes
  - users can pin their notes to point out easily in above page
- Search notes
  - users can search to find their desire notes.

## Instalation

```bash
# instruksi instalasi
$ git clone https://github.com/hasancho/code-challenge.git
$ cd code-challenge
# move to frontend folder
$ cd frontend
$ npm install
# you need to setup your env first
$ npx sequelize-cli db:migrate
$ npm run dev
# move to backend folder
$ cd backend
$ npm install
# you need to setup your env first
$ npm run dev
```

## Screenshots

Database Table
![Project Screenshot](database/Screenshot%202023-05-20%20203255.png)

Create Note
![Project Screenshot](backend/screenshot/Screenshot%202023-05-20%20204649.png)

Get All Note
![Project Screenshot](backend/screenshot/Screenshot%202023-05-20%20204839.png)

Get Note By ID
![Project Screenshot](backend/screenshot/Screenshot%202023-05-20%20205019.png)

Edit Note
![Project Screenshot](backend/screenshot/Screenshot%202023-05-20%20205509.png)

Delete Note
![Project Screenshot](backend/screenshot/Screenshot%202023-05-20%20205931.png)

Home Page
![Project Screenshot](frontend/screenshot/Screenshot%202023-05-20%20210849.png)

Add Note Page
![Project Screenshot](frontend/screenshot/Screenshot%202023-05-20%20211058.png)

Add Tag Page
![Project Screenshot](frontend/screenshot/Screenshot%202023-05-20%20211159.png)

Detail Page
![Project Screenshot](frontend/screenshot/Screenshot%202023-05-20%20211336.png)

Search Note
![Project Screenshot](frontend/screenshot/Screenshot%202023-05-20%20211305.png)

Pin Note
![Project Screenshot](frontend/screenshot/Screenshot%202023-05-20%20211442.png)

## Link

Here the link to the project: https://note-code-challenge.netlify.app/
