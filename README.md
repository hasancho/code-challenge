# Notes

- [Notes](#notes)
  - [Introduction](#introduction)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Instalation](#instalation)

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
