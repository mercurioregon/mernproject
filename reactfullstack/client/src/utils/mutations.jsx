import { gql } from "@apollo/client";
export const USER_LOGIN=gql `
mutation Login ($email:String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user {
    _id
    username
    }
        }
}`
export const ADD_USER=gql`
mutation AddUser ($email:String!, $email:String! $password: String!) {
    adduser(username: $username, email: $email, password: $password) {
    token
    user {
    _id
    username
    }
        }
}
`
