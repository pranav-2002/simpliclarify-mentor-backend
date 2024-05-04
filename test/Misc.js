const { request } = require('./index')

describe('Misc', function () {
  it('Get all universities and cities', async function () {
    try {
      const response = await request.post('/misc/get/universities-and-cities')
        .send({ countryCode: 'IN' })
        .expect('Content-Type', /json/)
        .expect(200)
      const body = response.body
      if (!(body.message === 'Got the list of universities and cities in the given country')) {
        throw new Error('Body message does not match')
      }

      const requiredElements = ['data']
      for (let i = 0; i < requiredElements.length; i++) {
        if (!(requiredElements[i] in body)) {
          throw new Error(`Body element ${requiredElements[i]} is missing`)
        }
      }
    } catch (err) {
      throw err
    }
  })
})
