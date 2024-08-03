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

type Query {
    me:User
}

`
// Needs query for autentication''

module.exports = typeDefs