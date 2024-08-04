const typeDefs = `

type User {
    _id: ID!
    username: String!
    email: String
    faveBooks: [Book]
   
}

type Book {
    bookId: ID!
    authors: [String]
    description: String    
    image: String
    link: String
    title: String!
    
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me:User
}

type Mutation {
    login(email: String!, password: String!)
}


`
// Needs query for autentication''

module.exports = typeDefs