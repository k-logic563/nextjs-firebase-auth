import { faker } from '@faker-js/faker'

import { signIn, signUp, deleteUser, auth } from '../../support/firebase'

describe('認証テスト', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()

  beforeEach(() => {
    signIn(email, password)
      .then(async (user) => {
        await user.user.delete()
        await signUp(email, password)
      })
      .catch(async () => {
        await signUp(email, password)
      })
  })

  afterEach(() => {
    deleteUser(auth.currentUser!)
  })

  it('ログインができる', () => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type(email)
    cy.get('[data-cy=password]').type(password)
    cy.get('[data-cy=submit]').click()
    cy.contains(email.toLowerCase())
  })

  it('サインアップし、ログインができる', () => {
    cy.visit('/signup')
    cy.get('[data-cy=email]').type(email)
    cy.get('[data-cy=password]').type(password)
    cy.get('[data-cy=submit]').click()
    cy.visit('/login')
    cy.get('[data-cy=email]').type(email)
    cy.get('[data-cy=password]').type(password)
    cy.get('[data-cy=submit]').click()
    cy.contains(email.toLowerCase())
  })

  it('ログインエラー', () => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type(email)
    cy.get('[data-cy=password]').type('1234')
    cy.get('[data-cy=submit]').click()
    cy.contains('パスワードが違います')

    cy.get('[data-cy=email]').clear()
    cy.get('[data-cy=email]').type('testtesttest@example.com')
    cy.get('[data-cy=submit]').click()
    cy.contains('ログイン情報が違います')
  })

  it('サインアップエラー', () => {
    cy.visit('/signup')
    cy.get('[data-cy=email]').type(email)
    cy.get('[data-cy=password]').type(password)
    cy.get('[data-cy=submit]').click()
    cy.contains('既に使用されているメールアドレスです')
  })
})
