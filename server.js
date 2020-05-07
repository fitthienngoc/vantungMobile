const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/chi-tiet/:nameProduct/:id', (req, res) => {
      const actualPage = '/chi-tiet'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/chi-tiet-hoa-don/:id', (req, res) => {
      const actualPage = '/chi-tiet-hoa-don'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })
    server.get('/danh-sach-hoa-don/', (req, res) => {
      const actualPage = '/danh-sach-hoa-don'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/search/:categories/:id_categorie/:search', (req, res) => {
      const actualPage = '/search'
      const queryParams = {
        categories: req.params.categories,
        id_categorie: req.params.id_categorie,
        search: req.params.search
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/search/:categories/:id_categorie', (req, res) => {
      const actualPage = '/search'
      const queryParams = {
        categories: req.params.categories,
        id_categorie: req.params.id_categorie
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/search/:categories/', (req, res) => {
      const actualPage = '/search'
      const queryParams = {
        categories: req.params.categories
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/search', (req, res) => {
      const actualPage = '/search'
      const queryParams = {
        
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3200, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3200')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
